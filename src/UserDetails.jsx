export const UserDetails = ({
  name,
  isOnline,
  hideofflie,
  isPremium,
  isNewUser,
}) => {
  if (hideofflie && !isOnline) {
    return null;
  }

  return (
    <div>
      <h3>
        {name} {isPremium && <span>⭐</span>} {isNewUser && <span>🎉</span>}
      </h3>

      <span>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</span>
      <p>{isOnline ? 'Available for Chat' : 'Check back later'}</p>
      {isOnline ? <button>Start Chat</button> : <small>User is offline</small>}
    </div>
  );
};
