import React from 'react';
import '../style/BadgesThree.scss'
import ThreeOne from './content/BadgeThree_One'
import ThreeOneImg from '../img/silencio.png'

// import pen from '../img/pen.png'
import { Link } from 'react-router-dom';

class BadgesThree extends React.Component {
    state = {
        title: 'Silencio:', 
        subtitle: 'Pausa que realiza en entrevistador para que el entrevistado lo libremente contar su relato sin interupciones',
    }
        render(){        
        return(
    
            <div className="BadgesThree_body-content center-align">   
                <ThreeOne BadgeThree_One={this.state}/>
                    <Link  to="/Two"  className="btn btn-threeNext" alt="">  
                        <i className="material-icons">arrow_forward</i>
                    </Link>
                    <img className="ThreeOne_img" src={ThreeOneImg} alt="Logo"></img>
            </div>
        )
    }
}

export default BadgesThree;