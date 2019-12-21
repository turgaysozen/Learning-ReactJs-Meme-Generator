import React from "react";

// function Product(props) {
//     return (
//         <div>
//             <h1>{props.product.title}</h1>
//             <label>Price: $ {props.product.price}</label><br></br>
//             <label>Quantity: {props.product.quantity}</label><br></br>
//             <label>Total Price: $ {props.product.price * props.product.quantity}</label>
//         </div>
//     )
// }

class Product extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.product.title}</h1>
                <label>Price: ${this.props.product.price}</label><br></br>
                <label>Quantity: {this.props.product.quantity}</label><br></br>
                <label>Total Price: $ {this.props.product.price * this.props.product.quantity}</label>
            </div>
        )
    }
}

export default Product;