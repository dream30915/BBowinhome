import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    BBowinhome
                </Link>
                <div className={styles.links}>
                    <Link href="#services" className={styles.link}>บริการของเรา</Link>
                    <Link href="#process" className={styles.link}>ขั้นตอนการทำธุรกรรม</Link>
                    <Link href="#about" className={styles.link}>เกี่ยวกับเรา</Link>
                    <Link href="#contact" className="btn btn-primary">ติดต่อประเมินราคา</Link>
                </div>
            </div>
        </nav>
    );
}
