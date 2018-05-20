import React, {Component} from 'react'

export default class ItemComment extends Component {
   render() {
        const { commants } = this.props
        const { commant } = this.props
        //console.log(commants, 'tesssttt')
        return(
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="well">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="well">
                            <table  className="table table-hover">
                                <tbody>
                                    <tr>
                                        <td width="35%">nama</td>
                                        <td width="5%">:</td>
                                        <td>{commant.name}</td>
                                    </tr>
                                    <tr>
                                        <td width="35%">email</td>
                                        <td width="5%">:</td>
                                        <td>{commant.email}</td>
                                    </tr>
                                    <tr>
                                        <td width="35%">body</td>
                                        <td width="5%">:</td>
                                        <td>{commant.body}</td>
                                    </tr>                                                                                                       
                                </tbody>
                            </table>
                        </div>
                    </div>                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}