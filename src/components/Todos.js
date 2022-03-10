import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };


  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  console.log(props);
  return (
    <div className="addTodos">
      <input type="text" onChange={handleChange} className="todo-input" value={todo} />
      <button className="add-btn" onClick={() => add()}>
        Add
      </button>
      <br />
      
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

// () =>
//           props.addTodo({
//             id: Math.floor(Math.random() * 10000),
//             item: todo,
//             completed: false,
//           })
