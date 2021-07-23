import React from 'react';

import BContent from '../../content/contentTwoLeft/BContent';

class AtextContent extends React.Component {
    state = {
        text: 'Aspectos económicos (medios de produccion y financiación, etc)', 
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