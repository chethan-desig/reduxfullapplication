import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './component/Router';
import store from './Store';
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>,document.getElementById('root')
);