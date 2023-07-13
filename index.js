
// console.log('Akinola');

const redux = require('redux');
const createStore=redux.createStore;
const bindActionCreators= redux.bindActionCreators

const CAKE_ORDERED= 'CAKE_ORDERED';
const CAKE_RESTOCKED='CAKE_RESTOCKED';

const ICECREAM_ORDERED='ICECREAM_ORDERED';
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED';

const orderCake=()=>{
    return {
        type: CAKE_ORDERED,
        payload:1
    }
}

const restoreCake=(qty=1)=>{
    return {
        type:CAKE_RESTOCKED,
        payload:qty,

    }
}

const initialState={
    numberOfCake:10,
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                numberOfCake: state.numberOfCake-1,
            }

        case CAKE_RESTOCKED:
            return{
                ...state,
                numberOfCake:state.numberOfCake+action.payload,
            }
            default: 
            return state
    }
}

const store =createStore(reducer);
console.log("initial State", store.getState());
const unSubscribe=store.subscribe(()=>console.log('update state', store.getState()));
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restoreCake(3));

const action=bindActionCreators({orderCake,restoreCake},store.dispatch)
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restoreCake(3));
unSubscribe();