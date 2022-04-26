const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
//create apply middleware function
const applyMiddeware = redux.applyMiddleware;
const cakeReducerAndAction = require('./cakeReducer');
const iceCreamReducerAndAction = require('./iceCreamReducer');

//create middleware
const createLogger = reduxLogger.createLogger();
const rootReducer = combineReducers({
  reducerFunctionCake: cakeReducerAndAction.reducerFunctionCake,
  reducerFunctionIceCream: iceCreamReducerAndAction.reducerFunctionIceCream,
});

//apply middleware here in create store method
const store = createStore(rootReducer, applyMiddeware(createLogger));
console.log('currentState', store.getState());

const unsubscribe = store.subscribe(() => {
  store.getState();
});

store.dispatch(cakeReducerAndAction.buyCake());
store.dispatch(cakeReducerAndAction.buyCake());
store.dispatch(cakeReducerAndAction.buyCake());
store.dispatch(iceCreamReducerAndAction.buyIceCream());
store.dispatch(iceCreamReducerAndAction.buyIceCream());

unsubscribe();
