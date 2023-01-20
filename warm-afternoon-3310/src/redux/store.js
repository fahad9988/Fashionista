import {legacy_createStore,compose,applyMiddleware,combineReducers} from "redux";
import { productReducer } from "./product/product.reducer";
import thunk from "redux-thunk";
import cartReducer from "./cart/cart.reducer";



const rootReducer=combineReducers({
 productManager:productReducer,
 cart: cartReducer,
})
const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));