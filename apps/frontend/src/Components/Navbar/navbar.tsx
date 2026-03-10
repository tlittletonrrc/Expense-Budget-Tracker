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
      label: 'Accounts',
      path: '/accounts'
    },
    {
      id: 3,
      label: 'Allocations',
      path: '/Allocations'
    },
    {
      id: 4,
      label: 'Savings',
      path: '/savings'
    },
    {
      id: 5,
      label: 'Account (Log in and out)',
      path: '/savings'
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="logo-link">
          <h2>Expense Budget Tracker</h2>
        </Link>
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
    </nav>
  );
};

export default Navbar;