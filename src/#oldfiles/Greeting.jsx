export const Greeting = ({ name = 'Guest', message = 'Hello' }) => {
  return (
    <h2>
      {name} ! {message} !
    </h2>
  );
};
