import * as type from './../constants/ActionTypes';

export const onAddToCart = (product, quantity) => {
    return {
        type: type.ADD_TO_CART,
        product,
        quantity
    }
}

export const onDeleteFromCart = (product) => {
    return {
        type: type.DELETE_FROM_CART,
        product
    }
}

export const onChangeMessage = (message) => {
    return {
        type: type.CHANGE_MESSAGE,
        message
    }
}

