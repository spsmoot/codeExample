import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddProduct from "./AddProduct";
import Product from "./Product";

/* An example React component */
class Main extends Component {

    constructor() {
        super();
        //Initialize the state in the constructor
        this.state = {
            products: [],
            currentProduct: null,

        };

        this.handleAddProduct = this.handleAddProduct.bind(this);
    }

    componentDidMount() {
        axios('/api/products')
            .then(response => {
                this.setState({ products: response.data.products });
                // return response;
            })
        ;
    }

    renderProducts() {
        return this.state.products.map(product => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li onClick={() => this.setState({ currentProduct: product })} key={product.id}>
                    {product.title}
                </li>
            );
        });
    }

    handleAddProduct(product) {
        product.price = Number(product.price);
        axios.post('/api/products', product)
            .then(response => {
                this.setState((prevState) => ({
                    products: prevState.products.concat(response.data),
                    currentProduct: response.data,
                }));

                return response;
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <ul>
                            { this.renderProducts() }
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <Product product={this.state.currentProduct} />
                        <AddProduct onAdd={this.handleAddProduct}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
