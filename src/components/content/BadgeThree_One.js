import React from 'react';

class BadgeThree_One extends React.Component {
        render(){        
        return(
            <div className="ThreeOne-content">
                <h2 className="ThreeOne-title">{this.props.BadgeThree_One.title}</h2>
                <h5 className="ThreeOne_body-subtitle">{this.props.BadgeThree_One.subtitle}</h5>
            </div>

        )
    }
}

export default BadgeThree_One;