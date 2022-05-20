import { ToastContainer } from "react-toastify";
import NavBar from "./page/NavBar/NavBar";
import { QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()

const App = () => {

  return (
    <div className="px-10">
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
