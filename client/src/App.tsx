import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from './components/AppRouter.tsx'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return(
    <>
      <ToastContainer />
      <AppRouter />
    </>
  )
}

export default App
