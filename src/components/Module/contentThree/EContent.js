import React from 'react';

import EContent from '../../content/contentThree/EContent';

class AtextContent extends React.Component {
    state = {
        text: 'Propende a la paz y la reconciliación de quienes participan en la intervención. En este sentido, identifica los aspectos que perpetúan la violecia (riesgo)  y los aspectos que permiten conectarnos desde lógicas alternativas (recursos)', 
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