import { ActionButton } from './ActionButton';

export const Contact = () => {
  const handlingMessage = () => {
    alert('Sending your message');
  };
  return (
    <div>
      <h2>Contact Us</h2>
      <ActionButton text="Send Message" onClick={handlingMessage} />
    </div>
  );
};
