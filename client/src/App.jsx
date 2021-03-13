import { TodoList } from "@/TodoList/TodoList";
import { Route } from "react-router-dom";
import { Login } from "@/Login/Login";
import { Layout } from "@/Layout/Layout";
import { TodoModal } from "@/TodoModal/TodoModal";
import { useState } from "react";
import { TodoForm } from "@/TodoForm/TodoForm";

const AddTodo = ({ setShowModal }) => (
  <button
    className="border-green-300 border-2 rounded px-4 py-2 hover:bg-green-300 transition-all uppercase w-40 mx-auto"
    onClick={() => setShowModal(true)}
  >
    Add todo
  </button>
);

const Home = () => {
  const [editState, setEditState] = useState({
    isEdit: false,
    title: "",
    description: "",
    todoId: null,
  });

  const [showModal, setShowModal] = useState(false);

  const handleUpdateModal = (todoId) => {
    setShowModal(true);
    setEditState({ ...editState, isEdit: true, todoId });
  };

  const cancelEditMode = () =>
    setEditState({ isEdit: false, title: "", description: "", todoId: null });

  return (
    <>
      <TodoModal showModal={showModal}>
        <TodoForm
          closeModal={() => setShowModal(false)}
          {...editState}
          cancelEditMode={cancelEditMode}
        />
      </TodoModal>
      <AddTodo setShowModal={setShowModal} />
      <TodoList handleShowModal={handleUpdateModal} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Layout>
    </div>
  );
}

export default App;
