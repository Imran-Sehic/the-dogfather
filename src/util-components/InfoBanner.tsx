import { ReactNode } from "react";

interface InfoBanner {
  content: string;
  icon: ReactNode;
}

export const InfoBanner: React.FC<InfoBanner> = ({ content, icon }) => {
  return (
    <div className="flex flex-col jutsify-center items-center">
      {icon}
      <p>{content}</p>
    </div>
  );
};
