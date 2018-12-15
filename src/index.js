import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'

const persistedState = loadState();
const store = createStore(todoApp, persistedState)

store.subscribe( throttle( () => { saveState({ todos: store.getState().todos }); }, 1000 ) );

ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('root')
);

