import './App.css';
import { useTranslation } from 'react-i18next';
import { ApplicationContextProvider } from './context/application-context-provider';
import LanguageSwitcher from './components/language-switcher';

function App() {
  const { t } = useTranslation();
  return (
    <ApplicationContextProvider>
      <>
        <div>
          <LanguageSwitcher />
        </div>
        <div className="App">
          <p>{t('hello world')}</p>
          <p>{t('welcome.to', { location: 'Miami' })}</p>
        </div>

      </>
    </ApplicationContextProvider>
  );
}

export default App;
