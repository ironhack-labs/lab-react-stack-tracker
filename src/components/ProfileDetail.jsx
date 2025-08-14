function ProfileDetail({logo, name, description}) {
  return (
    <div className="profile-info">
      <div className="profile-logo">
        <img src={logo} alt={name + " logo"} />
      </div>
      <div className="profile-text-info">
        <h3>{name}</h3>
        <h4>About</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ProfileDetail;
