import styles from './jsx2.module.css'

export default function jsx2(){
    const content = (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Hello Nextjs!</h1>
        <h2>JSX #2</h2>
    </div>
    );
    return content;
}