import "./TeachersBio.css";

const TeacherBio = (props) => {
  return (
    <div
      className={props.isActive ? "modal activeModal" : "modal"}
      onClick={() => props.setActive(false)}
    >
      <div className="modalWrapper" onClick={(e) => e.stopPropagation()}>
        {props.teachersInfo[props.activeModal].bio}
      </div>
    </div>
  );
};

export default TeacherBio;
