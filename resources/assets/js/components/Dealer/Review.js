import React, { Component } from 'react';

class Review extends Component {
    constructor (props) {
        super(props);
        this.state = {
            review: {
                dealer_id: props.selectedDealer ? props.selectedDealer.id : null,
                user_id: null,
                review: 0,
                rating: 1,
            },
            leavingReview: props.leavingReview,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput  = this.handleInput.bind(this);
    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.newReview);
        state[key] = e.target.value;
        this.setState({newReview: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.newReview);
    }

    render() {
        return (
            <div className={this.state.leavingReview ? '' : 'd-none'}>
                <h2>Add Review</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label> Review:
                            <input type="text" onChange={(e)=>this.handleInput('review', e)}/>
                        </label>
                        <label> Rating:
                            <input type="text" onChange={(e)=>this.handleInput('rating', e)}/>
                        </label>

                        <input type="submit" value="Submit Review"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Review;
