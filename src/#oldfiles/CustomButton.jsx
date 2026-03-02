export const CustomButton = ({ text }) => {
  const name = 'Marvel';
  const handleClick = (e) => {
    console.log(`Hey ${name},  you clicked ${text}`);
  };
  return <button onClick={handleClick}>{text}</button>;
};
