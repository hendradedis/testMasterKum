import React, {Component} from 'react'

import PanelProfile from './PanelProfile'
import PanelPost from './PanelPost'
import PanelAlbum from './PanelAlbum'

export default class UserProfile extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            posts: [],
            album:[]
        }
    }

    componentWillMount() {
        const { match } = this.props

        fetch('https://jsonplaceholder.typicode.com/users/'+ match.params.userId)
        .then(response => response.json())
        .then(json => this.setState({
            user: json
        }))

        fetch('https://jsonplaceholder.typicode.com/posts?userId='+ match.params.userId)
        .then(response => response.json())
        .then(json => this.setState({
            posts: json
        }))
        
        fetch('https://jsonplaceholder.typicode.com/albums?userId='+ match.params.userId)
        .then(response => response.json())
        .then(json => this.setState({
            album: json
        }))
    }


   render() {
        const { user, posts, album } = this.state

        return(
            <div>
                <PanelProfile user={user} />
                <PanelPost posts={posts} />
                <PanelAlbum album={album}/>
            </div>
        )
    }
}