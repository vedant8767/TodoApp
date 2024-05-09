import DisplayItem from "./DisplayItem";
import styles from './Todo.module.css'

export default function Todo({todolist,settodolist}){

    const sorted = todolist.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return(
        <div className={styles.todoitem}>
            {sorted.map((item)=><DisplayItem key={item.name} name={item.name} done={item.done} todolist={todolist} set={settodolist}></DisplayItem>)}
        </div>
        
    )
}