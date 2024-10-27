import React, { useState } from 'react';
import './Css/AdminDashboard.css';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [auctions, setAuctions] = useState([]);
    const [bids, setBids] = useState([]);
    const [payments, setPayments] = useState([]);
    const [reports, setReports] = useState([]);
    const [notifications, setNotifications] = useState([]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Admin Dashboard</h1>

            {/* User Management Section */}
            <div className="card mb-4">
                <div className="card-header">
                    <h2 className="mb-0">User Management</h2>
                </div>
                <div className="card-body">
                    <p>Manage users, roles, and activity logs here.</p>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Auction Management Section */}
            <div className="card mb-4">
                <div className="card-header">
                    <h2 className="mb-0">Auction Management</h2>
                </div>
                <div className="card-body">
                    <p>Create, edit, and monitor live auctions.</p>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Auction Title" required />
                        </div>
                        <div className="col-md-3">
                            <input type="datetime-local" className="form-control" placeholder="Start Time" required />
                        </div>
                        <div className="col-md-3">
                            <input type="datetime-local" className="form-control" placeholder="End Time" required />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Create Auction</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bid Management Section */}
            <div className="card mb-4">
                <div className="card-header">
                    <h2 className="mb-0">Bid Management</h2>
                </div>
                <div className="card-body">
                    <p>Manage bids, set increments, and minimum requirements.</p>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Bid ID</th>
                                <th>User</th>
                                <th>Auction</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map(bid => (
                                <tr key={bid.id}>
                                    <td>{bid.id}</td>
                                    <td>{bid.user}</td>
                                    <td>{bid.auction}</td>
                                    <td>{bid.amount}</td>
                                    <td>
                                        <button className="btn btn-secondary btn-sm">Cancel Bid</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Payment Management Section */}
            <div className="card mb-4">
                <div className="card-header">
                    <h2 className="mb-0">Payment Management</h2>
                </div>
                <div className="card-body">
                    <p>Handle payments, refunds, and disputes.</p>
                    <table className="table table-striped">
                        <thead className="table-primary">
                            <tr>
                                <th>Payment ID</th>
                                <th>User</th>
                                <th>Auction</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map(payment => (
                                <tr key={payment.id}>
                                    <td>{payment.id}</td>
                                    <td>{payment.user}</td>
                                    <td>{payment.auction}</td>
                                    <td>{payment.amount}</td>
                                    <td>{payment.status}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">Refund</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Reporting and Analytics Section */}
            <div className="card mb-4">
                <div className="card-header">
                    <h2 className="mb-0">Reporting and Analytics</h2>
                </div>
                <div className="card-body">
                    <p>Generate reports and view site metrics.</p>
                    <button className="btn btn-primary mb-3">Generate Report</button>
                    <ul className="list-group">
                        {reports.map((report, index) => (
                            <li key={index} className="list-group-item">{report}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Notifications and Messaging Section */}
            <div className="card mb-4">
                <div className="card-header">
                    <h2 className="mb-0">Notifications and Messaging</h2>
                </div>
                <div className="card-body">
                    <p>Send alerts and manage notifications.</p>
                    <form className="d-flex mb-3">
                        <input type="text" className="form-control me-2" placeholder="Enter message here" />
                        <button type="submit" className="btn btn-primary">Send Notification</button>
                    </form>
                    <ul className="list-group">
                        {notifications.map((notification, index) => (
                            <li key={index} className="list-group-item">{notification}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
