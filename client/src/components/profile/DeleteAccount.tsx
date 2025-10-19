function DeleteAccount() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">Delete Account</h1>
          <p className="py-3">
            Are you sure you want to delete your account? 
            <br />
            All data will be lost. This action cannot be undone.
          </p>
          <button className="btn btn-error">Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
