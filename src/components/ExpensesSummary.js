import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount===1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(props.expensesTotal).format('$0,0.00');
    return (
    <div>
        {   
            <h3>Viewing {props.expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h3>
        }
    </div>
)}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    const expenseCount = visibleExpenses.length;
    const expensesTotal = selectExpensesTotal(visibleExpenses);
    return {
        expenseCount,
        expensesTotal
    }
}

export default connect(mapStateToProps)(ExpensesSummary);