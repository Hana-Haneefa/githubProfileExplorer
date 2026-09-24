import { BookOpen } from "lucide-react";

function RepoCard({ repo }) {
  return (
    <div className="border border-gray-600 rounded-lg p-4">

      <h2 className="text-lg font-bold">
        <BookOpen size={18} className="inline-block mr-4" />
        {repo.name}
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        {repo.description || "No description available"}
      </p>

      <div className="flex gap-4 mt-4 text-sm text-gray-400">
        <span>
          ⭐ {repo.stargazers_count}
        </span>

        <span>
          🍴 {repo.forks_count}
        </span>

        <span>
          {repo.language || "Unknown"}
        </span>
      </div>

    </div>
  );
}

export default RepoCard;