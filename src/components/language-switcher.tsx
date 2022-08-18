import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ApplicationContext from '../context/application-context-provider';


const LanguageSwitcher: FC = () => {

  const ctx = useContext(ApplicationContext);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en-US');

  useEffect(() => {
    setLanguage(i18n.language);
  } , [i18n.language]);

  const handleLangaugeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    setLanguage(language);    
    ctx?.switchLanguage({
      code: language,
      nativeName: language
    });
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <label>{t('Select Language')}</label>
      <select value={language} onChange={handleLangaugeChange}>
        {
          ctx?.languages && ctx?.languages.map((language) => (
            <option key={language.code} value={language.code}>{language.nativeName}</option>
          ))
        }
      </select>        
    </div>
  );
}


export default LanguageSwitcher;