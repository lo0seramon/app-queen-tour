import styles from './style.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/" alt="logo" />
                <nav>
                    <a className={styles.active}>Início</a>
                    <a>Quem somos</a>
                    <a>Viagens</a>
                    <a>Fale Conosco</a>
                </nav>
            </div>
        </header>
    )
}