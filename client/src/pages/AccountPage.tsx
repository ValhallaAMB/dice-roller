import ChangePassword from "@components/profile/ChangePassword";
import DeleteAccount from "@components/profile/DeleteAccount";
import EditAccount from "@components/profile/EditAccount";

function AccountPage() {
  return (
    <main className="mt-7 grid place-content-center">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift flex max-w-2xl justify-around">
        <input
          type="radio"
          name="account_tabs"
          className="tab"
          aria-label="Edit Account"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <EditAccount />
        </div>

        <input
          type="radio"
          name="account_tabs"
          className="tab"
          aria-label="Change Password"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <ChangePassword />
        </div>

        <input
          type="radio"
          name="account_tabs"
          className="tab"
          aria-label="Delete Account"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <DeleteAccount />
        </div>
      </div>
    </main>
  );
}

export default AccountPage;
