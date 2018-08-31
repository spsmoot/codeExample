import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Login extends Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit() {
    //     axios
    // }

    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-lg-center">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                Welcome!
                            </div>
                            <div className="card-body">
                                <h6>Login or create an account:</h6>

                                <br/>

                                <form className="form-group" onSubmit={this.handleSubmit}>
                                    <div className="container">
                                        <div className="row justify-content-between">
                                            <input className="form-control col-6" type="text" name="username" placeholder="Email"/>
                                            <input className="form-control col-6" type="password" name="password" placeholder="Password"/>
                                        </div>
                                    </div>

                                    <br/>
                                    <br/>

                                    <div className="container">
                                        <div className="row justify-content-between">
                                            <button className="btn btn-primary col-5" type="submit">Login</button>
                                            <button className="btn btn-info col-5">Create an Account</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('login')) {
    ReactDOM.render(<Login/>, document.getElementById('login'));
}
