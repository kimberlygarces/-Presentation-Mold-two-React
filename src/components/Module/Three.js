import React from 'react';
import '../../style/ModuleGeneral.scss'
import '../../style/ModuleThree.scss'
import ModuleThreeContent from '../content/ModuleThree';
import men from '../../img/men.jpg'

import tablero from '../../img/tablero.jpg'
import Componentaudio from '../audio/audio';

// import ModuleOneContent from '../content/ModuleOneTContent'
import { Link } from 'react-router-dom';



class ModuleThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Dimensiones que operan en la lectura de contexto', 
        }
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          4000
        );
      }
    
      tick() {
        this.setState({
            time: console.log('función time')
        });
      }

        render(){ 
                   
        return(
            <div className="Module_Body">

                <div className="ModuleThree center-align">
                    <ModuleThreeContent Content={this.state}/>
                </div>

                <div className="ModuleThree-Border"></div>
                <img className="ModuleThree-tablero" src={tablero} alt="Logo"></img>
                <img className="ModuleThree-men" src={men} alt="Logo"></img>
                <div className="ModuleTree_footer">
                    <Link  to="/ModuleTwo"  className="btn btn-back" alt="">  
                        <i className="large material-icons">fast_rewind</i>
                    </Link>
                    <Link  to="/"  className="btn btn-home" alt="">  
                        <i className="large material-icons">home</i>
                    </Link>
            
                    <Link  to="/ModuleFour"  className="btn btn-next" alt="">  
                        <i className="large material-icons">fast_forward</i>
                    </Link>
                </div>
                <Componentaudio
                    urls={[
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                      ]}
                />


            </div>

        )
    }
}

export default ModuleThree;