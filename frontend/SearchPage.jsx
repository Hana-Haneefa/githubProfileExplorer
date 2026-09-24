import {useState} from "react";
import profileImage from "../src/images/profile.jpg";
import {
  MapPin,
  ExternalLink,
  BriefcaseBusiness,
  CalendarDays,
  BookOpen,
  Users,
  UserPlus,
} from "lucide-react";
import RepoCard from "./components/RepoCard.jsx"

function SearchPage() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // state to track loading status
  const [repos, setRepos] = useState([]); // state to store the user's repositories

  // search function to fetch GitHub profile data
  const handleSearch = async () => {
    setError(null); // reset error state before making a new request
    setUser(null); // reset user state before making a new request
    setRepos([]); // reset repos state before making a new request
    setLoading(true); // set loading state to true before making a new request
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        setError("User not found. Please check the username and try again.");
        return; // exit the function if the response is not ok
      }

      const data = await response.json(); //convert the response to JSON so we can access it as an object
      setUser(data);

      //fetch repos too
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposResponse.ok) {
        setError("Failed to fetch repositories. Please try again later.");
        return; // exit the function if the response is not ok
      }

      const reposData = await reposResponse.json();
      setRepos(reposData); // store the fetched repositories in the state
    } catch (error) {
      setError(
        "An error occurred while fetching the data. Please try again later.",
      );
    } finally {
      setLoading(false); // set loading state to false when the request is complete or fails
    }
  };
  return (
    <div className="bg-gray-800 text-white h-full flex flex-col">
      <div className="flex justify-between items-center py-4 px-40 border-b-2 border-gray-700 font-bold">
        <p>Github Profile Explorer</p>
        <span>Mode</span>
      </div>
      <div>
        {/* search bar division */}

        <form
  onSubmit={(e) => {
    e.preventDefault();
    handleSearch();
  }}
  className="searchBar flex gap-2 justify-center items-center mt-10 border-2 border-gray-700 w-1/2 mx-auto rounded-lg p-2"
>
  <input
    type="search"
    placeholder="Enter github username"
    className="w-full px-4 rounded-lg focus:outline-none"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />

  <button
    type="submit"
    className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded w-1/4 transition-colors duration-300"
  >
    {loading ? "Searching..." : "Search"}
  </button>
</form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        
    
        {/* profile division */}
        
        <div className="profile flex flex-col items-center mt-10 border-2 border-gray-700 w-4/5 mx-auto rounded-lg p-4">
          {/* top div */}
          <div className="w-full h-auto  rounded-lg mb-4 flex p-4">
            {/* image div */}
            {user ? (
              <div className="border-2 border-gray-700 rounded-full w-32 h-32 overflow-hidden">
              <img src={user.avatar_url} alt="Profile" className="w-full h-full object-cover" />
            </div>
            ):(
              <div className="border-2 border-gray-700 rounded-full w-32 h-32 overflow-hidden">
              <img src={profileImage} alt="Profile" />
            </div>
            )}
            {/* info div */}
           {user ? ( <div className="w-1/2 h-auto ml-4 p-4 flex flex-col justify-start items-start">
              <h2 className="text-xl font-bold">{user ? user.name : "User Name"}</h2>
              <p className="text-gray-400">{user ? "@"+ user.login : "Not Available"}</p>
              <p className="text-gray-400 text-sm">{user ? user.bio : "User bio not available"}</p>
              <div className="flex gap-8 mt-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {user && user.location ? user.location : "Not Provided"}
                </span>
                <span className="flex items-center gap-1">
                  <ExternalLink size={16} />
                  {user && user.blog ? user.blog : "Not Provided"}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  {user && user.created_at ? user.created_at : "Not Provided"}
                </span>
              </div>
            </div>):(
               <div className="w-1/2 h-auto ml-4 p-4 flex flex-col justify-start items-start">
              <h2 className="text-xl font-bold">User Name</h2>
              <p className="text-gray-400">@example</p>
              <p className="text-gray-400 text-sm">User bio</p>
              <div className="flex gap-8 mt-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  Location
                </span>
                <span className="flex items-center gap-1">
                  <ExternalLink size={16} />
                  Portfolio
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays size={16} />
                 Created at
                </span>
              </div>
            </div>)}
            
            <button onClick={()=> window.open(user.html_url, "blank")} className=" text-green-500 border-2 border-green-500 ml-70 px-4 rounded w-50 h-10 transition-colors duration-300 flex justify-center items-center gap-2 hover:bg-green-500 hover:text-white">
              View on GitHub
              <ExternalLink size={16} />
            </button>
          </div>
          {/* bottom div */}
          <div className="w-full h-32 rounded-lg flex gap-2 justify-center items-center">
            <div className="border-2 border-gray-600  h-full w-1/3 rounded flex items-center gap-4 p-4">
              <span className="w-15 ml-4">
                <BookOpen size={24} />
              </span>
              <div>
                <h2 className="text-gray-400">Repositories</h2>
                <p className="text-white font-bold text-2xl">{user? user.public_repos: "0"}</p>
              </div>
            </div>
            <div className="border-2 border-gray-600  h-full w-1/3 rounded flex items-center gap-4 p-4">
              <span className="w-15 ml-4">
                <Users size={24} />
              </span>
              <div>
                <h2 className="text-gray-400">Followers</h2>
                <p className="text-white font-bold text-2xl">{user? user.followers: "0"}</p>
              </div>
            </div>
            <div className="border-2 border-gray-600  h-full w-1/3 rounded flex items-center gap-4 p-4">
              <span className="w-15 ml-4">
                <UserPlus size={24} />
              </span>
              <div>
                <h2 className="text-gray-400">Following</h2>
                <p className="text-white font-bold text-2xl">{user? user.following: "0"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* repo heading */}
        <div className="w-full flex justify-between px-40 mt-8 font-bold">
          <p>Repositories</p>
          <p>{repos.length} total Repos</p>
        </div>
        {/* repo div */}
        <div className="w-4/5 mx-auto mt-10 border-2 border-gray-700 rounded-lg p-4 grid grid-cols-3 gap-2 mb-20">
          {repos.map((repo)=> (
            <RepoCard key ={repo.id} repo={repo} /> 
          ))}
        </div>
        

      </div>
    </div>
  );
}

export default SearchPage;
