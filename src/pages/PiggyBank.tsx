import { useState } from 'react';
import './PiggyBank.css';

interface SavingsGoal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
}

function PiggyBank() {
  const [goals, setGoals] = useState<SavingsGoal[]>([
    { id: 1, name: 'Emergency Fund', targetAmount: 5000, currentAmount: 1200 },
    { id: 2, name: 'Vacation', targetAmount: 2000, currentAmount: 450 },
  ]);

  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalTarget, setNewGoalTarget] = useState('');
  const [depositAmount, setDepositAmount] = useState<{ [key: number]: string }>({});

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newGoalName.trim() || !newGoalTarget) {
      alert('Please enter both goal name and target amount');
      return;
    }

    const target = parseFloat(newGoalTarget);
    if (target <= 0) {
      alert('Target amount must be greater than 0');
      return;
    }

    const newGoal: SavingsGoal = {
      id: Date.now(),
      name: newGoalName.trim(),
      targetAmount: target,
      currentAmount: 0,
    };

    setGoals([...goals, newGoal]);
    setNewGoalName('');
    setNewGoalTarget('');
  };

  const handleDeposit = (goalId: number) => {
    const amount = parseFloat(depositAmount[goalId] || '0');
    
    if (amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        return {
          ...goal,
          currentAmount: Math.min(goal.currentAmount + amount, goal.targetAmount)
        };
      }
      return goal;
    }));

    setDepositAmount({ ...depositAmount, [goalId]: '' });
  };

  const handleDeleteGoal = (goalId: number) => {
    if (window.confirm('Are you sure you want to delete this savings goal?')) {
      setGoals(goals.filter(goal => goal.id !== goalId));
    }
  };

  const calculateProgress = (current: number, target: number): number => {
    return Math.min((current / target) * 100, 100);
  };

  const totalSaved = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);

  return (
    <div className="piggy-bank-page">
      <h1>Savings Goals</h1>
      
      <div className="savings-summary">
        <div className="summary-card">
          <h3>Total Saved</h3>
          <p className="amount">${totalSaved.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Total Target</h3>
          <p className="amount">${totalTarget.toFixed(2)}</p>
        </div>
        <div className="summary-card">
          <h3>Overall Progress</h3>
          <p className="amount">{totalTarget > 0 ? ((totalSaved / totalTarget) * 100).toFixed(1) : 0}%</p>
        </div>
      </div>

      <div className="add-goal-section">
        <h2>Add New Savings Goal</h2>
        <form onSubmit={handleAddGoal} className="goal-form">
          <div className="form-group">
            <label htmlFor="goalName">Goal Name</label>
            <input
              type="text"
              id="goalName"
              value={newGoalName}
              onChange={(e) => setNewGoalName(e.target.value)}
              placeholder="e.g., New Car, Vacation"
              maxLength={50}
            />
          </div>
          <div className="form-group">
            <label htmlFor="goalTarget">Target Amount ($)</label>
            <input
              type="number"
              id="goalTarget"
              value={newGoalTarget}
              onChange={(e) => setNewGoalTarget(e.target.value)}
              placeholder="0.00"
              min="0.01"
              step="0.01"
            />
          </div>
          <button type="submit" className="btn-add">Add Goal</button>
        </form>
      </div>

      <div className="goals-list">
        <h2>Your Savings Goals</h2>
        {goals.length === 0 ? (
          <p className="no-goals">No savings goals yet. Add one above to get started!</p>
        ) : (
          goals.map(goal => (
            <div key={goal.id} className="goal-card">
              <div className="goal-header">
                <h3>{goal.name}</h3>
                <button 
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="btn-delete"
                  aria-label="Delete goal"
                >
                  Delete
                </button>
              </div>
              
              <div className="goal-amounts">
                <span className="current">${goal.currentAmount.toFixed(2)}</span>
                <span className="separator">/</span>
                <span className="target">${goal.targetAmount.toFixed(2)}</span>
              </div>

              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${calculateProgress(goal.currentAmount, goal.targetAmount)}%` }}
                ></div>
              </div>
              <p className="progress-text">
                {calculateProgress(goal.currentAmount, goal.targetAmount).toFixed(1)}% Complete
              </p>

              <div className="deposit-section">
                <input
                  type="number"
                  value={depositAmount[goal.id] || ''}
                  onChange={(e) => setDepositAmount({ ...depositAmount, [goal.id]: e.target.value })}
                  placeholder="Enter amount"
                  min="0.01"
                  step="0.01"
                  className="deposit-input"
                />
                <button 
                  onClick={() => handleDeposit(goal.id)}
                  className="btn-deposit"
                >
                  Deposit
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PiggyBank;