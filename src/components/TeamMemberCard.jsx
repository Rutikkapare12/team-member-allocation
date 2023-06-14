import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";
import { useContext } from "react";
import DataContext from '../context/DataContext';
const TeamMemberCard = ({ employee }) => {

  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  const className = (() => {
    if (employee.teamName === selectedTeam) {
      return "card m-2 standout";
    } else if (employee.teamName === '') {
      return "card m-2 NotSelected";
    } else {
      return "card m-2";
    }
  })();

  return (
    <div
      key={employee.id}
      id={employee.id}
      className={className}
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "male" ? (
        <img src={maleProfile} alt="" className="card-img-top" />
      ) : (
        <img src={femaleProfile} alt="" className="card-img-top" />
      )}

      <div className="card-body">
        <h5 className="card-title">Full Name : {employee.fullName}</h5>
        <p className="cart-text">
          <b>Disignation : </b>
          {employee.designation}
        </p>
        {
          employee.teamName === '' ? <p><b>status :</b> <span class="badge bg-success">Available</span></p> : employee.teamName === selectedTeam ? <p><b>status :</b> <span class="badge bg-warning">{selectedTeam}</span></p> : null
        }
      </div>
    </div>
  );
};

export default TeamMemberCard;
