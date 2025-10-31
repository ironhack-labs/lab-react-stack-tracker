function CompanyPage({companies}) {
  
  const companyPageStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px"  
  }

  return (
    <div style={companyPageStyle}> 
      <h1>Company Profile</h1>
    </div>
  );
}

export default CompanyPage;
