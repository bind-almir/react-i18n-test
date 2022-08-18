import { FC, createContext } from "react";

type AppContext = {
  lanugages: Array<{
    nativeName: string;
  }>
}

interface InputProps {
	children: React.ReactElement;
}

const ApplicationContext = createContext<AppContext | null>(null);

export const ApplicationContextProvider: FC<InputProps> = (props: InputProps) => {
  
  const { children }  = props;
  const ctx: AppContext = {
    lanugages: [
      {
        nativeName: "English"
      },
      {
        nativeName: "French"
      }
    ]
  }

  return (
    <ApplicationContext.Provider value={ctx}>
      { children }
    </ApplicationContext.Provider>
  );
}

export default ApplicationContext;