import { useEffect } from "react";
import useUserStore from "../store/useUserStore";

function HomePage() {
  const { users, loading, error, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(users, loading, error);

  return (
    <main className="container mx-auto p-4">
      {error && <div className="alert alert-error mb-8">{error}</div>}

      {loading ? (
        <div className="flex justify-center items-center ">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {users.map((user) => (
            <ul key={user.id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
          ))}
        </div>
      )}
    </main>
  );
}

export default HomePage;
