import { Mail } from "lucide-react";
import { useState } from "react";
import CustomPasswordField from "../components/CustomPasswordField";

function ProfilePage() {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <main className="mt-7 grid place-items-center">
      <fieldset className="fieldset bg-base-100 border-base-content/10 rounded-box w-xs space-y-1 border p-4 [&>*]:text-sm">
        <legend className="fieldset-legend">Profile Page</legend>

        <div className="avatar mb-2 justify-center">
          <div className="w-32 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="label">Profile picture</label>
          <input type="file" className="file-input" />
        </div>

        <div className="space-y-1">
          <label className="label">Username</label>
          <input type="text" className="input" placeholder="username" />
        </div>

        <div className="space-y-1">
          <label className="label">Email</label>
          <label className="input validator">
            <Mail size={16} />
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>

        <button
          className="btn btn-outline"
          onClick={() => setTogglePassword(!togglePassword)}
        >
          Change Password
        </button>

        {togglePassword && (
          <div className="grid space-y-1">
            <CustomPasswordField required={togglePassword} title="Password" />
            <CustomPasswordField
              required={togglePassword}
              title="Confirm Password"
            />
          </div>
        )}

        <button className="btn btn-primary mt-1">save</button>
      </fieldset>
    </main>
  );
}

export default ProfilePage;
