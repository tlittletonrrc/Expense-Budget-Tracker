import { useState } from 'react'
import { 
    getAllUserService, 
    getUserByIDService, 
    getRemainingBalanceService,
    isOverBudgetService 
} from '../../Services/UserService'
import './UserInfo.css'

/**
 * UserInfo Component
 * 
 * Architecture Usage:
 * - Component: Displays user info and quick financial status (this file)
 * - Service: UserService provides user data and business logic
 *   - getUserByIDService(): Gets user details
 *   - getRemainingBalanceService(): Calculates available funds
 *   - isOverBudgetService(): Determines budget status
 * - Repository: UserRepository handles data fetching
 * 
 * Why use multiple service methods?
 * This component needs different pieces of business logic:
 * 1. User lookup (getUserByIDService)
 * 2. Balance calculation (getRemainingBalanceService)
 * 3. Budget validation (isOverBudgetService)
 * 
 * By using the service layer, we avoid duplicating this logic
 * and ensure consistency with the UserDashboard component.
 * 
 * This is the SECOND component using UserService, which satisfies
 * the Sprint 3 requirement T.2: "Service used in at least two components"
 * 
 * How it differs from UserDashboard:
 * - UserDashboard: Full detailed financial summary with cards
 * - UserInfo: Compact quick-view for headers/sidebars
 * Same data source, different presentation - that's separation of concerns!
 */

function UserInfo() {
    // Get all users from service
    const allUsers = getAllUserService()
    const [selectedUserID, setSelectedUserID] = useState(allUsers.users[0].userID)
    
    // Get user data from service
    const user = getUserByIDService(selectedUserID)
    
    // Get calculated values from service (business logic)
    const remainingBalance = getRemainingBalanceService(selectedUserID)
    const isOverBudget = isOverBudgetService(selectedUserID)

    return (
        <div className="user-info">
            <div className="user-selector-compact">
                <select 
                    value={selectedUserID} 
                    onChange={(e) => setSelectedUserID(e.target.value)}
                    className="user-select-compact"
                >
                    {allUsers.users.map(u => (
                        <option key={u.userID} value={u.userID}>
                            {u.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="user-details">
                <div className="user-name-email">
                    <h3>{user.name}</h3>
                    <p className="email">{user.email}</p>
                </div>

                <div className="quick-balance">
                    <span className="label">Available:</span>
                    <span className={`balance ${isOverBudget ? 'over-budget' : 'good'}`}>
                        ${remainingBalance.toFixed(2)}
                    </span>
                    {isOverBudget && <span className="badge">Over Budget</span>}
                </div>
            </div>
        </div>
    )
}

export default UserInfo