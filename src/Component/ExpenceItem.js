import "./ExpenceItem.css";
function ExpenceItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.Amount}</h2>
      </div>
      <div className="expense-item__LocationOfExpenditure}">
        <h2>{props.LocationOfExpenditure}</h2>
      </div>
      <div className=".expense-item__id">
        <h2>{props.id}</h2>
      </div>
    </div>
  );
}
export default ExpenceItem;
