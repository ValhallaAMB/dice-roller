import { Mail } from "lucide-react";
import { useState } from "react";
import CustomInput from "@components/common/CustomInput";

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

        <CustomInput
          title="Profile Picture"
          type="file"
          placeholder=""
          required={false}
          className="file-input"
        />

        <CustomInput
          title="Username"
          type="text"
          placeholder="username"
          required={true}
        />

        <CustomInput
          title="Email"
          type="email"
          placeholder="mail@site.com"
          required={true}
          Icon={Mail}
          invalidHint="Enter valid email address"
        />

        <button
          className="btn btn-outline"
          onClick={() => setTogglePassword(!togglePassword)}
        >
          Change Password
        </button>

        {togglePassword && (
          <>
            <CustomInput
              title="New Password"
              type="password"
              placeholder="New Password"
              required={togglePassword}
            />
            <CustomInput
              title="Confirm New Password"
              type="password"
              placeholder="Confirm New Password"
              required={togglePassword}
            />
          </>
        )}

        <button className="btn btn-primary mt-1">save</button>
      </fieldset>
    </main>
  );
}

export default ProfilePage;
