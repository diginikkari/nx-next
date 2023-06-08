import NxWelcome from './nx-welcome';
import { rest } from 'msw';

export function App() {
  return (
    <div>
      <NxWelcome title="my-app" />
    </div>
  );
}

export default App;
