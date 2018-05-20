import React, {Component} from 'react'

export default class PanelProfile extends Component {
  render() {
        const { user } = this.props

        return(
            <div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div  className="well">
                            <center  style={{marginTop:20}}>
                                <br />
                                <img src="../../assets/img/man.png" className="img-responsive" />
                                <br />
                                <b>{user.name}</b>
                            </center>
                        </div>
                    </div>

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="well">
                            <table  className="table table-hover">
                                <tbody>
                                    <tr>
                                        <td width="35%">Username</td>
                                        <td width="5%">:</td>
                                        <td>{user.username}</td>
                                    </tr>
                                    <tr>
                                        <td width="35%">Name</td>
                                        <td width="5%">:</td>
                                        <td>{user.name}</td>
                                    </tr>
                                    <tr>
                                        <td width="35%">Email</td>
                                        <td width="5%">:</td>
                                        <td>{user.email}</td>
                                    </tr>                                    
                                    <tr>
                                        <td width="35%">Phone</td>
                                        <td width="5%">:</td>
                                        <td>{user.phone}</td>
                                    </tr> 
                                    <tr>
                                        <td width="35%">Website</td>
                                        <td width="5%">:</td>
                                        <td>{user.website}</td>
                                    </tr>                                                                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}