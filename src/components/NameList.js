const NameList = (props) => {
  const byPopularity = (a, b) => b.amount - a.amount
  const byName = (a, b) => a.name.localeCompare(b.name)
  
  return (
    <table>
      <tbody>
        <tr>
          <th>
            <button onClick={() => props.setSortBy('name')}>Name</button>
          </th>
          <th>
            <button onClick={() => props.setSortBy('popularity')}>Amount</button>
          </th>
        </tr>
        {props.names.sort(props.sortBy === 'popularity' ?
          byPopularity : byName).map((item, index) =>
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          )}
      </tbody>
    </table>
  );
}

export default NameList;