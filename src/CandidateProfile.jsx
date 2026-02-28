export const CandidateProfile = () => {
  const Name = 'Mukunth';
  const Role = 'Web Developer';
  const Experience = 14;
  const isAvaiableForHire = true;

  return (
    <>
      <h2>{Name}</h2>
      <p>
        {Role} with {Experience} years of experience
      </p>
      <p>Started working in - {2026 - Experience}</p>
      <p>
        {isAvaiableForHire ? 'Available for hire' : 'Not available for hire'}
      </p>
      <p>Contact: {Name.toLocaleLowerCase().replace(' ', '.')}@gmail.com</p>
    </>
  );
};
