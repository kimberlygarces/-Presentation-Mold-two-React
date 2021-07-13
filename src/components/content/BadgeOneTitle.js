import React from 'react';



class BadgesOneTitle extends React.Component {
    state = {
        title: 'Habilidades terapéuticas,', 
        subtitle: ' narrativas, expresivas y reformativas',
    }
        render(){        
        return(
            <div className="BadgesOne_body-content">
                <p className="BadgesOne_body-title">{this.props.BadgesOne.title}
                <i className="BadgesOne_body-subtitle">{this.props.BadgesOne.subtitle}</i></p>
            </div>

        )
    }
}

export default BadgesOneTitle;