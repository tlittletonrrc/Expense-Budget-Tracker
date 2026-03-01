import { useState } from 'react'
import { getUserFinancialSummaryService, getAllUserService } from '../../Services/UserService'
import './UserDashboard.css'

/**
 * UserDashboard Component
 * 
 * This component demonstrates the hook-service-repository architecture:
 * - Component: Handles presentation (this file)
 * - Service: getUserFinancialSummaryService() provides business logic
 * - Repository: UserRepository fetches data from JSON
 * 
 * Why use the service here?
 * Instead of calculating totals, percentages, and checking budget status
 * in this component, we delegate that business logic to UserService.
 * This keeps the component focused on displaying data, not computing it.
 * 
 * How it works:
 * 1. Component calls getAllUserService() to get list of users
 * 2. User selects a user from dropdown
 * 3. Component calls getUserFinancialSummaryService(userID)
 * 4. Service calculates all financial metrics (total allocations, remaining balance, etc.)
 * 5. Component displays the pre-calculated data
 * 
 * Benefits:
 * - No calculation logic in this component
 * - Reusable service methods (other components can use same calculations)
 * - Easy to test business logic separately from UI
 */

function UserDashboard() {
    // Get all users from service (which calls repository)
    const allUsers = getAllUserService()
    
    // Select first user as default (in real app, this would come from auth)
    const [selectedUserID, setSelectedUserID] = useState(allUsers.users[0].userID)
    
    // Get financial summary from service (business logic layer)
    // This single call replaces multiple calculations we'd otherwise do here
    const summary = getUserFinancialSummaryService(selectedUserID)

    return (
        <div className="user-dashboard">
            <h2>Financial Dashboard</h2>
            
            {/* User Selector */}
            <div className="user-selector">
                <label htmlFor="user-select">Select User: </label>
                <select 
                    id="user-select"
                    value={selectedUserID} 
                    onChange={(e) => setSelectedUserID(e.target.value)}
                >
                    {allUsers.users.map(user => (
                        <option key={user.userID} value={user.userID}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Financial Summary Cards */}
            <div className="dashboard-cards">
                <div className="card">
                    <h3>Current Balance</h3>
                    <p className="amount">${summary.balance.toFixed(2)}</p>
                </div>

                <div className="card">
                    <h3>Total Allocations</h3>
                    <p className="amount">${summary.totalAllocations.toFixed(2)}</p>
                    <small>{summary.allocationCount} categories</small>
                </div>

                <div className="card">
                    <h3>Remaining Balance</h3>
                    <p className={`amount ${summary.isOverBudget ? 'negative' : 'positive'}`}>
                        ${summary.remainingBalance.toFixed(2)}
                    </p>
                    {summary.isOverBudget && (
                        <small className="warning">⚠️ Over budget!</small>
                    )}
                </div>

                <div className="card">
                    <h3>Savings Progress</h3>
                    <p className="amount">{summary.savingsProgress.toFixed(1)}%</p>
                    <small>Goal: ${summary.savingsGoal.toFixed(2)}</small>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${Math.min(summary.savingsProgress, 100)}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard