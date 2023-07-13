const redux = require('redux');
const produce = require('immer').produce;

const initialState={
    name:'Akinola',
    address:{
        street:'10th Avenue North',
        city:'Miami',
        state:'Florida'
    }
}