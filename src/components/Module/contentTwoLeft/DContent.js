import React from 'react';

import DContent from '../../content/contentTwoLeft/DContent';

class AtextContent extends React.Component {
    state = {
        text: 'Aspectos políticos (Instituciones con presencia, políticos influyentes, posturas politicas, etc)', 
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