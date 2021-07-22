import React from 'react';
import woman from '../../img/user.png'

class BadgesTwoTitle extends React.Component {
        render(){        
        return(
         <div>
            <div className="ModuleTwoLeftTitle TitleTwo">
                <h2 className="ModuleTwoLeft_Title">{this.props.ModuleLeft.title}</h2>
            </div>
            <img className="ModuleTwoLeft-woman" src={woman} alt="Logo"></img>
            <div className="ModuleTwoLeft-content">
            <div className="textModule A">
                <div className="textSub subA">
                    A
                </div>            
            </div>
            <div className="textModule B">
                <div className="textSub subA">
                    B
                </div>     
            </div>
            <div className="textModule C">
                <div className="textSub subA">
                    C
                </div> 
            </div>
            <div className="textModule D">
                <div className="textSub subA">
                    D
                </div> 
            </div>
            <div className="textModule E">
                <div className="textSub subA">
                    E
                </div> 
            </div>
            </div>
        
         </div>

        )
    }
}

export default BadgesTwoTitle;