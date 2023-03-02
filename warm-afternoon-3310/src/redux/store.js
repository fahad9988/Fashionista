import {legacy_createStore,compose,applyMiddleware,combineReducers} from "redux";
import { productReducer } from "./product/product.reducer";
import thunk from "redux-thunk";
import cartReducer from "./cart/cart.reducer";
import wishlistReducer from "./wishlist/wishlist.reducer";
import { datareducer } from "./admin/admin.reducer";



const rootReducer=combineReducers({
 productManager:productReducer,
 cart: cartReducer,
 wishlist:wishlistReducer,
 data:datareducer
})
const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));