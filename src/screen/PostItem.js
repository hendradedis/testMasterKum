import React, {Component} from 'react'

import { Link } from "react-router-dom";

export default class PostItem extends Component {
   render() {
        const { post } = this.props
        return(
            <Link to={"/comment/"+ post.id}>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="well">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <p>{ post.title }</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>        
        )
    }
}