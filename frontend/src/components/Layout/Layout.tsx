import { Fragment } from 'react';

import './Layout.css';

import NavigationBar from './NavigationBar';

const Layout = (props: any) => {
    return (
        <Fragment>
            <NavigationBar />

            <div className="container">{props.children}</div>
        </Fragment>
    );
};

export default Layout;