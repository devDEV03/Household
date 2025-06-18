import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login'
import { createTheme, ThemeProvider } from '@mui/material'
import ExpensePage from './pages/expensePage/index';
import PageWrapper from './components/PageWrapper';
import TimelinePage from './pages/timelinePage';
import StatsPage from './pages/statsPage';

function App() {

const theme = createTheme({
  typography: {
    fontFamily: '"Josefin Sans", sans-serif',
  },
});

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <PageWrapper><ExpensePage /></PageWrapper>
  },
  {
    path : "/login",
    element : <LoginPage />
  },
  {
    path : "/timeline",
    element : <PageWrapper><TimelinePage /></PageWrapper>
  },
  {
    path : "/stats",
    element : <PageWrapper><StatsPage /></PageWrapper>
  }

])


  return (
    <>
    <ThemeProvider theme={theme}>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
    </>
  )
}

export default App
