import React from 'react';
import BadgesOne from '../components/BadgesOne'

class BadgesNew extends React.Component {
    render(){
        return(
            <div className="container center-align">
                <div className="badge">
                <div className="badge__body">
                <BadgesOne/>
                </div>
                </div>
            </div>
        )
    }
}

export default BadgesNew;