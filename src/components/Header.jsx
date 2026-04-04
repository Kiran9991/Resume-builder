import styles from './Header.module.css';

function Header() {
    return (<>
    <nav className={styles.nav}>
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h3>Resume builder</h3>
            </div>
            <div className={styles.rightContainer}>
                <button>
                    Logout
                </button>
            </div>
        </div>
    </nav>
    </>);
}

export default Header;