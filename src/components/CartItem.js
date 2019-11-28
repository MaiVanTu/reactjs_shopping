import React from 'react';
import * as MSG from './../constants/Message';


class App extends React.Component {
    render() {
        var { product, quantity } = this.props.cartItem;
        return (
            <tr>
            <th scope="row">
                <img src={product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                <strong>{ product.name }</strong>
                </h5>
            </td>
            <td>{ product.price }$</td>
            <td className="center-on-small-only">
                <span className="qty"> {quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={this.onAddToCart.bind(this, product, quantity, -1)}>
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={this.onAddToCart.bind(this, product, quantity, 1)}>
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{ this.showSubTotal(product.price, quantity) }$</td>
            <td>
                <button type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    title="" 
                    data-original-title="Remove item"
                    onClick={this.onDeleteFromCart.bind(this, product)}>
                    X
                </button>
            </td>
        </tr>
        );
    }

    showSubTotal(price, quantity) {
        return price * quantity;
    }

    onDeleteFromCart = (product) => {
        var r = window.confirm('Remove ' + product.name + '!');
        console.log(product);
        if (r == false) {
            return;
        } else {
            this.props.onDeleteFromCart(product);
            this.props.onChangeMessage(MSG.MSG_DELETE_CART);
        }
    }

    onAddToCart(product, quantity, value) {
        if (quantity === 1 && value === -1) {
            this.onDeleteFromCart(product);
            this.props.onChangeMessage(MSG.MSG_DELETE_CART);
        } else {
            this.props.onAddToCart(product, value);
            this.props.onChangeMessage(MSG.MSG_UPDATE_CART);
        }
    }
}

export default App;
