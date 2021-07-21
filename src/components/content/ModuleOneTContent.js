import React from 'react';
class BadgesTwoTitle extends React.Component {
        render(){        
        return(
         <div>
            <div className="ModuleOneText TextOne">
                <h2 className="ModuleOne-content_text">{this.props.ModuleOneContent.TextOne}</h2>
            </div>
            <div className="ModuleOneModuleOneText TextTwo">
                <h2 className="ModuleOne-content_text">{this.props.ModuleOneContent.TextTwo}</h2>
            </div>
         </div>

        )
    }
}

export default BadgesTwoTitle;