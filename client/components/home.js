import React, { useState } from 'react'
import Head from './head'
// import wave from '../assets/images/wave.jpg'
/*
Клиентские Роуты
/:category

Выводит список задач с /api/v1/tasks/:category . Чтобы получить задачи используйте useEffect

Должна быть кнопка перехода в следующее состояние

если статус задачи new - то кнопка нразывается in progress и переводит в статус in progress

если статус задачи in progress - то будет 2 кнопки
-- называется blocked и переводит в статус blocked
-- называется done и переводит в статус done

если статус задачи blocked - то будет кнопка
-- называется blocked и переводит в статус in progress

Под списком и над списком задач будет поле ввода и кнопка(компонент) - добавление новой задачи в список задач(надо отправить (POST /api/v1/tasks/:category),
после нажатии на кнопку - должен обновиться и файл на сервере и добавиться задача на клиенте

Каждая строка задач - должна иметь кнопку редактировать, которая переключает из текста - текст задачи в поле вводаи кнопка меняет название на сохранить.
При нажатии на кнопку обновляется запись в строке и текст задания на сервере(PATCH /api/v1/tasks/:category)

Вверху страницы - должны быть четыре кнопки Все/ День/ Неделя/ Месяц, которые переходят на соотвествующие роутыё /:category /:category/day /:category/week /:category/month.
При переходе на эти роуты данные запрашиваются с соответствующих роутов(/api/v1/tasks/:category/:timespan)
*/
const Home = () => {
  const [counter, setCounterNew] = useState(0)

  return (
    <div>
      <Head title="Hello" />
      <img alt="wave" src="images/wave.jpg" />
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
