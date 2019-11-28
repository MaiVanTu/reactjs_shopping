import React from 'react';
import { connect } from 'react-redux';
import Carts from '../components/Carts';
import CartItem from './../components/CartItem';
import Total from './../components/Total';
import * as msg from './../constants/Message';
import PropTypes from 'prop-types';
import * as action from './../actions/index';

class CartsContainer extends React.Component {
    render() {
        var {carts} = this.props;
        return (
            <Carts>
                {this.showCartItem(carts)}
                {this.showTotalAmount(carts)}
            </Carts>
        );
    }

    
    showCartItem(cartItems) {
        var result = <tr><td>{msg.MSG_EMPTY_CART}</td></tr>;
        if (cartItems.length > 0) {
            result =  cartItems.map((cartItem, index) => {
                return <CartItem 
                key={index} 
                cartItem={cartItem}
                onDeleteFromCart={this.props.onDeleteFromCart}
                onAddToCart={this.props.onAddToCart}
                onChangeMessage={this.props.onChangeMessage}
                 />
            })
        }
        return result;
    }

    showTotalAmount(cartItems) {
        var result = null;
        if (cartItems.length > 0) {
            return <Total cartItems={cartItems} />
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteFromCart : (product) => {
            dispatch(action.onDeleteFromCart(product));
        },
        onAddToCart : (product, quantity) => {
            dispatch(action.onAddToCart(product, quantity));
        },
        onChangeMessage: (message) => {
            dispatch(action.onChangeMessage(message));
        }
    }
}

CartsContainer.propTypes = {
    carts: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                status: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);
