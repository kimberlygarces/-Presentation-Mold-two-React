import React from 'react';
import '../style/BadgesTwo.scss'
// import logo from '../img/logo.png'
// import pen from '../img/pen.png'
import BadgeTwoTitle from '../components/content/BadgeTwoTitle'
import { Link } from 'react-router-dom';

class BadgesTwo extends React.Component {
    state = {
        title: 'Tema 1', 
        subtitle: 'Habilidades terapéuticas de primer Orden',
    }
        render(){        
        return(
            <div className="Module_Body">
                <div className="BadgesTwo_body-content">
                     <BadgeTwoTitle BadgesTwo={this.state}/>
                </div>
                <div className="Badgestwo_body-btn">
                    <Link  to="/one"  className="btn btn-body" alt="">  
                        <i class="material-icons">arrow_forward</i>
                    </Link>
                </div>
                <div className="BadgesTwo_body-higher"></div>
                <div className="BadgesTwo_body-lower"></div>

            </div>

        )
    }
}

export default BadgesTwo;