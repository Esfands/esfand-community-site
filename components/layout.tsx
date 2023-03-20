import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { InfoBanner } from "./infobanner";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <main className="min-h-full">{children}</main>
        <Footer />
      </div>
    </>
  );
};
