import { useState } from "react"; // 1. Här ska ert useState bo!
function App() {
  const [todos, setTodos] = useState([
    "Koka kaffe",
    "Träna",
    "Gå ut med hunden",
  ]);

  function clearList() {
    setTodos([]);
  }

  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleClear() {
    setDraft("");
  }

  function handleAdd() {
    const text = draft.trim();

    if (text === "") {
      return;
    } else setTodos([...todos, text]);
    setDraft("");
  }

  function handleRemove(textToRemove) {
    const kvar = todos.filter(function (todo) {
      return todo !== textToRemove;
    });
    setTodos(kvar);
  }

  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>
      {/*TODO: Detta skalar inte - behövs en loop*/}
      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            {todo}
            <button type="button" onClick={() => handleRemove(todo)}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>
      {/* <li>{todos[99]}</li>    // Visar en tom punkt i listan, sidan kraschas inte.*/}

      <input
        type="text"
        value={draft}
        onChange={handleChange}
        placeholder="Skriv uppgift..."
      />
      <p>Kladd just nu: {draft}</p>
      <button type="button" onClick={handleClear}>
        Rensa
      </button>
      <button type="button" onClick={handleAdd}>
        Lägg till
      </button>

      <button type="button" onClick={clearList}>
        Rensa hela listan
      </button>
    </main>
  );
}

export default App;

// Egen kommentar: Hakparenteserna används för att göra en array destructuring i JavaScript,
// vilket packar upp de två värden som useState returnerar: själva tillståndsvärdet och funktionen
//  för att uppdatera det (vilket krävs för att React ska förstå när skärmen behöver ritas om, till
//  skillnad från en vanlig let-variabel).
