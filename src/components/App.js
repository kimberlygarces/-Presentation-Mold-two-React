import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import pagesOne from '../pages/Badges'
import pagesTwo from '../pages/pagesTwo'
import pagesThree from '../pages/pagesThree'
import pagesThreeTwo from '../pages/pagesThreeTwo'
import pagesThreeThree from '../pages/pagesThreeThree'
import pagesThreeFour from '../pages/pagesThreeFour'
import pagesThreeFive from '../pages/pagesThreeFive'
import pagesThreeSix from '../pages/pagesThreeSix'

// rutas especificas de los modulos
import pagesModuleOne from '../pages/pagesModuleOne'
import pagesModuleTwo from '../pages/pagesModuleTwo'
import pagesModuleThree from '../pages/pagesModuleThree'



import Layaut from './Layout';


function App() {
    return (
        <BrowserRouter>  
            <Switch>
                <Route exact path="/" component={pagesOne}/>
                <Route exact path="/pagesTwo" component={pagesTwo}/>
                <Route exact path="/ModuleOne" component={pagesModuleOne}/>
                <Route exact path="/ModuleTwo" component={pagesModuleTwo}/>
                <Route exact path="/ModuleTree" component={pagesModuleThree}/>

                

                <Layaut>
                <Route exact path="/One" component={pagesThree}/>
                <Route exact path="/Two" component={pagesThreeTwo}/>
                <Route exact path="/Three" component={pagesThreeThree}/>
                <Route exact path="/Four" component={pagesThreeFour}/>
                <Route exact path="/Five" component={pagesThreeFive}/>
                <Route exact path="/Six" component={pagesThreeSix}/>
                </Layaut>

            </Switch>
        </BrowserRouter>
    );
}

export default App;