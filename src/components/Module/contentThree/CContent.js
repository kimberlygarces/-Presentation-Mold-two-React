import React from 'react';

import CContent from '../../content/contentThree/CContent';

class AtextContent extends React.Component {
    state = {
        text: 'No son ejercicios neutrales, implican y surgen de posturas éticas tomadas antes de el proceso político del país', 
    }
        render(){        
        return(
            <div>
                <CContent Content={this.state}/>
            </div>

        )
    }
}

export default AtextContent;