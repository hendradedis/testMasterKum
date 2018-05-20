import React, {Component} from 'react'
import { Link } from "react-router-dom";

export default class PostAlbums extends Component {
   render() {
        const { album } = this.props
        return(
            <Link to={"/albums/"+ album.id +"/"+ album.title}>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <div className="well">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <center>
                                    <img src="../../assets/img/gallery.png" className="img-responsive" />
                                </center>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div style={{ height: 100, fontSize: 15, paddingTop: 5, paddingBottom: 5}}>
                                    <p>{ album.title }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>        
        )
    }
}