import Link from "next/link";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Sidebar = () => {
  return (
    <div>  
      {/* NAV */}
      <div className="hidden border-r bg-muted/40 md:block xl:flex">
        <Nav />
      </div>

      {/* MOBILENAV */}
      <div className="flex flex-col xl:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Sidebar;
