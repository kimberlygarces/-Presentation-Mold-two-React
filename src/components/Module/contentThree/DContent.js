import React from 'react';

import DContent from '../../content/contentThree/DContent';

class AtextContent extends React.Component {
    state = {
        text: 'Reconocer los intereses, las intencionalidades y las particularidades de lso diversos actores involucrados.', 
    }
        render(){        
        return(
            <div>
                <DContent Content={this.state}/>
            </div>

        )
    }
}

export default AtextContent;