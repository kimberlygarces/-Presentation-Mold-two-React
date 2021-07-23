import React from 'react';

import CContent from '../../content/contentTwoLeft/CContent';

class AtextContent extends React.Component {
    state = {
        text: 'Aspectos demográficos y socioculturales', 
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