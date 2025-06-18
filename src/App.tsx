// src/App.tsx

import FortuneWorldSchoolPage from './pages/Index';

// This is the main App component.
// We've removed the unnecessary React Router and other providers
// to simplify the project and fix the build issue on Lovable.dev.
// It now directly renders our single, beautiful landing page.
function App() {
  return <FortuneWorldSchoolPage />;
}

export default App;
