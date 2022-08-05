import "./ExpenseItem.css";

function ExpenseItem() {
  //variables definition
  const expenseDate = new Date(2022, 8, 5);
  const expenseTitle = 'Car Insurance';
  const expensePrice = 299.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
