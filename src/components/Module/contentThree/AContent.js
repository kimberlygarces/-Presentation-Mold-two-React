import React from 'react';

import AContent from '../../content/contentThree/AContent';

class AtextContent extends React.Component {
    state = {
        text: 'Tener un propósito claro que define cómo va a actuar en su intervención en campo y cócomo va a actuar en relación con las personas que participan', 
    }
        render(){        
        return(
            <div>
                <AContent Content={this.state}/>
            </div>

        )
    }
}

export default AtextContent;