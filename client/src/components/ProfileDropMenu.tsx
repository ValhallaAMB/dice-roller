import { LogOut, User, UserPen } from "lucide-react";
// import { Link } from "react-router-dom";

function ProfileDropMenu() {
  return (
    <details className="dropdown dropdown-end">
      <summary className="btn btn-circle bg-transparent">
        <User size={22} />
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 mt-1">
        <li>
          {/* <Link to="/profile">Profile</Link> */}
          <span>
            <UserPen size={16} /> Profile
          </span>
        </li>
        <li>
          {/* <Link to="/logout">Logout</Link> */}
          <span>
            <LogOut size={16} /> Logout
          </span>
        </li>
      </ul>
    </details>
  );
}

export default ProfileDropMenu;
