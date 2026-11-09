import { useState } from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

// Application exemple déboguée avec React Developer Tools
function App() {
  const [user] = useState({ name: 'Said' });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 520, margin: '2rem auto' }}>
      <h1>Bonjour {user.name} 👋</h1>
      {/* BUG 2 corrigé : la prop "step" manquait, Counter recevait undefined */}
      <Counter step={1} />
      <TodoList />
    </div>
  );
}

export default App;
