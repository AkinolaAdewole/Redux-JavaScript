
// console.log('Akinola');

const redux = require('redux');
const createStore=redux.createStore;
const bindActionCreators= redux.bindActionCreators;
const combineReducers=redux.combineReducers

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

const orderIceCream=(qty=1)=>{
    return{
        type:ICECREAM_ORDERED,
        payload:qty
    }
}

const restockIceCream=(qty=1)=>{
    return {
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}

const initialState={
    numberOfCake:10,
    numberOfIceCream:20,
}



 
const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...state,
          numberOfCake: state.numberOfCake - 1,
        };
      case CAKE_RESTOCKED:
        return {
          ...state,
          numberOfCake: state.numberOfCake + action.payload,
        };
     
      default:
        return state;
    }
  };

  const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case ICECREAM_ORDERED:
        return {
          ...state,
          numberOfIceCream: state.numberOfIceCream - 1,
        };
      case ICECREAM_RESTOCKED:
        return {
          ...state,
          numberOfIceCream: state.numberOfIceCream + action.payload,
        };
      default:
        return state;
    }
  };

  const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
  })
  
// const store =createStore(reducer);
const store =createStore(rootReducer);
console.log("initial State", store.getState());
const unSubscribe=store.subscribe(()=>console.log('update state', store.getState()));
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restoreCake(3));

const actions=bindActionCreators({orderCake,restoreCake, orderIceCream, restockIceCream},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restoreCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();

actions.restockIceCream(3);
unSubscribe();