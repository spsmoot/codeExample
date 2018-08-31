import React, { Component } from 'react';

// class Dealer extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             dealer: props.dealer,
//         }
//     }
//
//     render() {
//         if (!this.state.dealer) {
//             return (<div>No Dealer Selected</div>);
//         }
//         return(
//             <div>
//                 <h2> {this.state.dealer.name} </h2>
//                 <p> {this.state.dealer.description} </p>
//                 <h3> Established On : {this.state.dealer.established_on} </h3>
//                 <h3> Rating : {this.state.dealer.average_rating} </h3>
//                 <br/>
//                 <span className="btn btn-success float-right" onClick={this.props.onClick}>Leave a Review</span>
//             </div>
//         )
//     }
// }
/* Stateless component or pure component
 * { dealer } syntax is the object destructing
 */
const Dealer = (props) => {
    //if the props dealer is null, return dealer doesn't exist
    if(!props.dealer) {
        return(<div>No Dealer Selected</div>);
    }

    //Else, display the dealer data
    return(
        <div>
            <h2> {props.dealer.name} </h2>
            <p> {props.dealer.description} </p>
            <h3> Established On : {props.dealer.established_on} </h3>
            <h3> Rating : {props.dealer.average_rating} </h3>
            <br/>
            <span className="btn btn-success float-right" onClick={props.leavingReview}>Leave a Review</span>
        </div>
    )
};

export default Dealer ;
