import ColorModeContextProvider from "../ColorModeContextProvider";

type GlobalStateProps = {
  children: React.ReactNode;
};

const GlobalState = ({ children }: GlobalStateProps) => {
  return <ColorModeContextProvider>{children}</ColorModeContextProvider>;
};

export default GlobalState;
