import React from 'react';
class BadgesTwoTitle extends React.Component {
        render(){        
        return(
         <div>
            <div className="ModuleTwoLeftTitle TitleTwo">
                <h2 className="ModuleTwo_Title">{this.props.ModuleLeft.title}</h2>
            </div>

         </div>

        )
    }
}

export default BadgesTwoTitle;