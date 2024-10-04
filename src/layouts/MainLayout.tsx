import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className="h-[100vh] font-rubik grid grid-cols-[300px_1fr]">
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
};
