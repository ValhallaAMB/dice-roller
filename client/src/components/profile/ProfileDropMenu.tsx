import { LogOut, User, UserPen } from "lucide-react";
import { Link } from "react-router-dom";
// import SignUpModal from "@components/auth/SignUpModal";
// import LoginModal from "@components/auth/LoginModal";
import { lazy, Suspense } from "react";

const LoginModal = lazy(() => import("@components/auth/LoginModal"));
const SignUpModal = lazy(() => import("@components/auth/SignUpModal"));

function ProfileDropMenu() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const loggedIn = false;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle bg-transparent">
        <User size={22} />
      </div>

      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-1 shadow-sm"
      >
        {loggedIn ? (
          <>
            <li>
              {/* Must put an ID for now */}
              <Link to="/profile/1">
                <UserPen size={16} /> Profile
              </Link>
            </li>
            <li>
              {/* <Link to="/logout">Logout</Link> */}
              <span>
                <LogOut size={16} /> Logout
              </span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Suspense
                fallback={
                  <div className="loading loading-spinner loading-xl" />
                }
              >
                <LoginModal />
              </Suspense>
            </li>
            <li>
              <Suspense
                fallback={
                  <div className="loading loading-spinner loading-xl" />
                }
              >
                <SignUpModal />
              </Suspense>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default ProfileDropMenu;
