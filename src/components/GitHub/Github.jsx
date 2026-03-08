import React, { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import githubDict from "../../content/github/github.content";
import { GITHUB_CONFIG } from "../../constants/github";

const ActivityTypes = {
  PushEvent: { icon: "📤", label: "pushed code", color: "text-green-500" },
  CreateEvent: { icon: "✨", label: "created", color: "text-blue-500" },
  IssuesEvent: {
    icon: "🐛",
    label: "Issue Activity",
    color: "text-orange-500",
  },
  PullRequestEvent: {
    icon: "🔄",
    label: "pull request",
    color: "text-purple-500",
  },
  WatchEvent: {
    icon: "👁️",
    label: "watched repository",
    color: "text-yellow-500",
  },
  ForkEvent: { icon: "🍴", label: "forked ", color: "text-cyan-500" },
  DeleteEvent: { icon: "🗑️", label: "deleted ", color: "text-red-500" },
};

const ActivityCard = ({ activity, index }) => {
  const ActivityType = ActivityTypes[activity.type] || {
    icon: "📋",
    label: "Activity ",
    color: "text-neutral-500",
  };

  const getActivityDescription = () => {
    const repo = activity.repo.name.split("/")[1];

    switch (activity.type) {
      case "PushEvent":
        { const commitCount = activity.payload.commits ? activity.payload.commits.length : 1;
        return `pushed ${commitCount} commit${commitCount > 1 ? "s" : ""} to ${repo}`; }
      case "CreateEvent":
        return `created ${activity.payload.ref_type} ${repo}`;
      case "IssuesEvent":
        return `${activity.payload.action} issue in ${repo}`;
      case "PullRequestEvent":
        return `${activity.payload.action} pull request in ${repo}`;
      case "WatchEvent":
        return `started watching ${repo}`;
      case "ForkEvent":
        return `forked ${repo}`;
      case "DeleteEvent":
        return `deleted ${activity.payload.ref_type} ${repo}`;
    }
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const ActivityTime = new Date(dateString);
    const diffInHours = Math.floor((now - ActivityTime) / (1000 * 60 * 60));
    if (diffInHours < 1) return "just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 24 * 7) return `${Math.floor(diffInHours / 24)}d ago`;
    return `${Math.floor(diffInHours / (24 * 7))}w ago`;
  };

  return (
    <div
      className={`flex items-center gap-3 rounded-lg group transition-all duration-300 bg-amber-50/50 dark:bg-gray-800/40 border border-amber-100 dark:border-purple-900/30 p-4 shadow-sm hover:shadow-md hover:shadow-amber-200/50 dark:hover:shadow-purple-800/30 hover:scale-[1.02] hover:translate-x-1 cursor-pointer`}
      onClick={() =>
        window.open(`https://github.com/${activity.repo.name}`, "_blank")
      }
    >
      <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
        {ActivityType.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200">
          {getActivityDescription()}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500 dark:text-neutral-400">
            {formatTimeAgo(activity.created_at)}
          </span>
          {activity.payload.commits && activity.payload.commits.length > 0 && (
            <span className="text-xs px-2 py-0.5 rounded-full text-gray-500 dark:text-neutral-400">
              +
              {activity.payload.commits[0].message
                .split("\n")[0]
                .substring(0, 30)}
              {activity.payload.commits[0].message.length > 30 && "..."}
            </span>
          )}
        </div>
      </div>
      <div className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-500 dark:text-neutral-400">
        →
      </div>
    </div>
  );
};
const ActivityStats = ({ activities, content }) => {
  const stats = activities.reduce(
    (acc, activity) => {
      acc.totalCommits += activity.payload.commits
        ? activity.payload.commits.length
        : 0;
      acc.totalRepos.add(activity.repo.name);
      acc.activityType.add(activity.type);
      return acc;
    },
    { totalCommits: 0, totalRepos: new Set(), activityType: new Set() },
  );
  const stateItems = [
    { label: content.commitsLabel, value: stats.totalCommits, icon: "💻" },
    { label: content.reposLabel, value: stats.totalRepos.size, icon: "📂" },
    { label: content.activitiesLabel, value: activities.length, icon: "⚡" },
  ];
  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {stateItems.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center p-3 rounded-lg bg-amber-50 dark:bg-gray-800/50 border border-amber-200 dark:border-purple-800/40 shadow-sm shadow-amber-100 dark:shadow-purple-900/20"
        >
          <div className="text-2xl mb-1">{stat.icon}</div>
          <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
            {stat.value}
          </div>
          <div className="text-xs text-gray-500 dark:text-neutral-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
const LoadingState = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className="flex items-center gap-3 rounded-lg bg-amber-50 dark:bg-gray-800/40 animate-pulse p-4"
      >
        <div className="w-8 h-8 bg-amber-200 dark:bg-gray-600 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-amber-200 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-3 bg-amber-200 dark:bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);
const ErrorState = ({ onRetry, content }) => (
  <div className="text-center py-8">
    <div className="text-4xl mb-4">😇</div>
    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
      {content.errorTitle}
    </h3>
    <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
      {content.errorDesc}
    </p>
    <button
      onClick={onRetry}
      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 bg-linear-to-t from-amber-200 to-amber-500 hover-3d dark:from-purple-700 dark:to-purple-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 dark:focus:ring-purple-500 focus:ring-offset-2"
    >
      {content.tryAgain}
    </button>
  </div>
);

export default function Github() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const content = useTranslation(githubDict);

  const fetchGithubActivities = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_CONFIG.username}/events?per_page=${GITHUB_CONFIG.maxActivities}`,
      );
      if (!response.ok) throw new Error("Failed to fetch activities");
      const data = await response.json();
      const filteredActivities = data.filter((activity) =>
        [
          "PushEvent",
          "CreateEvent",
          "IssuesEvent",
          "PullRequestEvent",
          "WatchEvent",
          "ForkEvent",
          "DeleteEvent",
        ].includes(activity.type),
      );
      setActivities(filteredActivities);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching GitHub activities:", error);
      setError(true);
      setActivities([
        {
          id: "1",
          type: "PushEvent",
          repo: { name: "MahmoudHamdi74/my-portfolio" },
          payload: {
            commits: [{ message: "feat: add GitHub activity integration" }],
          },
          created_at: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
        },
        {
          id: "2",
          type: "IssuesEvent",
          repo: { name: "MahmoudHamdi74/NetFilm" },
          payload: { ref_type: "repository" },
          created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubActivities();
    const interval = setInterval(
      fetchGithubActivities,
      GITHUB_CONFIG.refreshInterval,
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="github" >
    <div className="max-w-4xl mx-auto py-16 px-4 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-purple-100 dark:drop-shadow-lg dark:drop-shadow-purple-700 mb-4">
          <span aria-hidden="true">🐙</span> {content.title}
        </h2>
        <p className="text-base md:text-xl max-w-2xl mx-auto mt-4 md:mt-8 text-gray-600 dark:text-gray-400">
          {content.description}
        </p>
        {lastUpdated && (
            <p className="text-sm mt-6 text-gray-500 dark:text-neutral-600">
                {content.lastUpdated} {lastUpdated.toLocaleTimeString()}
            </p>
        )}
  </div>


  <div className="bg-amber-50/50 dark:bg-gray-900/60 border border-amber-200 dark:border-purple-800/50 rounded-xl p-6 shadow-md shadow-amber-100 dark:shadow-purple-900/30">
        {loading && (<LoadingState />)}
        {error && !loading && (<ErrorState onRetry={fetchGithubActivities} content={content} />)}
        {!loading && activities.length > 0 && (
          <>
            <ActivityStats activities={activities} content={content} />
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <ActivityCard key={activity.id} activity={activity} index={index} />
              ))}
            </div>
            <div className="text-center mt-6">
                <a
                  href={`https://github.com/${GITHUB_CONFIG.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 bg-linear-to-t from-amber-200 to-amber-500 hover-3d dark:from-purple-700 dark:to-purple-500 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 dark:focus:ring-purple-500 focus:ring-offset-2"
                  >
                 <span>{content.viewProfile}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path d="M14 3h7a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V6.41l-9.29 9.3a1 1 0 0 1-1.42-1.42L18.59 5H14a1 1 0 0 1-1-1z"/>
                  </svg>
                </a>
              </div>
          </>
        )}
  </div>
</div>
</section>
  );
}
