import { GITHUB } from "@/constants";
import Link from "next/link";
import { fetchCommits } from "@/lib/github";
import { formatDate } from "@/lib/date";

export default async function Changelog() {
  const commits = await fetchCommits();

  return (
    <div className="min-h-screen mb-20 px-1">
      <h2 className="font-medium text-xl dark:text-gray-200 mb-8 tracking-tighter">
        Changelog
      </h2>

      {!commits && <p>Failed to load history.</p>}

      {commits && (
        <ul>
          {commits.map(commit => (
            <li key={commit.sha} className="my-[2rem] dark:text-gray-200">
              <div className="mb-2">
                <strong>{commit.commit.author.name}</strong> committed on{" "}
                {formatDate(commit.commit.author.date)}
              </div>

              <div className="mb-2 dark:text-gray-400">
                {commit.commit.message}
              </div>

              <div>
                <Link
                  href={`${GITHUB.commitPage}/${commit.sha}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
