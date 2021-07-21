import React from 'react';
import BadgesOne from '../components/BadgesOne'

class BadgesNew extends React.Component {
    render(){
        return(
            <div className="center-align">
                <div className="badge">
                <BadgesOne/>
                </div>
            </div>
        )
    }
}

export default BadgesNew;