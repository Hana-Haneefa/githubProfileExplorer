import { useState } from "react";

import SearchPage from "../frontend/SearchPage.jsx";

function App() {
  

  return (
    // <div>
    //   <h1>GitHub Profile Explorer</h1>
    //   <input
    //     type="search"
    //     placeholder="Enter GitHub username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <button onClick={handleSearch} disabled={loading}>
    //     {loading ? "Searching..." : "Search"}
    //   </button>

    //   {error && <p style={{ color: "red" }}>{error}</p>}

    //   {user && (
    //     <div>
    //       <h1>{user.name}</h1>
    //       <p>{user.bio}</p>
    //       <p>@{user.login}</p>
    //       <p>Followers: {user.followers}</p>
    //       <p>Following: {user.following}</p>
    //       <p>Public Repositories: {user.public_repos}</p>
    //     </div>
    //   )}
    // </div>

    <SearchPage />
  );
}

export default App;
