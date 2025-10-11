import { LogOut, User, UserPen, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import useAuthStore from "@stores/useAuthStore";

function ProfileDropMenu() {
  const { isAuthenticated, signOut } = useAuthStore();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle bg-transparent">
        <User size={22} />
      </div>

      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-1 shadow-sm"
      >
        {isAuthenticated ? (
          <>
            <li>
              {/* Must put an ID for now */}
              <Link to="/account" className="min-w-max">
                <UserPen size={16} /> My account
              </Link>
            </li>
            <li>
              <Link to="/" onClick={signOut} className="min-w-max">
                <LogOut size={16} /> Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signin" className="min-w-max">
                <UserPen size={16} /> Sign In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="min-w-max">
                <UserPlus size={16} /> Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default ProfileDropMenu;
