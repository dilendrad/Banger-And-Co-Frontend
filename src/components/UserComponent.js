import React from 'react';
import UserService from '../service/UserService';

class UserComponent extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {

        UserService.getUsers().then((response) => {

            this.setState({users: response.data})

        });
    }

    render() {

        return (

            <div>

                <h1 className = "text-center"> View All Users</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> User ID</td>
                            <td> First Name</td>
                            <td> Last Name</td>
                            <td> Email</td>
                            <td> Username</td>
                            <td> NIC</td>
                            <td> Date of Birth</td>
                            <td> Address</td>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map (

                                user =>

                                <tr key = {user.userID}>
                                    <td>{user.userID}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.userNIC}</td>
                                    <td>{user.dateOfBirth}</td>
                                    <td>{user.address}</td>


                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent