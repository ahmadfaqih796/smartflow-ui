import { Link } from "react-router";

interface BreadcrumbProps {
  pageTitle: string;
  path?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle, path }) => {
  const segments = path?.split("/") || [];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
        {pageTitle}
      </h2>
      <nav>
        <ol className="flex items-center gap-1.5">
          {segments.map((item, index) => {
            const isLast = index === segments.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {isLast ? (
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                ) : (
                  <>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
                    >
                      {item}
                    </Link>
                    <svg
                      className="stroke-current text-gray-400 dark:text-gray-500"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
