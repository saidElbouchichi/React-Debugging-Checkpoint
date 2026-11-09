import { useState } from 'react';

function Counter({ step = 1 }) {
  // BUG 1 corrigé : l'état était initialisé avec la chaîne "0" -> "01", "011"...
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Compteur : {count}</h2>
      {/* BUG 3 corrigé : setCount(count + step) appelé deux fois ne comptait qu'une fois.
          On utilise la forme fonctionnelle de la mise à jour. */}
      <button onClick={() => setCount((c) => c + step)}>+{step}</button>
      <button onClick={() => setCount((c) => c - step)}>-{step}</button>
      <button onClick={() => setCount(0)}>Réinitialiser</button>
    </section>
  );
}

export default Counter;
