import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // state to track loading status

  // search function to fetch GitHub profile data
  const handleSearch = async () => {
    setError(null); // reset error state before making a new request
    setUser(null); // reset user state before making a new request
    setLoading(true); // set loading state to true before making a new request
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        setError("User not found. Please check the username and try again.");
        return; // exit the function if the response is not ok
      }

      const data = await response.json(); //convert the response to JSON so we can access it as an object
      setUser(data);
    } catch (error) {
      setError(
        "An error occurred while fetching the data. Please try again later.",
      );
    } finally {
      setLoading(false); // set loading state to false when the request is complete or fails
    }
  };

  return (
    <div>
      <h1>GitHub Profile Explorer</h1>
      <input
        type="search"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>{user.bio}</p>
          <p>@{user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repositories: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default App;
