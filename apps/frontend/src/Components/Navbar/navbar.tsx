import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import './Navbar.css';

const Navbar: React.FC = () => {
return (
  <nav className="navbar">

    <div className="navbar-header">
      <Link to="/" className="logo-link">
        <h2>Expense Budget Tracker</h2>
      </Link>
    </div>

    <ul className="nav-list">
      <SignedIn>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>

        <li className="nav-item">
          <Link to="/accounts" className="nav-link">Accounts</Link>
        </li>

        <li className="nav-item">
          <Link to="/allocations" className="nav-link">Allocations</Link>
        </li>

        <li className="nav-item">
          <Link to="/savings" className="nav-link">Savings</Link>
        </li>

        <li className="nav-item">
          <UserButton />
        </li>
      </SignedIn>

      <SignedOut>
        <li className="nav-item">
          <SignInButton mode="redirect">
            <button className="sign-in-button">Sign In</button>
          </SignInButton>
        </li>

        <li className="nav-item">
          <SignUpButton mode="redirect">
            <button className="sign-up-button">Sign Up</button>
          </SignUpButton>
        </li>
      </SignedOut>

    </ul>
  </nav>
  );
};

export default Navbar;