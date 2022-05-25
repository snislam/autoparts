import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="bg-blue-300 drawer-content flex flex-col p-7">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <>
                                <li><Link to='/dashboard/my-order'>My Orders</Link></li>
                                <li><Link to='/dashboard/add-review'>Add Review</Link></li>
                            </>
                        }
                        {
                            admin && <>
                                <li><Link to='/dashboard/users'>Make Admin</Link></li>
                                <li><Link to='/dashboard/manage-orders'>Manage All Orders</Link></li>
                                <li><Link to='/dashboard/add-product'>Add Product</Link></li>
                                <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;