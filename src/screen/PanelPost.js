import React, {Component} from 'react'

import PostItem from './PostItem'
import { Link } from "react-router-dom";

export default class PanelPost extends Component {
  render() {
        const { posts } = this.props

        return(
            <Link to={"/Commment/"+ posts.id+'/'+posts.title}>
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Post Lists</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                        {
                            posts.map((post, index) =>
                                <PostItem key={post.id} post={post} />
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        )
    }
}