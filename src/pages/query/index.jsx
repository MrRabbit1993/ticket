import React from 'react';
import { connect } from 'react-redux';
import Header from '@/components/Header';
function Query(props) {
    const { from, to, departDate, highSpeed } = props;
    console.log(props);
    return (
        <div>
            <div className="header-wrapper">
                <Header title={`${from} ⇀ ${to}`} showBack={true} />
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return state.get('homeState').toJS();
}
function mapDispatchToProps(dispatch) {
    return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(Query);
