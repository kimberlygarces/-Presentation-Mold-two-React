import React from 'react';
import '../style/BadgesThree.scss'
import ThreeOne from './content/BadgeThree_One'
import ThreeFiveImg from '../img/repeact.png'

// import pen from '../img/pen.png'
import { Link } from 'react-router-dom';

class BadgesThree extends React.Component {

    state = {
        title: 'Reafirmar o repetir', 
        subtitle: 'Buscar información adicional mediante la repetición de la expresiones por parte del entrevistado',
    }
        render(){        
        return(
        <div className="container center-align">
            <div className="BadgesThree_body-content">   
                <ThreeOne BadgeThree_One={this.state}/>
                    <Link  to="/Six"  className="btn btn-threeNext" alt="">  
                        <i className="material-icons">arrow_forward</i>
                    </Link>
                    <Link  to="/Four"  className="btn btn-threeback" alt="">  
                        <i className="material-icons">arrow_back</i>
                    </Link>
                    <img className="ThreeOne_img" src={ThreeFiveImg} alt="Logo"></img>
            </div>
        </div>


        )
    }
}

export default BadgesThree;