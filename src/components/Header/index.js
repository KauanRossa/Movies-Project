import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <span className={styles.span}>RossaFlix</span>
            <nav className={styles.nav}>
                <a href="#" className={styles.a}>Home</a>
                <a href="#" className={styles.a}>Assitir</a>
            </nav>
        </header>
    );
}

export default Header;
