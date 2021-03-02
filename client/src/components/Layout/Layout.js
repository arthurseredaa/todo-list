import { Header } from "@/Header/Header";

export const Layout = ({ children }) => (
  <div className="mx-auto flex justify-start pt-20 flex-col h-screen lg:items-stretch lg:w-2/3 sm:w-1/1 sm:px-4 sm:justify-start sm:items-center">
    <Header />
    {children}
  </div>
);
