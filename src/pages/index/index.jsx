import React from 'react';
import styles from './index.module.less';
import Header from '@/components/Header';
import Journey from './components/Journey';
function Index(props) {
    const { a } = props;
    const from = '北京';
    const to = '成都';
    const callBacks = {};
    return (
        <div className={styles.indexContainer}>
            <div className={styles.headerWrapper}>
                <Header title="火车票" />
            </div>
            <form className={styles.form}>
                <Journey
                    from={from}
                    to={to}
                    // exchangeFromTo={doExchangeFromTo}
                    // showCitySelector={doShowCitySelector}
                    {...callBacks}
                />
                {/* <Journey
            from={from}
            to={to}
            // exchangeFromTo={doExchangeFromTo}
            // showCitySelector={doShowCitySelector}
            {...callBacks}
        />
        <DepartDate time={departDate} {...departDateCallBacks} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCallBacks} />
        <Submit /> */}
            </form>
        </div>
    );
}
export default Index;
