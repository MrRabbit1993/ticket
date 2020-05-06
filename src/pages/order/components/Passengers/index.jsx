import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import Passenger from './passenger';
const Passengers = memo(function Passengers(props) {
    const {
        passengers,
        createAdult,
        createChild,
        removePassenger,
        updatePassenger,
        showGenderMenu,
        showFollowAdultMenu,
        showTicketTypeMenu
    } = props;
    const nameMap = useMemo(() => {
        const ret = {};
        for (const passenger of passengers) {
            ret[passenger.id] = passenger.name;
        }
        return ret;
    }, [passengers]);
    return (
        <div className={styles.passengers}>
            <ul>
                {passengers.map(passenger => {
                    return (
                        <Passenger
                            {...passenger}
                            key={passenger.id}
                            onRemove={removePassenger}
                            onUpdate={updatePassenger}
                            showGenderMenu={showGenderMenu}
                            showFollowAdultName={nameMap[passenger.followAdult]}
                            showFollowAdultMenu={showFollowAdultMenu}
                            showTicketTypeMenu={showTicketTypeMenu}
                        />
                    );
                })}
            </ul>
            <section className={styles.add}>
                <div className={styles.adult} onClick={() => createAdult()}>
                    添加成人
                </div>
                <div className={styles.child} onClick={() => createChild()}>
                    添加儿童
                </div>
            </section>
        </div>
    );
});
Passengers.propTypes = {
    passengers: PropTypes.array.isRequired,
    createAdult: PropTypes.func.isRequired,
    createChild: PropTypes.func.isRequired,
    removePassenger: PropTypes.func.isRequired,
    updatePassenger: PropTypes.func.isRequired,
    showGenderMenu: PropTypes.func.isRequired,
    showFollowAdultMenu: PropTypes.func.isRequired,
    showTicketTypeMenu: PropTypes.func.isRequired
};
export default Passengers;
