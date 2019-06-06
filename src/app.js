import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js'
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';
import getVisibleExpenses from './selectors/expenseSelector.js';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store=configureStore();

store.subscribe(()=>{
    console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
});

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));