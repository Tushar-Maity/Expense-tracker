import React, { useState } from 'react';

import ExpensesList from './ExpensesList'
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear}
                    onChangeHandler={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
                {/* <ExpenseItem 
                title={props.expenses[0].title} 
                amount={props.expenses[0].amount} 
                date={props.expenses[0].date}/>

                <ExpenseItem 
                title={props.expenses[1].title} 
                amount={props.expenses[1].amount} 
                date={props.expenses[1].date}/>

                <ExpenseItem 
                title={props.expenses[2].title} 
                amount={props.expenses[2].amount} 
                date={props.expenses[2].date}/>

                <ExpenseItem 
                title={props.expenses[3].title} 
                amount={props.expenses[3].amount} 
                date={props.expenses[3].date}/> */}
            </Card>
        </div>
    );
}

export default Expenses;