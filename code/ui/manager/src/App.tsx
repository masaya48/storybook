import type { ComponentProps, FC } from 'react';
import React, { useMemo } from 'react';

import { Route } from '@storybook/router';

import { Global, createGlobal } from '@storybook/theming';
import { Symbols } from '@storybook/components';
import Sidebar from './container/Sidebar';
import Preview from './container/Preview';
import Panel from './container/Panel';
import Notifications from './container/Notifications';

import SettingsPages from './settings';
import { Layout } from './components/layout/Layout';
import { usePersistence } from './components/layout/Layout.persistence';

type Props = ComponentProps<typeof Layout>['state'] & {
  updater: ComponentProps<typeof Layout>['setState'];
};

export const App = ({ updater, ...state }: Props) => {
  const props = useMemo(
    () => ({
      Sidebar,
      Preview,
      Panel,
      Notifications,
      pages: [
        {
          key: 'settings',
          render: () => <SettingsPages />,
          route: (({ children }) => (
            <Route path="/settings/" startsWith>
              {children}
            </Route>
          )) as FC,
        },
      ],
    }),
    []
  );

  return (
    <>
      <Global styles={createGlobal} />
      <Symbols icons={['folder', 'component', 'document', 'bookmarkhollow']} />
      <Layout
        persistence={usePersistence()}
        state={state}
        setState={updater}
        slotMain={<Preview />}
        slotSidebar={<Sidebar />}
        slotPanel={<Panel />}
        slotCustom={props.pages.map(({ key, route: RouteX, render: Content }) => (
          <RouteX key={key}>
            <Content />
          </RouteX>
        ))}
      />
    </>
  );
};