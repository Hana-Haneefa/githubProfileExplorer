function SearchPage() {
  return (
    <div className="bg-gray-800 text-white h-full flex flex-col">
      <div className="flex justify-between items-center py-4 px-40 border-b-2 border-gray-700">
        <p>Github Profile Explorer</p>
        <span>Mode</span>
      </div>
      <div>
        {/* search bar division */}

        <div className="searchBar flex gap-2 justify-center items-center mt-10 border-2 border-gray-700 w-1/2 mx-auto rounded-lg p-2 flex-1">
          <input
            type="search"
            placeholder="Enter github username"
            className="w-full px-4 rounded-lg focus:outline-none "
          />
          <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded w-1/4 transition-colors duration-300">
            Search
          </button>
        </div>
        {/* profile division */}
        <div className="profile flex flex-col items-center mt-10 border-2 border-gray-700 w-4/5 mx-auto rounded-lg p-4">
          {/* top div */}
          <div className="w-full h-auto  rounded-lg mb-4 flex p-4">
            {/* image div */}
            <div className="border-2 border-gray-700 rounded-full w-32 h-32 overflow-hidden">
              <img />
            </div>
            {/* info div */}
            <div className="border-2 border-gray-700 rounded-lg w-1/2 h-auto ml-4 p-4 flex flex-col justify-start items-start">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-400">Software Engineer</p>
            </div>
            <button className=" text-green-500 border-2 border-green-500 ml-70 px-4 rounded w-40 h-10 transition-colors duration-300">
              View on GitHub
            </button>
          </div>
          {/* bottom div */}
          <div className="w-full h-32 rounded-lg flex gap-2 justify-center items-center">
            <div className="border-2 border-gray-600  h-full w-1/3 rounded flex items-center gap-4 p-4">
              <span className="w-15">icon</span>
              <div>
                <h2 className="text-gray-400">Repositories</h2>
                <p className="text-white font-bold text-2xl">10</p>
              </div>
            </div>
            <div className="border-2 border-gray-600  h-full w-1/3 rounded flex items-center gap-4 p-4">
              <span className="w-15">icon</span>
              <div>
                <h2 className="text-gray-400">Followers</h2>
                <p className="text-white font-bold text-2xl">50</p>
              </div>
            </div>
            <div className="border-2 border-gray-600  h-full w-1/3 rounded flex items-center gap-4 p-4">
              <span className="w-15">icon</span>
              <div>
                <h2 className="text-gray-400">Following</h2>
                <p className="text-white font-bold text-2xl">100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between px-40 mt-8">
          <p>Repositories</p>
          <p>4 total Repos</p>
        </div>
        {/* repo div */}
        <div className="w-4/5 mx-auto mt-10 border-2 border-gray-700 rounded-lg p-4 grid grid-cols-3 gap-2">
          <div className="w-full h-40 border-2 border-gray-600 rounded"></div>
          <div className="w-full h-40 border-2 border-gray-600 rounded"></div>
          <div className="w-full h-40 border-2 border-gray-600 rounded"></div>
          <div className="w-full h-40 border-2 border-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
