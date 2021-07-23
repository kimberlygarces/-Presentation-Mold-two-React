import React from 'react';
import { Link } from 'react-router-dom';
import LeftContent from '../Module/TwoLeft';


class ModuleTwo extends React.Component {
    constructor(props) {
        super(props);
        // INICIALIZAR ESTADO PARA EL MENSAJE DEL LADO IZQUIERDO
        this.state = {LeftOn: true};
        this.LeftClick = this.LeftClick.bind(this);

        this.state = {RightOn: true};
        this.RightClick = this.RightClick.bind(this);
      }
    
      LeftClick() {
        this.setState(prevState => ({
            LeftOn: !prevState.LeftOn
        }));
      }
      RightClick() {
        this.setState(prevState => ({
            RightOn: !prevState.RightOn
        }));
      }
      LeftContentClick(){
        this.setState(LeftStade => ({
            LeftContent: !LeftStade.LeftContent
     }));
    } 
        render(){        
        return(
         <div>
              <span>
                    {this.state.LeftContent ? 
                    (<div className="LeftContent">
                    <LeftContent/>
                    <Link  to="/ModuleTwo" onClick={() => this.LeftContentClick()}  className="btn-floating btn-large waves-effect waves-light red btnLeftContent" >
                        <i className="large material-icons">clear</i>
                    </Link>
                    </div>
                    
                    )
                    :''
                    }
                </span>
            <div className="ModuleTwoTitle TitleTwo">
                <h2 className="ModuleTwo_Title">{this.props.ModuleTwo.title}</h2>
            </div>
            <div className="ModuleTwoSubTitle TitleTwo">
                <div className="ModuleTwoSubTitleLeft subTitleTwo">
                  
                    
                    <Link to="/ModuleTwo"
                        onClick={() => this.LeftClick()} 
                        className="">
                              <h2 className="ModuleTwo_SubTitle">       
                    <i className="material-icons icons-cargar">autorenew</i>
                        {this.props.ModuleTwo.TextOne} </h2>
                    </Link>
                    <span>
                    {this.state.LeftOn ? 
                    (<div className="LeftClick">
                        <div className="TextLeft-ModuleTwo">
                            {this.props.ModuleTwo.ContentLeftTop}
                        </div>
                        <div className="TextRight ModuleContent">
                            {this.props.ModuleTwo.ContentLeftBotton}
                        </div>
                    <Link  to="/ModuleTwo" onClick={() => this.LeftContentClick()}  className="btn btn" alt="">  
                            <i className="">Ver Detalles</i>
                    </Link>
                    </div>
                    
                    )
                    :''
                    }
                </span>
                
                </div>
                <div className="ModuleTwoSubTitleRight subTitleTwo">
                 <Link to="/ModuleTwo"
                        onClick={() => this.RightClick()}>
                        <h2 className="ModuleTwo_SubTitle">{this.props.ModuleTwo.TextTwo}
                            <i className="material-icons icons-cargar">autorenew</i>
                        </h2>
                </Link>
                    <span>
                    {this.state.RightOn ? 
                    ''
                    :(<div className="RightClick">
                          <div className="TextRight-ModuleTwo">
                            {this.props.ModuleTwo.ContentLeftBotton}
                        </div>
                        <div className="TextRight ModuleContent">
                            {this.props.ModuleTwo.ContentRightBotton}
                        </div>
                        <Link  to="/ModuleTwo" onClick={() => this.RightClick()}  className="btn btn" alt="">  
                            <i className="">Ver Detalles</i>
                    </Link>
                    </div>
                    
                    )
                    }
            </span>
       
                </div>

            </div>
         </div>

        )
    }
}

export default ModuleTwo;