import React from 'react';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from './../actions/index';

class ProductsContainer extends React.Component {
    render() {
        return (
            <Products>
                {this.showProduct(this.props.products)}
            </Products>
        );
    }

    showProduct(products) {
        var result = '';
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    onAddToCart={this.props.onAddToCart} 
                    onChangeMessage={this.props.onChangeMessage}/>
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(action.onAddToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(action.onChangeMessage(message));
        }
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            status: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
