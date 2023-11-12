function CompanyPage() {
  return (
    <div>
      <h1>Company Profile</h1>

      <div>
        <span>{technologyDetails.name}</span>
        <img src={companyDetails.logo} width="80" height="auto" />
      </div>
    </div>
  );
}

export default CompanyPage;
