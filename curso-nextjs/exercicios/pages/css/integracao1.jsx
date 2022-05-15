import styles from './integracao1.module.css';

export default function integracao1() {
    return (
        <div id={styles.integracao}>
            <div className={styles.vermelha}>Texto #1</div>
            <div className={styles.azul}>Texto #2</div>
            <div className={styles.verde}>Texto #3</div>
        </div>
    )
}