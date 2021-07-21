import React from 'react';
import '../style/BadgesThree.scss'
import ThreeOne from './content/BadgeThree_One'
import ThreeFourImg from '../img/idea.png'

// import pen from '../img/pen.png'
import { Link } from 'react-router-dom';

class BadgesThree extends React.Component {

    state = {
        title: 'Elavoración vs aclaración:', 
        subtitle: 'Pedirle al entrevistado una secuencia de hechis más detallada y clara, es dicir la aclaración se pide luego de la elaboración',
    }
        render(){        
        return(
        <div className="container center-align">
            <div className="BadgesThree_body-content">   
                <ThreeOne BadgeThree_One={this.state}/>
                    <Link  to="/Five"  className="btn btn-threeNext" alt="">  
                        <i className="material-icons">arrow_forward</i>
                    </Link>
                    <Link  to="/Three"  className="btn btn-threeback" alt="">  
                        <i className="material-icons">arrow_back</i>
                    </Link>
                    <img className="ThreeOne_img" src={ThreeFourImg} alt="Logo"></img>


            </div>
        </div>


        )
    }
}

export default BadgesThree;