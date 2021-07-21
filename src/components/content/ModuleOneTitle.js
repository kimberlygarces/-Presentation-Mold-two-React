import React from 'react';
class BadgesTwoTitle extends React.Component {
        render(){        
        return(
            <div className="ModuleOne-title">
                <h2 className="ModuleOne-title_text">{this.props.ModuleOne.title}</h2>
            </div>

        )
    }
}

export default BadgesTwoTitle;