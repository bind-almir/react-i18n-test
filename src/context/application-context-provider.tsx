import { FC, createContext } from "react";
import { useTranslation } from "react-i18next";

interface ILanguage {
  code: string;
  nativeName: string;
}

interface AppContext {
  languages: Array<ILanguage>,
  selectedLanguage: ILanguage,
  switchLanguage: (language: ILanguage) => void;
}

interface InputProps {
	children: React.ReactElement;
}

const ApplicationContext = createContext<AppContext | null>(null);

export const ApplicationContextProvider: FC<InputProps> = (props: InputProps) => {
  
  const { children }  = props;
  const ctx: AppContext = {
    languages: [
      {
        code: "en-US",
        nativeName: "English"
      },
      {
        code: "fr-FR",
        nativeName: "French"
      }
    ],
    selectedLanguage: {
      code: "en-US",
      nativeName: "English"
    },
    switchLanguage: (language: ILanguage) => {
      ctx.selectedLanguage = language;
    }
  }

  return (
    <ApplicationContext.Provider value={ctx}>
      { children }
    </ApplicationContext.Provider>
  );
}

export default ApplicationContext;