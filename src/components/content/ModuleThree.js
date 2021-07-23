import React from 'react';
import { Link } from 'react-router-dom';
import AContent from '../Module/contentThree/AContent';
import BContent from '../Module/contentThree/BContent';
import CContent from '../Module/contentThree/CContent';
import DContent from '../Module/contentThree/DContent';
import EContent from '../Module/contentThree/EContent';
import FContent from '../Module/contentThree/FContent';


class ThreeContent extends React.Component {
    constructor(props) {
        super(props);
        // INICIALIZAR ESTADO PARA EL MENSAJE DEL LADO IZQUIERDO
        this.state = {AOn: false};
        this.AClick = this.AClick.bind(this);

        this.state = {BOn: false};
        this.BClick = this.BClick.bind(this);

        this.state = {COn: false};
        this.CClick = this.CClick.bind(this);

        this.state = {DOn: false};
        this.DClick = this.DClick.bind(this);

        this.state = {EOn: false};
        this.EClick = this.EClick.bind(this);

        
        this.state = {FOn: false};
        this.FClick = this.FClick.bind(this);
      }

 
      
      AClick() {
        this.setState(prevState => ({
            AOn: !prevState.AOn,
            BOn: false,
            COn: false,
            DOn: false,
            EOn: false,
            FOn: false

        }));
      }
      BClick() {
        this.setState(prevState => ({
            BOn: !prevState.BOn,
            AOn: false,
            COn: false,
            DOn: false,
            EOn: false,
            FOn: false        
        }));
      }
      CClick() {
        this.setState(prevState => ({
            COn: !prevState.COn,
            BOn: false,
            AOn: false,
            DOn: false,
            EOn: false,
            FOn: false        
        }));
      }
      DClick() {
        this.setState(prevState => ({
            DOn: !prevState.DOn,
            BOn: false,
            COn: false,
            AOn: false,
            EOn: false,
            FOn: false        
        }));
      }
      EClick() {
        this.setState(prevState => ({
            EOn: !prevState.EOn,
            BOn: false,
            COn: false,
            DOn: false,
            AOn: false,  
            FOn: false
        }));
      }
      FClick() {
        this.setState(prevState => ({
            FOn: !prevState.FOn,
            BOn: false,
            COn: false,
            DOn: false,
            AOn: false,
            EOn: false     
        }));
      }

        render(){        
        return(
            <div>
                 <span>
                    {this.state.AOn ? 
                    (<div className="BContent">
                    <AContent/>
                    </div>
                    )
                    : 
                    ''
                    }
                </span>

                <span>
                    {this.state.BOn ? 
                    (<div className="BContent">
                    <BContent/>
                    </div>
                    )   
                    : 
                    ''
                    }
                </span>
                <span>
                    {this.state.COn ? 
                    (<div className="BContent">
                    <CContent/>
                    </div>
                    )   
                    : 
                    ''
                    }
                </span>
                <span>
                    {this.state.DOn ? 
                    (<div className="BContent">
                    <DContent/>
                    </div>
                    
                    )   
                    : 
                    ''
                    }
                </span>
                <span>
                    {this.state.EOn ? 
                    (<div className="BContent">
                    <EContent/>
                    </div>
                    
                    )   
                    : 
                    ''
                    }
                </span>
                <span>
                    {this.state.FOn ? 
                    (<div className="BContent">
                    <FContent/>
                    </div>
                    
                    )   
                    : 
                    ''
                    }
                </span>
            <div className="Modulethree-title">
                <h2 className="Modulethree-title_text">{this.props.Content.title}</h2>
            </div>
            <div className="btnText_ModuleThree">
            <div className="textModule A">
                <Link to="/ModuleTree"
                        onClick={() => this.AClick()}>
                        <h2 className="textA">
                            1
                        </h2>
                </Link>
            </div>
            <div className="textModule B">
                <Link to="/ModuleTree"
                        onClick={() => this.BClick()}>
                        <h2 className="textA">
                            2
                        </h2>
                </Link>
            </div>
            <div className="textModule C">
                <Link to="/ModuleTree"
                        onClick={() => this.CClick()}>
                        <h2 className="textA">
                            3
                        </h2>
                </Link>
            </div>
            <div className="textModule D">
                <Link to="/ModuleTree"
                        onClick={() => this.DClick()}>
                        <h2 className="textA">
                            4
                        </h2>
                </Link>
            </div>
            <div className="textModule E">
                <Link to="/ModuleTree"
                        onClick={() => this.EClick()}>
                        <h2 className="textA">
                            5
                        </h2>
                </Link>
            </div>
            <div className="textModule F">
                <Link to="/ModuleTree"
                        onClick={() => this.FClick()}>
                        <h2 className="textA">
                            6
                        </h2>
                </Link>
            </div>
            </div>
            </div>
        )
    }
}

export default ThreeContent;