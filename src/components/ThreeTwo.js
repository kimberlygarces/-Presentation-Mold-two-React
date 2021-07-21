import React from 'react';
import '../style/BadgesThree.scss'
import ThreeOne from './content/BadgeThree_One'
import ThreeTwoImg from '../img/eyes.png'

// import pen from '../img/pen.png'
import { Link } from 'react-router-dom';

class BadgesThree extends React.Component {

    state = {
        title: 'Técnicas naturales:', 
        subtitle: 'Se incluye todo tipo de gestos, sonidos y observaciones por parte del entrevistador que le impidan al que este hablando, que lo que dice es comprendido y de interés',
    }
        render(){        
        return(
        <div className="container center-align">
            <div className="BadgesThree_body-content">   
                <ThreeOne BadgeThree_One={this.state}/>
                    <Link  to="/Three"  className="btn btn-threeNext" alt="">  
                        <i className="material-icons">arrow_forward</i>
                    </Link>
                    <Link  to="/One"  className="btn btn-threeback" alt="">  
                        <i className="material-icons">arrow_back</i>
                    </Link>
                    <img className="ThreeOne_img" src={ThreeTwoImg} alt="Logo"></img>


            </div>
        </div>


        )
    }
}

export default BadgesThree;