import React from 'react';
import { connect } from 'react-redux';
import styles from './index.module.less';
import Header from '@/components/Header';
const Index = props => {
    const {} = props;
    // pathname: `/order/${trainNumber}/${departStation}/${arriveStation}/${type}/${dayjs(departDate).format('YYYY-MM-DD')}`,
    return (
        <div className={styles.container}>
            <div className={styles['header-wrapper']}>
                <Header title="订单填写" />
            </div>
            {/* <div className="detail-wrapper">
                <Detail
                    departDate={departDate}
                    arriveDate={arriveDate}
                    departTimeStr={departTimeStr}
                    arriveTimeStr={arriveTimeStr}
                    departStation={departStation}
                    arriveStation={arriveStation}
                    durationStr={durationStr}
                    trainNumber={trainNumber}
                >
                    <span
                        className="train-icon"
                        style={{ display: 'block' }}
                    ></span>
                </Detail>
            </div>
            <Ticket price={price} type={seatType} />
            <Passengers {...passengersCallBacks} passengers={passengers} />
            {passengers.length > 0 && (
                <Choose passengers={passengers} {...chooseCallBack} />
            )}
            <Account length={passengers.length} price={price} />
            <Menu show={isMenuVisible} {...menu} {...menuCallBacks} /> */}
        </div>
    );
};
const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
