import React from 'react';
import '../style/BadgesThree.scss'
import ThreeOne from './content/BadgeThree_One'
import ThreeThreeImg from '../img/card.png'

// import pen from '../img/pen.png'
import { Link } from 'react-router-dom';

class BadgesThree extends React.Component {

    state = {
        title: 'Recapitulación:', 
        subtitle: 'Pedirle al entrevistado narrar algún acontecimiento de su vida cronológicamente',
    }
        render(){        
        return(
        <div className="container center-align">
            <div className="BadgesThree_body-content">   
                <ThreeOne BadgeThree_One={this.state}/>
                    <Link  to="/four"  className="btn btn-threeNext" alt="">  
                        <i className="material-icons">arrow_forward</i>
                    </Link>
                    <Link  to="/Two"  className="btn btn-threeback" alt="">  
                        <i className="material-icons">arrow_back</i>
                    </Link>
                    <img className="ThreeOne_img" src={ThreeThreeImg} alt="Logo"></img>


            </div>
        </div>


        )
    }
}

export default BadgesThree;