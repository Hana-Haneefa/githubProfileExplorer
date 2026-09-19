import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  // search function to fetch GitHub profile data
  const handleSearch = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json(); //convert the response to JSON so we can access it as an object
    setUser(data);
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
      <button onClick={handleSearch}>Search</button>
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
