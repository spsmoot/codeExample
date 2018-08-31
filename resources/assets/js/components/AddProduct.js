import React, { Component } from 'react';

class AddProduct extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: 0,
            available: 1,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput  = this.handleInput.bind(this);
    }

    handleInput(key, e) {
        console.log(e.target.value);
        let state = Object.assign({}, this.state.newProduct);
        state[key] = e.target.value;
        this.setState({newProduct: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newProduct);
    }

    render() {
        return (
            <div>
                <h2>Add new Product</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label> Title:
                            <input type="text" onChange={(e)=>this.handleInput('title', e)}/>
                        </label>
                        <label> Description:
                            <input type="text" onChange={(e)=>this.handleInput('description', e)}/>
                        </label>
                        <label> Price:
                            <input type="number" onChange={(e)=>this.handleInput('price', e)}/>
                        </label>
                        <label> Available:
                            <select onChange={(e)=>this.handleInput('available', e)}>
                                <option value="1" selected="seleted">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </label>

                        <input type="submit" value="Create Product"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProduct;
