export const UserDetails = ({
  name,
  isOnline,
  hideofflie,
  isPremium,
  isNewUser,
  role,
}) => {
  if (hideofflie && !isOnline) {
    return null;
  }

  let roleBadge = null;
  if (role === 'admin') {
    roleBadge = <span>🔑 Admin</span>;
  } else if (role === 'moderator') {
    roleBadge = <span>🛡️ Moderator</span>;
  } else if (role === 'VIP') {
    roleBadge = <span>💎 VIP</span>;
  }

  return (
    <div>
      <h3>
        {name}
        {isPremium && <span>⭐</span>}
        {isNewUser && <span>🎉</span>}
        {roleBadge}
      </h3>

      <span>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</span>
      <p>{isOnline ? 'Available for Chat' : 'Check back later'}</p>
      {isOnline ? <button>Start Chat</button> : <small>User is offline</small>}
    </div>
  );
};
