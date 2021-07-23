import React from 'react';

import EContent from '../../content/contentThree/FContent';

class AtextContent extends React.Component {
    state = {
        text: 'La lectura de contextos debe hacerse antes, durante y después de la intervención que vayamos a realizar', 
    }
        render(){        
        return(
            <div>
                <EContent Content={this.state}/>
            </div>

        )
    }
}

export default AtextContent;