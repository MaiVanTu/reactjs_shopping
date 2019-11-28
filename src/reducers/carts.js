import * as type from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CARTS'));
var initialState = data ? data : [];

const carts = (state = initialState, action) => {
    var id, index = null;
    switch (action.type) {
        case type.ADD_TO_CART:
            id = action.product.id;
            index = findIndex(state, id);
            if (index !== -1) {
                state[index].quantity = state[index].quantity + action.quantity;
            } else {
                state.push({
                    product: action.product,
                    quantity: action.quantity
                })
            }
            storeItem([...state]);
            return [...state];
        case type.DELETE_FROM_CART:
            id = action.product.id;
            index = findIndex(state, id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            storeItem([...state]);
            return [...state];
        default: return [...state];
    }
}

var storeItem = (state) => {
    localStorage.setItem('CARTS', JSON.stringify(state));
}

var findIndex = (map, id) => {
    var result = -1;
    map.forEach((element, index) => {
        if (element.product.id === id) {
            result = index;
        }
    });
    return result;
}

export default carts;