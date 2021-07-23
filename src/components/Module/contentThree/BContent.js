import React from 'react';

import BContent from '../../content/contentThree/BContent';

class AtextContent extends React.Component {
    state = {
        text: 'Inicia identificando y caracterizando actores, relaciones, intereses y acciones', 
    }
        render(){        
        return(
            <div>
                <BContent Content={this.state}/>
            </div>

        )
    }
}

export default AtextContent;