import React from 'react';
import '../../style/ModuleGeneral.scss'
import '../../style/ModuleOne.scss'
import ModuleOneTitle from '../content/ModuleOneTitle';
import ModuleOneContent from '../content/ModuleOneTContent';
import pen from '../../img/men.png'
import { Link } from 'react-router-dom';



class ModuleOne extends React.Component {
    state = {
        title: '¿Qué es la lectura de contextos?', 
        TextOne: 'Pausa que realiza en entrevistador para que el entrevistado lo libremente contar su relato sin interupciones',
        TextTwo: 'Pausa que realiza en entrevistador para que el entrevistado lo libremente contar su relato sin interupciones',

    }
        render(){        
        return(
            <div className="Module_Body BodyOne">
                <div className="Left-Bottom"></div>
                <div className="Righ-Top"></div>
                <ModuleOneTitle ModuleOne={this.state}/>
                <img className="ModuleOne-Men" src={pen} alt="Logo"></img>

                <div className="ModuleOne-Content">
                <ModuleOneContent ModuleOneContent={this.state}/>
                </div>
            <div className="ModuleOne_footer">
                    <Link  to="/six"  className="btn btn-back" alt="">  
                        <i className="large material-icons">fast_rewind</i>
                    </Link>
                    <Link  to="/"  className="btn btn-home" alt="">  
                        <i className="large material-icons">home</i>
                    </Link>
            
                    <Link  to="/ModuleTwo"  className="btn btn-next" alt="">  
                        <i className="large material-icons">fast_forward</i>
                    </Link>
                </div>


            </div>

        )
    }
}

export default ModuleOne;