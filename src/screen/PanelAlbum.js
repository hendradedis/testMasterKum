import React, {Component} from 'react'
import PostAlbums from './PostAlbums'

export default class PanelAlbum extends Component {
  render() {
        const { album } = this.props

        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Albums Lists</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                        {
                            album.map((album, index) =>
                            //console.log(album)
                            <PostAlbums key={album.id} album={album} />
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}