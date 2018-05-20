import React, {Component} from 'react'

export default class PhotoItem extends Component {
   render() {
        const { photo } = this.props
        return(
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="well">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <center>
                                <img src={photo.thumbnailUrl} className="img-responsive" />
                            </center>                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}