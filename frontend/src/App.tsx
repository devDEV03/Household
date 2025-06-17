import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login'
import { createTheme, ThemeProvider } from '@mui/material'
import ExpensePage from './pages/expensePage/index';
import PageWrapper from './components/PageWrapper';

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
