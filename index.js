
// console.log('Akinola');

const redux = require('redux');
const createStore=redux.createStore

const CAKE_ORDERED= 'CAKE_ORDERED';
const CAKE_RESTORED='CAKE_RESTORED';

const orderCake=()=>{
    return {
        type: CAKE_ORDERED,
        quantity:1
    }
}

const restoreCake=()=>{}

const initialState={
    numberOfCake:10,
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                numberOfCake: state.numberOfCake-1,
            }
            default: 
            return state
    }
}

const store =createStore(reducer);
console.log("initial State", store.getState());
const unSubscribe=store.subscribe(()=>console.log('update state', store.getState()));
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
unSubscribe();