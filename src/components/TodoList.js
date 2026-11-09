import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    // BUG 4 corrigé : todos.push(...) mutait l'état, la liste ne se re-rendait pas.
    setTodos([...todos, { id: Date.now(), text: text.trim(), done: false }]);
    setText('');
  };

  const toggle = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <section>
      <h2>Tâches</h2>
      <form onSubmit={addTodo}>
        {/* BUG 5 corrigé : l'input n'avait pas de onChange (champ bloqué en lecture seule) */}
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nouvelle tâche" />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {/* BUG 6 corrigé : la prop "key" manquait (avertissement dans la console) */}
        {todos.map((t) => (
          <li
            key={t.id}
            onClick={() => toggle(t.id)}
            style={{ textDecoration: t.done ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
