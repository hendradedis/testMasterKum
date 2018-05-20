import React, {Component} from 'react'

import PhotoItem from './PhotoItem'

export default class ViewGallery extends Component {
    constructor(){
        super()
        this.state = {
            photos: []
        }
    }

    componentWillMount() {
        const { match } = this.props

        fetch('https://jsonplaceholder.typicode.com/photos?albumId='+ match.params.albumId)
        .then(response => response.json())
        .then(json => this.setState({
            photos: json
        }))
    }


   render() {
        const { photos } = this.state
        const { match } = this.props

        return(
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="well">
                            <center>
                                <h4><b>Album:</b> { match.params.title }</h4>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        photos.map((photo, index) => 
                            <PhotoItem photo={photo} key={photo.id} />
                        )
                    }
                </div>
            </div>
        )
    }
}