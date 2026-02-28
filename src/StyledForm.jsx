export const StyledForm = () => {
  return (
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="username"
        className="form-input"
        placeholder="Name"
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        className="form-input"
        tabIndex="1"
        placeholder="Email"
      />
    </form>
  );
};
