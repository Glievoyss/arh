import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { AuthProvider } from 'contexts/auth-context';
import { ContentProvider } from 'contexts/content-context';
import { apiInit } from './utils/apiClient';
import i18nConfigure from './utils/i18n';

import Layout from './components/Layout/Layout';

import classes from './App.module.scss';

apiInit();

function App() {
  return (
    <div className={classes.app}>
      <AuthProvider>
        <I18nextProvider
          i18n={i18nConfigure({
            loadPath: '/translations/{{lng}}/{{ns}}.json'
          })}
        >
          <BrowserRouter>
            <ContentProvider>
              <Layout />
            </ContentProvider>
          </BrowserRouter>
        </I18nextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
