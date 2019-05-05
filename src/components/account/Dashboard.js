import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from '../Footer';
import { connect } from "react-redux";
import { fetchUsers } from "../users/UserActions"
import { Link } from "react-router-dom"
export class Dashboard extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }
    render() {
        const { users } = this.props.userReducer;
        return (
            <div id="accounts-parent">
                <Navbar />
                <div className="container">
                    <section className="site-animate site-section">
                        <div className="container">
                            <div className="row clinic-container">
                                <div className="col-md-12 text-center mb-5 site-animate">
                                    <h2 className="display-4">Dashboard</h2>
                                </div>
                                <div className="col-12 site-animate">
                                    <h3>Accounts <RegionDropdown /></h3>
                                    <br />
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Region/State</th>
                                                <th scope="col">Phone No.</th>
                                                <th scope="col">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((user, index) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row" className="user-detail-cell">{index + 1}</th>
                                                            <td className="user-detail-cell">{user.displayName}</td>
                                                            <td className="user-detail-cell">{user.regionState}</td>
                                                            <td className="user-detail-cell">{user.phoneNumber}</td>
                                                            <td className="user-detail-cell">
                                                                <Link to={"/account/" + user.uid}>
                                                                    <button className="btn btn-outline-primary">
                                                                        Details
                                                                </button>
                                                                </Link>
                                                            </td>
                                                        </tr>)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}

const RegionDropdown = (props) => {
    return (
        <button className="btn btn-outline-primary" onClick={() => {
            alert("coming soon...")
        }}>Filter</button>
    );
}
const mapStateToProps = state => {
    return {
        userReducer: state.UserReducer
    };
};
export default connect(mapStateToProps)(Dashboard)
