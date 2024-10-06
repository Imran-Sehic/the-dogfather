import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoints";

export const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const screenSize = useTailwindBreakpoint();
  const isMobile = screenSize == "xs";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-[100vh] font-rubik grid ${
        isMobile ? "grid-cols-[1fr]" : "grid-cols-[300px_1fr]"
      }`}
    >
      <Sidebar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="overflow-auto h-screen flex flex-col">
        <Header isMobile={isMobile} setIsOpen={setIsOpen} />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};
