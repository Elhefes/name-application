const Total = (props) => {
  let totalAmount = props.names.reduce((
    accumulator, current) => accumulator + current.amount, 0)

  return (
    <div>
      <p>These are the top-10 male and female names in Solita.</p>
      <p>There are a total of {totalAmount} people of these names.</p>
    </div>
  );
}

export default Total;