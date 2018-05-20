import React, {Component} from 'react'

import UserItemScreen from './UserItemScreen'

export default class homeScreen extends Component {
    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({
            users: json
        })
    )}
        
    render() {
        const { users } = this.state
        return(
            <div className="row">
                {
                    users.map((user, index) =>
                        <UserItemScreen key={user.id} user={user} />
                    )
                }
            </div>
        )
    }
}