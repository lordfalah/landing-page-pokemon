import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import "../styles/loaders.css";
function MyApp({ Component }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
}

export default MyApp;
