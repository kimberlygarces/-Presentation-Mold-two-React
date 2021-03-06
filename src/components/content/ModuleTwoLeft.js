import React from 'react';
import woman from '../../img/user.png'
import AContent from '../Module/contentTwoLeft/AContent';
import BContent from '../Module/contentTwoLeft/BContent';
import CContent from '../Module/contentTwoLeft/CContent';
import DContent from '../Module/contentTwoLeft/DContent';
import EContent from '../Module/contentTwoLeft/EContent';
import { Link } from 'react-router-dom';



class BadgesTwoTitle extends React.Component {
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
      }

 
      
      AClick() {
        this.setState(prevState => ({
            AOn: !prevState.AOn,
            BOn: false,
            COn: false,
            DOn: false,
            EOn: false

        }));
      }
      BClick() {
        this.setState(prevState => ({
            BOn: !prevState.BOn,
            AOn: false,
            COn: false,
            DOn: false,
            EOn: false           
        }));
      }
      CClick() {
        this.setState(prevState => ({
            COn: !prevState.COn,
            BOn: false,
            AOn: false,
            DOn: false,
            EOn: false          
        }));
      }
      DClick() {
        this.setState(prevState => ({
            DOn: !prevState.DOn,
            BOn: false,
            COn: false,
            AOn: false,
            EOn: false          
        }));
      }
      EClick() {
        this.setState(prevState => ({
            EOn: !prevState.EOn,
            BOn: false,
            COn: false,
            DOn: false,
            AOn: false      
        }));
      }

    
    
        render(){        
        return(
         <div>
                <span>
                    {this.state.AOn ? 
                    (<div className="AContent">
                    <AContent/>
                    </div>
                    )
                    : 
                    ''
                    }
                </span>

                <span>
                    {this.state.BOn ? 
                    (<div className="AContent">
                    <BContent/>
                    </div>
                    )   
                    : 
                    ''
                    }
                </span>
                <span>
                    {this.state.COn ? 
                    (<div className="AContent">
                    <CContent/>
                    </div>
                    )   
                    : 
                    ''
                    }
                </span>
                <span>
                    {this.state.DOn ? 
                    (<div className="AContent">
                    <DContent/>
                    </div>
                    
                    )   
                    : 
                    ''
                    }
                </span>
                <span>
                    {this.state.EOn ? 
                    (<div className="AContent">
                    <EContent/>
                    </div>
                    
                    )   
                    : 
                    ''
                    }
                </span>
            <div className="ModuleTwoLeftTitle TitleTwo">
                <h2 className="ModuleTwoLeft_Title">{this.props.ModuleLeft.title}</h2>
            </div>
            <img className="ModuleTwoLeft-woman" src={woman} alt="Logo"></img>
            <div className="ModuleTwoLeft-content">
            <div className="textModule A">
                <div className="textSub subA">
                <Link to="/ModuleTwo"
                        onClick={() => this.AClick()}>
                        <h2 className="textA">
                            A
                        </h2>
                </Link>
                </div>            
            </div>
            <div className="textModule B">
                <div className="textSub subA">
                <Link to="/ModuleTwo"
                        onClick={() => this.BClick()}>
                        <h2 className="textA">
                            B
                        </h2>
                </Link>
                </div>     
            </div>
            <div className="textModule C">
                <div className="textSub subA">
                <Link to="/ModuleTwo"
                        onClick={() => this.CClick()}>
                        <h2 className="textA">
                            C
                        </h2>
                </Link>
                </div> 
            </div>
            <div className="textModule D">
                <div className="textSub subA">
                <Link to="/ModuleTwo"
                        onClick={() => this.DClick()}>
                        <h2 className="textA">
                            D
                        </h2>
                </Link>
                </div> 
            </div>
            <div className="textModule E">
                <div className="textSub subA">
                <Link to="/ModuleTwo"
                        onClick={() => this.EClick()}>
                        <h2 className="textA">
                            E
                        </h2>
                </Link>
                </div> 
            </div>
            </div>
         
        
         </div>

        )
    }
}

export default BadgesTwoTitle;