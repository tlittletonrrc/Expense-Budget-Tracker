import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavItem {
  id: number;
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    {
      id: 1,
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      id: 2,
      label: 'User Dashboard', 
      path: '/user-dashboard'
    },
    {
      id: 3,
      label: 'Accounts',
      path: '/accounts'
    },
    {
      id: 4,
      label: 'Allocations',
      path: '/Allocations'
    },
    {
      id: 5,
      label: 'Expenses',
      path: '/expenses'
    },
    {
      id: 6,
      label: 'Savings',
      path: '/savings'
    },
    {
      id: 7,
      label: 'Reports',
      path: '/reports'
    }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h2>expense budget tracker</h2>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <Link to={item.path} className="nav-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navbar-footer">
        <p>v1.0</p>
      </div>
    </nav>
  );
};

export default Navbar;