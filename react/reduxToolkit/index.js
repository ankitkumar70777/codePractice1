import store from "./app/store.js";
// import actions which is required
// import { cakeActions } from "./features/cake/cakeSlice.js";
// import { iceCreamAction } from "./features/icecream/iceCreamSlice.js";
import { fetchUsers } from "./features/user/userSlice.js";


const unsubscribe = store.subscribe(() => {  
    console.log('',store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.restocked(5));
// store.dispatch(iceCreamAction.ordered())
// store.dispatch(iceCreamAction.restocked(10))
// store.dispatch(fetchUsers())

// unsubscribe()