import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTodoWithId } from './todos'

const mapDispatch = {
  addTodo: addTodoWithId,
}

const AddTodo = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const onSubmitClicked = (e) => {
    e.preventDefault();
    if(!inputText.trim()) {
      return;
    }

    addTodo(inputText);
    setInputText("");
  }

  const onTextChanged = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmitClicked}>
        <input value={inputText} onChange={onTextChanged} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect(null, mapDispatch)(AddTodo)