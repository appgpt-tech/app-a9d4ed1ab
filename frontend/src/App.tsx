//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { usersList, usersCreate, usersEdit } from './resources/users';
import {
  messagesList,
  messagesCreate,
  messagesEdit,
} from './resources/messages';
import {
  shortFilmsList,
  shortFilmsCreate,
  shortFilmsEdit,
} from './resources/shortFilms';
import {
  chatGroupsList,
  chatGroupsCreate,
  chatGroupsEdit,
} from './resources/chatGroups';
import usersIcon from '@mui/icons-material/Person';
import messagesIcon from '@mui/icons-material/Message';
import shortFilmsIcon from '@mui/icons-material/Movie';
import chatGroupsIcon from '@mui/icons-material/Group';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/a9d4ed1ab">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="users"
          options={{ label: 'Users' }}
          list={usersList}
          create={usersCreate}
          edit={usersEdit}
          recordRepresentation="secretPasscode"
          icon={usersIcon}
        />
        <Resource
          name="messages"
          options={{ label: 'Messages' }}
          list={messagesList}
          create={messagesCreate}
          edit={messagesEdit}
          recordRepresentation="messageContent"
          icon={messagesIcon}
        />
        <Resource
          name="shortFilms"
          options={{ label: 'Short Films' }}
          list={shortFilmsList}
          create={shortFilmsCreate}
          edit={shortFilmsEdit}
          recordRepresentation="title"
          icon={shortFilmsIcon}
        />
        <Resource
          name="chatGroups"
          options={{ label: 'Chat Groups' }}
          list={chatGroupsList}
          create={chatGroupsCreate}
          edit={chatGroupsEdit}
          recordRepresentation="groupName"
          icon={chatGroupsIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
