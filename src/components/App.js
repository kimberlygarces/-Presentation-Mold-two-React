import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import pagesOne from '../pages/Badges'
import pagesTwo from '../pages/pagesTwo'




function App() {
    return (
        <BrowserRouter>  
            <Switch>
                <Route exact path="/" component={pagesOne}/>
                <Route exact path="/pagesTwo" component={pagesTwo}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;