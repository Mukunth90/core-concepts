export const Alert = ({ children, type = 'success' }) => {
  return (
    <div
      style={{
        backgroundColor: type === 'success' ? '#118839' : '#dc2626',
        color: 'white',
        padding: '1rem',
        borderRadius: '.5rem',
        margin: '1rem',
      }}
    >
      {children}
    </div>
  );
};
