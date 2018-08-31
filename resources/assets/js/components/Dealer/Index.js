import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dealer from "./Dealer";
import Review from "./Review";

/* An example React component */
class Index extends Component {

    constructor() {
        super();
        //Initialize the state in the constructor
        this.state = {
            user: null,
            dealers: [],
            selectedDealer: null,
            review: {},
            leavingReview: false,
        };

        this.handleAddReview = this.handleAddReview.bind(this);
        this.handleLeavingReview = this.handleLeavingReview.bind(this);
    }

    componentDidMount() {
        axios('/api/dealers/getDealers')
            .then(response => {
                this.setState({
                    dealers: response.data.dealers,
                    user: response.data.user,
                });
            })
        ;
    }

    renderDealers() {
        return this.state.dealers.map(dealer => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <li onClick={() => this.setState({ selectedDealer: dealer })} key={dealer.id}>
                    {dealer.name}
                </li>
            );
        });
    }

    handleAddReview(review) {
        review.rating = Number(review.rating);
        axios.post('/api/reviews', review)
            .then(response => {
                this.setState(() => ({
                    selectedDealer: response.data,
                }));

                return response;
            })
    }

    handleLeavingReview() {
        this.state.leavingReview = !this.state.leavingReview;
        alert('leaving review = ' + this.state.leavingReview + '. Make it show the review component (recognize the change in prop)');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <ul>
                            { this.renderDealers() }
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <Dealer dealer={this.state.selectedDealer} leavingReview={this.handleLeavingReview}/>
                        <Review onAdd={this.handleAddReview} selectedDealer={this.state.selectedDealer} isShown={this.state.leavingReview}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('dealer')) {
    ReactDOM.render(<Index />, document.getElementById('dealer'));
}
