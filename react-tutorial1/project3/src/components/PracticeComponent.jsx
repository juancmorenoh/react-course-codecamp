import {useState} from 'react'
import CardEmployee from './CardEmployee'
import Count from './Count'
import './PracticeComponent.css'

function PracticeComponent() {
  const [answer , setAnswer] = useState(true)
  const [count,setCount] = useState(0) 
  const [thingsToDo,setthingsToDo] = useState([])
  const [show, setShow] = useState(false)
  const [messages, setMessages] = useState(['a','b'])

  function toggleShow(){
    setShow(!show)
  }
  //TOOGLE
  function addToDo(){
    setthingsToDo((prevList) => [...prevList, "Test"])
  }
  const handleAnswer = () => {
    setAnswer(!answer)
  }

  const handleAdd = () =>{
    setCount(prevCount => prevCount +1)
  }
  const handleRemove = () =>{
    setCount(prevCount => prevCount - 1)
  }


  //CARD
  const employees =[
    {
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (212) 555-1212",
      email: "itsmyrealname@example.com",
      isFavourite: false
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      phone: "+1 (212) 555-1234",
      email: "janesmith@example.com",
      isFavourite: true
    }
  ]

  return (
    <>
      <div>
        <h2>TOGGLE</h2>
        <p>Is useState Important?</p>
        <button className='answer' onClick={handleAnswer}>{answer? "Yes" : "No"}</button>
      </div>
      <hr />
      <div>
        <h2>COUNTER</h2>
        <Count number={count}></Count>
        <button className='answer' onClick={handleRemove}>-</button>
        <button className='answer' onClick={handleAdd}>+</button>
      </div>
      <hr />
      <div>
        <h2>LIST</h2>
        <button onClick={addToDo}>Add Item</button>
        <ul>
          {thingsToDo.map((thing,index)=>{
            return <li key={index}>{thing}</li>
          })}
        </ul>
      </div>
      <hr />
      <div>
        <h2>CARDS</h2>
          {employees.map((employee,index) =>{
            return <CardEmployee 
              key={index} 
              element={employee}>
            </CardEmployee>
          })}
      </div>
      <hr />
      <div>
        <h1>DISPLAY</h1>
        <button onClick={toggleShow}>Press to { show ? "Hide" : "Show"}</button>
        { show ? <h1>show or no show?</h1> : null}
      </div>

      <div>
        {messages.length === 0 ? <p>You are all caught up!</p>: <p>You have {messages.length} message</p>}
        
      </div>
    </>
  )
}

export default PracticeComponent
