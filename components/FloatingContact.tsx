import styles from './FloatingContact.module.css';

export default function FloatingContact() {
    return (
        <div className={styles.container}>
            <a href="https://line.me/ti/p/~example" target="_blank" className={`${styles.btn} ${styles.line}`} aria-label="Add Line">
                L
            </a>
            <a href="tel:0812345678" className={`${styles.btn} ${styles.phone}`} aria-label="Call Us">
                📞
            </a>
        </div>
    );
}
