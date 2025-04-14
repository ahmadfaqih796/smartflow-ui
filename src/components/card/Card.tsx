import { ANIMATION } from "@/constants/theme";

type ComponentCardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<ComponentCardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`${ANIMATION} rounded-2xl border border-gray-200 bg-white dark:border-gray-50 dark:bg-white/[0.03] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
