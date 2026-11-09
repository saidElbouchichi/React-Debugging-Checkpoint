# Checkpoint Debugging React — GOMYCODE

Petite application React (compteur + liste de tâches) déboguée avec **React Developer Tools**.

## Processus de débogage

1. Installation de l'extension React Developer Tools (Chrome / Firefox).
2. Ouverture de l'onglet **Components** pour inspecter l'arbre `App > Counter`, `App > TodoList`.
3. Inspection des **props** et des **hooks (state)** de chaque composant, et lecture de la console.
4. Correction des problèmes, puis nouvelle vérification dans DevTools.

## Problèmes trouvés et solutions

| # | Composant | Symptôme observé dans DevTools | Cause | Solution |
|---|-----------|--------------------------------|-------|----------|
| 1 | Counter | `State: "0"` puis `"01"`, `"011"` | état initialisé avec une chaîne | `useState(0)` |
| 2 | Counter | `props.step = undefined`, affichage `+NaN` | prop non transmise par `App` | `<Counter step={1} />` + valeur par défaut |
| 3 | Counter | un double appel n'incrémente qu'une fois | mise à jour basée sur une valeur périmée | `setCount(c => c + step)` |
| 4 | TodoList | le state contient la tâche mais l'UI ne change pas | mutation avec `todos.push` | nouveau tableau `[...todos, nouvelle]` |
| 5 | TodoList | champ texte impossible à modifier | `value` sans `onChange` | ajout de `onChange` |
| 6 | TodoList | avertissement « each child should have a unique key » | `key` manquante dans `map` | `key={t.id}` |

## Vérification

Après correction : le compteur affiche des nombres, les tâches s'ajoutent, se barrent au clic, et la console ne contient plus d'avertissement.

```bash
npm install
npm start
```
