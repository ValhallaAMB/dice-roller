import { LogOut, User, UserPen } from "lucide-react";
import { Link } from "react-router-dom";

function ProfileDropMenu() {
  return (
    <button className="dropdown dropdown-end cursor-pointer">
      <User size={22} />
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
    </button>
  );
}

export default ProfileDropMenu;
