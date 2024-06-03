"use client";
import { createContext, useContext, useState, ReactNode } from "react";
// import type { ReactNode } from "react";

const AppContext = createContext<{
  showNavMenu: boolean;
  isSideBarOpen: boolean;
  showNavBarMenu: () => void;
  hideNavBarMenu: () => void;
  hideSideBar: () => void;
  showSideBar: () => void;
}>({
  showNavMenu: false,
  isSideBarOpen: false,
  showNavBarMenu: () => {},
  hideNavBarMenu: () => {},
  hideSideBar: () => {},
  showSideBar: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({
    showNavMenu: false,
    isSideBarOpen: false,
  });

  const showSideBar = () => {
    setState({ ...state, isSideBarOpen: true });
  };
  const hideSideBar = () => {
    setState({ ...state, isSideBarOpen: false });
  };

  const showNavBarMenu = () => {
    setState({ ...state, showNavMenu: true });
  };

  const hideNavBarMenu = () => {
    setState({ ...state, showNavMenu: false });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        showNavBarMenu,
        hideNavBarMenu,
        hideSideBar,
        showSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
