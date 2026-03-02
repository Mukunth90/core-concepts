export const NameList = () => {
  const names = ['Harvey', 'Michael', 'Donna', 'Ross'];

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  return <div>{nameList}</div>;
};
