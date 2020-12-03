// Под списком и над списком задач будет поле ввода и кнопка(компонент) - добавление новой задачи в список задач(надо отправить (POST /api/v1/tasks/:category),
// после нажатии на кнопку - должен обновиться и файл на сервере и добавиться задача на клиенте
// Каждая строка задач - должна иметь кнопку редактировать, которая переключает из текста - текст задачи в поле вводаи кнопка меняет название на сохранить.
// При нажатии на кнопку обновляется запись в строке и текст задания на сервере(PATCH /api/v1/tasks/:category)

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/reducers/tasks'

const NewTask = (props) => {
  const { category } = props
  const [title, setTitle] = useState()
  const dispatch = useDispatch()
  const onChange = (e) => {
    setTitle(e.target.value)
  }
  const onClick = () => dispatch(addTask(category, title))

  return (
    <div>
      <input className="text-black" type="text" value={title} onChange={onChange} />
      <button type="button" onClick={onClick}>
        Add
      </button>
    </div>
  )
}

NewTask.propTypes = {}

export default React.memo(NewTask)
