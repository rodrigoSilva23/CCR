import { createStore ,combineReducers } from 'redux';
import telaReducer from './hide_showTela'


const rootReducer = combineReducers({
    tela_Hide_Show:telaReducer,

   



});







export default createStore(rootReducer);