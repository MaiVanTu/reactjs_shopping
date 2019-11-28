import React from 'react';

class App extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount()}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
    showTotalAmount() {
        var result = 0;
        var {cartItems} = this.props;
        for (var i = 0; i < cartItems.length; i++) {
            result += cartItems[i].product.price * cartItems[i].quantity;
        }
        return result;
    }
}

export default App;
