import styles from './Navbar.module.css'

export default function Navbar({complete,total}){
    return(
        <div className={styles.nav}>
            <span>Completed :{complete}</span>
            <span>Total :{total}</span>
        </div>
    )
}