import styles from './DisplayItem.module.css'

export default  function DisplayItem({name,done,todolist,set}){

    function remove(name){
        // console.log("delete is call")
        // console.log("name"+name)
        // console.log(todolist)
        set(todolist.filter((item)=>item.name !=name))
        // console.log(todolist)
    }

    function mark(name){
        const newlist = todolist.map((item)=>item.name==name ? {...item,done:!item.done}:item)
        set(newlist)
    }

    const className = done ? styles.completed : ""
    return(
        <div className={styles.itemconfig}>
            <span className={className}  key={name}  onClick={()=>mark(name)}>{name} {done} </span>
            <span className={styles.cancle}>
                <button onClick={()=>remove(name)}> x </button>
            </span>
            {console.log(todolist)}
        </div>

    )
}