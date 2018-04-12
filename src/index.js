import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'; 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from '../src/store/reducer';

const rootReducers = combineReducers({
    reducer: reducer
})

const store = createStore(rootReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
