import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';

import Home from '../container/Home';
import Artistdetails from '../container/Artist_Details';


const Routing = ()=>{
    return(
        <BrowserRouter>
            <Header/>
           <Route exact path="/" component={Home}/>
           <Route exact path="/details/:id" component={Artistdetails}/>
         
        </BrowserRouter>
    )


}
export default Routing