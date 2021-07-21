import React from 'react';
import '../../style/ModuleGeneral.scss'
import '../../style/ModuleTwo.scss'
import ModuleTwoTitle from '../content/ModuleTwo';
import woman from '../../img/girl.jpg'

// import ModuleOneContent from '../content/ModuleOneTContent'
import book from '../../img/book.jpg'
import { Link } from 'react-router-dom';



class ModuleTwo extends React.Component {
    state = {
        title: 'Dimensiones que operan en la lectura de contexto', 
        TextOne: 'Dimensiones estructurales',
        TextTwo: 'Dimensiones funcionales',
        ContentLeftTop: 'Tienen que ver con los aspectos que intervienen en el desarrollo de un evento',
        ContentRightTop: 'Tienen que ver con la manera en que las dimensiones estructurales afectan a las personas, familias o comunidades en particular',
        ContentLeftBotton: 'Es importante que este nivel se revise antes de realizar cualquier ejercicio de intervención en el capo pero tambien que se vaya recostruyendo durante y después a la luz de los relatos e información recogida',
        ContentRightBotton: 'Las dimensiones personales se entienden en relación con las dimensiones estructurales, es decir, se entienden en relación con su entorno',
    }
        render(){ 
                   
        return(
            <div className="Module_Body">
                <div className="ModuleTwo center-align">
                    <ModuleTwoTitle ModuleTwo={this.state}/>
                </div>


                {/* <div className="Left-Bottom"></div>
                <div className="Righ-Top"></div> */}
                <div className="Bottom"></div>
                <div className="Top">
                <img className="ModuleOne-Book BookOne" src={book} alt="Logo"></img>
                <img className="ModuleOne-Book BookOne" src={book} alt="Logo"></img>
                <img className="ModuleOne-Book BookOne" src={book} alt="Logo"></img>
                </div>

                <img className="ModuleTwo-woman" src={woman} alt="Logo"></img>
                <div className="ModuleTwo_footer">
                    <Link  to="/ModuleOne"  className="btn btn-back" alt="">  
                        <i className="large material-icons">fast_rewind</i>
                    </Link>
                    <Link  to="/"  className="btn btn-home" alt="">  
                        <i className="large material-icons">home</i>
                    </Link>
            
                    <Link  to="/ModuleTree"  className="btn btn-next" alt="">  
                        <i className="large material-icons">fast_forward</i>
                    </Link>
                </div>
            </div>

        )
    }
}

export default ModuleTwo;