import styles from './FloatingContact.module.css';

export default function FloatingContact() {
    return (
        <div className={styles.container}>
            <a href="https://lin.ee/T0tRLeC" target="_blank" className={`${styles.btn} ${styles.line}`} aria-label="Add Line">
                L
            </a>
            <a href="tel:0839892828" className={`${styles.btn} ${styles.phone}`} aria-label="Call Us">
                📞
            </a>
        </div>
    );
}
