import { createStore, applyMiddleware, compose } from "redux";
import  ThunkMiddleware from "redux-thunk";
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENCION_COMPOSE__|| compose;//esta linea sirve para conectar nuestra app con la extencion reduxx devtools del navegador

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))//esta linea sirve para que podamos hacer peticiones a una api/servidos
);

export default store;