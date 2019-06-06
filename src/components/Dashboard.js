import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters.js';

const Dashboard=()=>(
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default Dashboard;