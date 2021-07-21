import React from 'react';
import BadgesThree from './BadgesThree'

function Layout (props) {
    return(
    <React.Fragment>
        <BadgesThree/>
        {props.children}
    </React.Fragment>
    )
}

export default Layout;