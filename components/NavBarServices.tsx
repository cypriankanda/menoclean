import { useGlobalContext } from "../context/AppContext";
import { services } from "../utils/utils";

const NavBarServices = () => {
  const { hideNavBarMenu, showNavBarMenu, showNavMenu } = useGlobalContext();
  return (
    <main
      className={`submenu flex gap-4 items-center justify-center flex-wrap bg-[#0060F1] ${
        showNavMenu ? "show-submenu" : ""
      }`}
      onMouseEnter={() => showNavBarMenu()}
      onMouseLeave={() => hideNavBarMenu()}
    >
      {services.map((items) => {
        return (
          <div className="w-[150px] flex flex-col justify-between items-center p-2 rounded-md h-[150px] bg-white">
            <h4>icon here</h4>
            <p className="text-[#0060F1] text-center">{items.service}</p>
          </div>
        );
      })}
    </main>
  );
};

export default NavBarServices;
