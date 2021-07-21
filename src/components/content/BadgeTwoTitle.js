import React from 'react';
class BadgesTwoTitle extends React.Component {
        render(){        
        return(
            <div className="BadgesTwo_body-content">
                <h2 className="BadgesTwo_body-title">{this.props.BadgesTwo.title}</h2>
                <h5 className="BadgesTwo_body-subtitle">{this.props.BadgesTwo.subtitle}</h5>
            </div>

        )
    }
}

export default BadgesTwoTitle;