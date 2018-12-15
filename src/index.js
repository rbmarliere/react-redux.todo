import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'

const persistedState = loadState();
const store = createStore(todoApp, persistedState)

store.subscribe( () => { saveState({ todos: store.getState().todos }); } );

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);

