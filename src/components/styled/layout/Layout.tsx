/* eslint-disable import/extensions */
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/theme';
import Navbar from './navbar/Navbar';

interface P {
  children: React.ReactNode;
}

const Layout: React.FC<P> = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <main className="MainApp">
        {children}
      </main>
    </ThemeProvider>
  </>
);
export default Layout;
