import React, { useEffect, useState } from "react";
import "../Admin/AdminPanel.css";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; 
const AdminPanel = ({ children, active }) => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const user = "Ved Prakash"; 
  const navigate = useNavigate();
  
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handlelogout = () => {
    Swal.fire({
      title: 'Are you sure ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Logged out successfully!',
          icon: 'success',
        }).then(() => {
          sessionStorage.removeItem("Token");
          navigate('/');
        });
      } else {
        Swal.fire({
          title: 'Thanks',
          text: 'You are still logged in.',
          icon: 'info',
        });
      }
    });
  };

  useEffect(() => {
    const tokenId = sessionStorage.getItem('Token');
    if (!tokenId) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
      <div className="sidebar-logo"><b>PORTFOLIO</b></div>
        <div className="navigation">
          <ul className="sidebar-nav-links">
            <Link className="navigation-link" to="/admindashboard">
              <li>
                <button className={`sidebar-link ${active === 'dashboard' && 'active'}`}>
                  <i className="ri-dashboard-horizontal-fill"></i> &nbsp;Dashboard
                </button>
              </li>
            </Link>
            <Link className="navigation-link" to="/manageUser">
              <li>
                <button className={`sidebar-link ${active === 'assigned' && 'active'}`}>
                <i class="ri-group-fill"></i>&nbsp;Manage Users
                </button>
              </li>
            </Link>
          </ul>  
        </div>
        <div className="logout-div">
          <button className="sidebar-linkk" onClick={() => handlelogout()}>
            <i className="ri-logout-circle-line"></i> &nbsp;Logout
          </button>
        </div>
        <button className="sidebar-close-btn" onClick={toggleSidebar}>
          ×
        </button>
      </div>

      <div className="main-content">
        <header className="header-admin">
          <h1 className="header-title">Welcome Back, {user}</h1>
          <button className="hamburger" onClick={toggleSidebar}>
            {sidebarActive ? "×" : "☰"}  
          </button>
          
        </header>

        <div className="content-wrapper">
          <div className="content">
            {children}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminPanel;
