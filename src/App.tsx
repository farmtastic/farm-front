import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainPages from './page/MainPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPages />
    </QueryClientProvider>
  );
}

export default App;
