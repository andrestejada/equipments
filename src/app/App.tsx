import  React , {useState}from 'react';
import { AppRouter } from 'app/AppRouter';
import { GlobalErrorBoundary } from './core/errors/GlobalErrorBoundary';
import { Provider } from 'react-redux';
import { ThemeCustomProvider } from './themes/ThemeProvider';
import store from 'app/core/redux/store';

function App() {
  
  return (
    <GlobalErrorBoundary>
      <Provider store={store}>
        <ThemeCustomProvider>
          
          <AppRouter />
        </ThemeCustomProvider>
      </Provider>
    </GlobalErrorBoundary>
  );
}

export default App;
