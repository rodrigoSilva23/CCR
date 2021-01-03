const INITIAL_STATE = {
    showTela:false
};

export default (state =INITIAL_STATE ,action) => {
    switch (action.type){
        case 'SHOW_TELA':
            return {...state,showTela:true};
        case 'HIDE_TELA':
            return {...state,showTela:false};
        default:
           return state;
    }

};

export const showTela = ()=>{
    return {
        type: 'SHOW_TELA'
    }
};

export const hideTela = ()=>{
    return {
        type: 'HIDE_TELA'
    }
};