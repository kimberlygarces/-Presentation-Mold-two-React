import React from 'react';
class ABCContent extends React.Component {
        render(){        
        return(
            <div>
                <h5 className="">{this.props.Content.text}</h5>
            </div>

        )
    }
}

export default ABCContent;