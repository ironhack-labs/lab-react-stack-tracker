export const CompanyCard = ({ company }) => {
  return (
    <div className="compCard">
      <h2>{company.name}</h2>
      <img src={company.logo} className="logo" />
    </div>
  );
};
