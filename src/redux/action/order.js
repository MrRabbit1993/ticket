import * as ActionTypes from '../constants/order.js';

export function setArriveDate(arriveDate) {
    return {
        type: ActionTypes.ACTION_SET_ARRIVE_DATE,
        payload: arriveDate,
    };
}
export function setDepartTimeStr(departTimeStr) {
    return {
        type: ActionTypes.ACTION_SET_DEPART_TIME_STR,
        payload: departTimeStr,
    };
}
export function setArriveTimeStr(arriveTimeStr) {
    return {
        type: ActionTypes.ACTION_SET_ARRIVE_TIME_STR,
        payload: arriveTimeStr,
    };
}
export function setDurationStr(durationStr) {
    return {
        type: ActionTypes.ACTION_SET_DURATION_STR,
        payload: durationStr,
    };
}
export function setPrice(price) {
    return {
        type: ActionTypes.ACTION_SET_PRICE,
        payload: price,
    };
}
export function setPassengers(passengers) {
    return {
        type: ActionTypes.ACTION_SET_PASSENGERS,
        payload: passengers,
    };
}
export function setMenu(menu) {
    return {
        type: ActionTypes.ACTION_SET_MENU,
        payload: menu,
    };
}
export function setIsMenuVisible(isMenuVisible) {
    return {
        type: ActionTypes.ACTION_SET_IS_MENU_VISIBLE,
        payload: isMenuVisible,
    };
}
export function setSearchParsed(searchParsed) {
    return {
        type: ActionTypes.ACTION_SET_SEARCH_PARSED,
        payload: searchParsed,
    };
}

export function fetchInitial(url) {
    return (dispatch, getState) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const {
                    departTimeStr,
                    arriveTimeStr,
                    arriveDate,
                    durationStr,
                    price,
                } = data;

                dispatch(setDepartTimeStr(departTimeStr));
                dispatch(setArriveTimeStr(arriveTimeStr));
                dispatch(setArriveDate(arriveDate));
                dispatch(setDurationStr(durationStr));
                dispatch(setPrice(price));
            });
    };
}

let passengerIdSeed = 0;

//成人点击购票
export function createAdult() {
    return (dispatch, getState) => {
        const { passengers } = getState()
            .get('orderState')
            .toJS();

        for (let passenger of passengers) {
            const keys = Object.keys(passenger);
            for (let key of keys) {
                if (!passenger[key]) {
                    return;
                }
            }
        }

        dispatch(
            setPassengers([
                ...passengers,
                {
                    id: ++passengerIdSeed,
                    name: '',
                    ticketType: 'adult',
                    licenceNo: '',
                    seat: 'Z',
                },
            ])
        );
    };
}
//添加儿童
export function createChild() {
    return (dispatch, getState) => {
        const { passengers } = getState()
            .get('orderState')
            .toJS();
        let adultFound = null; //关联成人id

        for (let passenger of passengers) {
            const keys = Object.keys(passenger);
            for (let key of keys) {
                if (!passenger[key]) {
                    return;
                }
            }

            if (passenger.ticketType === 'adult') {
                adultFound = passenger.id;
            }
        }

        if (!adultFound) {
            alert('请至少正确添加一个同行成人');
            return;
        }

        dispatch(
            setPassengers([
                ...passengers,
                {
                    id: ++passengerIdSeed,
                    name: '',
                    gender: 'none',
                    birthday: '',
                    followAdult: adultFound,
                    ticketType: 'child',
                    seat: 'Z',
                },
            ])
        );
    };
}

export function removePassenger(id) {
    return (dispatch, getState) => {
        const { passengers } = getState()
            .get('orderState')
            .toJS();

        const newPassengers = passengers.filter(passenger => {
            return passenger.id !== id && passenger.followAdult !== id; //移除了成人，那么儿童也会被移除
        });

        dispatch(setPassengers(newPassengers));
    };
}
//更新乘客信息
export function updatePassenger(id, data, keysToBeRemoved = []) {
    return (dispatch, getState) => {
        const { passengers } = getState()
            .get('orderState')
            .toJS();

        for (let i = 0; i < passengers.length; ++i) {
            if (passengers[i].id === id) {
                const newPassengers = [...passengers];
                newPassengers[i] = Object.assign({}, passengers[i], data);

                for (let key of keysToBeRemoved) {
                    delete newPassengers[i][key];
                }

                dispatch(setPassengers(newPassengers));
                break;
            }
        }
    };
}

export function showMenu(menu) {
    return dispatch => {
        dispatch(setMenu(menu));
        dispatch(setIsMenuVisible(true));
    };
}
//性别弹出层
export function showGenderMenu(id) {
    return (dispatch, getState) => {
        const { passengers } = getState();

        const passenger = passengers.find(passenger => passenger.id === id);

        if (!passenger) {
            return;
        }

        dispatch(
            showMenu({
                onPress(gender) {
                    dispatch(updatePassenger(id, { gender }));
                    dispatch(hideMenu());
                },
                options: [
                    {
                        title: '男',
                        value: 'male',
                        active: 'male' === passenger.gender,
                    },
                    {
                        title: '女',
                        value: 'female',
                        active: 'female' === passenger.gender,
                    },
                ],
            })
        );
    };
}

export function showFollowAdultMenu(id) {
    return (dispatch, getState) => {
        const { passengers } = getState();

        const passenger = passengers.find(passenger => passenger.id === id);

        if (!passenger) {
            return;
        }

        dispatch(
            showMenu({
                onPress(followAdult) {
                    dispatch(updatePassenger(id, { followAdult }));
                    dispatch(hideMenu());
                },
                options: passengers
                    .filter(passenger => passenger.ticketType === 'adult')
                    .map(adult => {
                        return {
                            title: adult.name,
                            value: adult.id,
                            active: adult.id === passenger.followAdult,
                        };
                    }),
            })
        );
    };
}

export function showTicketTypeMenu(id) {
    return (dispatch, getState) => {
        const { passengers } = getState()
            .get('orderState')
            .toJS();

        const passenger = passengers.find(passenger => passenger.id === id);

        if (!passenger) {
            return;
        }

        dispatch(
            showMenu({
                onPress(ticketType) {
                    if ('adult' === ticketType) {
                        dispatch(
                            updatePassenger(
                                id,
                                {
                                    ticketType,
                                    licenceNo: '',
                                },
                                ['gender', 'followAdult', 'birthday']
                            )
                        );
                    } else {
                        // const adult = passengers.find(passenger =>passenger.id === id &&passenger.ticketType === 'adult' );
                        const adult = passengers.find(
                            passenger =>
                                passenger.id !== id &&
                                passenger.ticketType === 'adult'
                        );

                        if (adult) {
                            dispatch(
                                updatePassenger(
                                    id,
                                    {
                                        ticketType,
                                        gender: '',
                                        followAdult: adult.id,
                                        birthday: '',
                                    },
                                    ['licenceNo']
                                )
                            );
                        } else {
                            alert('没有其他成人乘客');
                        }
                    }

                    dispatch(hideMenu());
                },
                options: [
                    {
                        title: '成人票',
                        value: 'adult',
                        active: 'adult' === passenger.ticketType,
                    },
                    {
                        title: '儿童票',
                        value: 'child',
                        active: 'child' === passenger.ticketType,
                    },
                ],
            })
        );
    };
}

export function hideMenu() {
    return setIsMenuVisible(false);
}
