import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function Language() {
  const { t, i18n } = useTranslation(); // Use the `t` function to get translations
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <div className="App">
      <header>
        <h1>{t('welcome')}</h1>
        <button onClick={() => handleLanguageChange(currentLang === 'en' ? 'es' : 'en')}>
          {t('languageSwitch')}
        </button>
      </header>

      <section>
        <p>{t('article')}</p>
      </section>
    </div>
  );
}

export default Language;
