import "./landingCss/Profilecard.css";

const ProfileCard1 = (props) => {
  return (
    <div className="main-cardbox"
    data-background={props.profilepick}
    style={{ backgroundImage: `url(${props.profilepick})`,  }}>
      <div
        className="card-part2" >
            <div className="emoji">
                <img src={props.profileimg} alt="" />
            </div>
        <div className="info-box pb-30 bord-thin-bottom mb-30 price-description">
          <h6 className="sub-title mb-10">{props.name}</h6>
          <div className="amount">
          </div>
          <p className="fz-13">{props.post}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard1
