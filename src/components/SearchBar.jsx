import { useState } from "react"
import DisplayItem from "./DisplayItem"
import styles from './SearchBar.module.css'
import Todo from "./Todo"
import Navbar from "./Navbar"

export default  function SearchItem(){

    const [todoitem,settodoitem] = useState({name:"",done:false})
    const [todolist,settodolist] = useState([])

    const complete = todolist.filter((item)=>item.done).length
    const total = todolist.length

    function add(e){
        e.preventDefault()
        // console.log(todoitem.name)
        settodolist([...todolist,todoitem])
        settodoitem({name:"",done:false})
    }

    return(
        <div className={styles.formclass}>
            <form  onSubmit={add}>
                <input  className={styles.inputclass} onChange={(e)=>settodoitem({name:e.target.value,done:false})} value={todoitem.name} type="text" placeholder="Enter Todo" />
                <button className={styles.buttonclass} type="submit">add</button>
            </form>
            <Todo todolist={todolist} settodolist={settodolist}/>
            <Navbar complete={complete} total={total}/>
        </div>
    )
}