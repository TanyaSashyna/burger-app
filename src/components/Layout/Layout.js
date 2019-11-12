import React from 'react';

import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
    <Aux>
        <Toolbar/>
        {/* <div>
            Toolbar, SideDrawer, Backdrop
        </div> */}
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default layout;