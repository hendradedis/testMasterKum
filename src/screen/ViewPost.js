import React, {Component} from 'react'

import ItemComment from './ItemComment'

export default class ViewPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            commants: []
        }
    }

    componentWillMount() {
        const { match } = this.props

        fetch('https://jsonplaceholder.typicode.com/comments?postId='+ match.params.postId)
        .then(response => response.json())
        .then(json => this.setState({
            commants: json
        }))
    }


   render() {
        const { commants } = this.state
        const { match } = this.props
        //console.log(commants, 'Test')
        return(
            <div>
            <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="well">
                            <center>
                                <h4><b>Command:</b> { match.params.title }</h4>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        commants.map((commant, index) => 
                            <ItemComment commant={commant} key={commant.id} />
                        )
                    }
                </div>
            </div>
        )
    }
}