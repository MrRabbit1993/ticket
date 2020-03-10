import React, { lazy, Suspense } from 'react';

export default function asyncComponent(importComponent) {
    const LazyComponent = lazy(importComponent);
    function AsyncComponent(props) {
        return (
            <Suspense fallback={<div>loading</div>}>
                <LazyComponent {...props} />
            </Suspense>
        );
    }
    return AsyncComponent;
}

// export default function asyncComponent(importComponent) {
//     class AsyncComponent extends Component {
//         constructor(props) {
//             super(props);

//             this.state = {
//                 component: null
//             };
//         }

//         async componentDidMount() {
//             const { default: component } = await importComponent();

//             this.setState({
//                 component: component
//             });
//         }

//         render() {
//             const C = this.state.component;

//             return C ? <C {...this.props} /> : null;
//         }
//     }

//     return AsyncComponent;
// }
