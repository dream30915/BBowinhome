import Link from 'next/link';
import styles from './Dashboard.module.css';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2 className={styles.brand}>BBowin<span style={{ color: '#d97706' }}>Wealth</span></h2>
                </div>
                <nav className={styles.nav}>
                    <Link href="/dashboard" className={`${styles.navItem} ${styles.active}`}>
                        📊 ภาพรวม (Overview)
                    </Link>
                    <Link href="/dashboard/requests" className={styles.navItem}>
                        📝 คำขอใหม่ <span className={styles.badge}>3</span>
                    </Link>
                    <Link href="/dashboard/contracts" className={styles.navItem}>
                        📑 สัญญาที่ดูแล
                    </Link>
                    <Link href="/dashboard/customers" className={styles.navItem}>
                        👥 ข้อมูลลูกค้า
                    </Link>
                    <hr style={{ margin: '1rem 0', borderColor: 'rgba(255,255,255,0.1)' }} />
                    <Link href="/" className={styles.navItem}>
                        ⬅️ กลับหน้าหลัก
                    </Link>
                </nav>
                <div className={styles.userProfile}>
                    <div className={styles.avatar}>A</div>
                    <div className={styles.userInfo}>
                        <p className={styles.userName}>Admin Invest</p>
                        <p className={styles.userRole}>Super Admin</p>
                    </div>
                </div>
            </aside>
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
