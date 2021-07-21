import React from 'react';
import '../style/BadgesThree.scss'
import ThreeOnebackground from '../img/business.jpg'


class BadgesThree extends React.Component {
    state = {
        title: 'Silencio:', 
        subtitle: 'Pausa que realiza en entrevistador para que el entrevistado lo libremente contar su relato sin interupciones',
    }
        render(){        
        return(
            <div className="container center-align">
            <div className="BadgesThree_body">
                <div className="BadgesThree_body-title" >
                    <h5 className="BadgesThree_body-text">Técnicas de entrevista</h5>
                </div>

                <div className="BadgesTree_body-left"></div>
                <div className="BadgesTree_body-right"></div>
                <img className="ThreeOne_background" src={ThreeOnebackground} alt="Logo"></img>

            </div>
            </div>

        )
    }
}

export default BadgesThree;