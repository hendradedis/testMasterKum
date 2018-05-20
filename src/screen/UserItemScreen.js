import React, {Component} from 'react'

import { Link } from "react-router-dom";

export default class UserItemScreen extends Component {
   render() {
        const { user } = this.props
        return(
            <Link to={"/profile/"+ user.id}>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="well">
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <img src="../../assets/img/man.png" className="img-responsive" />
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                <br />
                                <p>{ user.name }</p>
                                <p>{ user.email }</p>
                            </div>
                        </div>
                    </div>
                </div>        
            </Link>
        )
    }
}