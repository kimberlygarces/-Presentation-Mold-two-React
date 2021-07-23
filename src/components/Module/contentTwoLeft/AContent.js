import React from 'react';

import AContent from '../../content/contentTwoLeft/AContent';

class AtextContent extends React.Component {
    state = {
        text: 'Aspectos históricos de la violencia sociopolítica en el lugar (actores armados, hechos violentos, intereses en disputa, hitos, etc.)', 
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