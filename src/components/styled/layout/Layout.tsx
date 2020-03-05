import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/theme';

interface P {
  children: React.ReactNode;
}

const Layout: React.FC<P> = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <main className="MainApp">
        {children}
      </main>
    </ThemeProvider>
  </>
);
export default Layout;
