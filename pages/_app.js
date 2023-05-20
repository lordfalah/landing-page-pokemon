import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
// import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
