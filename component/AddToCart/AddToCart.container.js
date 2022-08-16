// imporing original function to call
import {
    AddToCartContainer,
    mapStateToProps,
    mapDispatchToProps as sourceMapDispatchToProps
} from 'SourceComponent/AddToCart/AddToCart.container.js';

// importing to replicate original default export
import { connect } from 'react-redux';

// exporting all functions and constants from original file
export * from 'SourceComponent/AddToCart/AddToCart.container.js';

// re-exporting the overriden variable
export const mapDispatchToProps = (dispatch) => {
    // calling the original function to modify the result
    const handler = sourceMapDispatchToProps(dispatch);

    // add custom functionality    
    handler.logProduct = () => {
        console.log('product added to cart');
    };
    
    // returning modified result
    return handler;
}

// exporting default
// (becuase function mapDispatchToProps was used in it)
export default connect(mapStateToProps, mapDispatchToProps)(AddToCartContainer);