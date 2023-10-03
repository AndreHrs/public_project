import { useState } from "react";

import AddInput from "./components/AddInput";
import Container from "./components/Container";
import Empty from "./components/Empty";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  const [addValue, setAddValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!addValue) {
      alert("Data must be filled");
      return;
    }

    setTodos([...todos, { title: addValue, count: 1 }]);
    setAddValue("");
  };

  const [todos, setTodos] = useState([
    { title: "Cheese", count: 1 },
    { title: "Milk", count: 2 },
    { title: "Eggs", count: 12 },
  ]);

  const handleDataAddition = (index) => {
    const temp = [...todos];
    temp[index].count += 1;
    setTodos(temp);
  };

  const handleDataSubstraction = (index) => {
    const temp = [...todos];
    if (temp[index].count > 0) {
      temp[index].count -= 1;
    } else {
      if (confirm(`Do you want to delete ${todos[index].title} from list?`)) {
        temp.splice(index, 1);
      }
    }
    setTodos(temp);
  };

  const getTotalCount = () => {
    return todos.reduce((total, todo) => {
      return total + todo.count;
    }, 0);
  };

  const handleDeleteAll = () => {
    if (confirm("Do you want to delete all items?")) {
      setTodos([]);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <AddInput
          onSubmit={handleOnSubmit}
          value={addValue}
          onChange={(e) => {
            setAddValue(e.target.value);
          }}
        />
        <Info
          todos={todos}
          getTotalCount={getTotalCount()}
          onDeleteAll={() => handleDeleteAll()}
        />

        {todos.length > 0 ? (
          <Todo
            todos={todos}
            handleAddition={handleDataAddition}
            handleSubstraction={handleDataSubstraction}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
