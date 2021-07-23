import React from 'react';

import EContent from '../../content/contentTwoLeft/EContent';

class AtextContent extends React.Component {
    state = {
        text: '¿Qué es la lectura de contextos?', 
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