import React from 'react';
import '../style/BadgesThree.scss'
import ThreeOne from './content/BadgeThree_One'
import ThreeSixImg from '../img/meeting.png'

// import pen from '../img/pen.png'
import { Link } from 'react-router-dom';

class BadgesThree extends React.Component {

    state = {
        title: 'Post entrevista', 
        subtitle: 'Se da por terminada la entrevista formal pero se prolonga el tiempo compartido entre las dos personas',
    }
        render(){        
        return(
        <div className="container center-align">
            <div className="BadgesThree_body-content">   
                <ThreeOne BadgeThree_One={this.state}/>
               
                    <Link  to="/Four"  className="btn btn-threeback" alt="">  
                        <i className="material-icons">arrow_back</i>
                    </Link>
                    <img className="ThreeOne_img" src={ThreeSixImg} alt="Logo"></img>
            </div>
            <div className="BadgeTree_footer">
            <Link  to="/five"  className="btn btn-back" alt="">  
                <i className="large material-icons">fast_rewind</i>
            </Link>
            <Link  to="/"  className="btn btn-home" alt="">  
                <i className="large material-icons">home</i>
            </Link>
       
            <Link  to="/ModuleOne"  className="btn btn-next" alt="">  
                <i className="large material-icons">fast_forward</i>
            </Link>
            </div>
        </div>


        )
    }
}

export default BadgesThree;