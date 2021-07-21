import React from 'react';
// import '../style/BadgesOne.css'
import '../style/BadgesOne.scss'

import logo from '../img/logo.png'
import pen from '../img/pen.png'
import BadgeOneTitle from '../components/content/BadgeOneTitle'
import { Link } from 'react-router-dom';



class BadgesOne extends React.Component {
    state = {
        title: 'Habilidades terapéuticas,', 
        subtitle: ' narrativas, expresivas y reformativas',
    }
        render(){        
        return(
            <div className="Module_Body">
                <div className="BadgesOne_body-title">
                    <img className="BadgesOne_body-img" src={logo} alt="Logo"></img>
                </div>
           
                <BadgeOneTitle BadgesOne={this.state}/>
                <div className="BadgesOne_body-btn">
                      <Link  to="/pagesTwo"  className="btn btn-body" alt="">Empezar</Link>
                </div>
                <div className="BadgesOne_body-figure-one"></div>
                <div className="BadgesOne_body-figure-two"></div>
                <img className="BadgesOne_body-img-content" src={pen} alt="Logo"></img>

            </div>

        )
    }
}

export default BadgesOne;