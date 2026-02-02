import Link from 'next/link';
import styles from './Dashboard.module.css';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
    // Mock Data
    const requests = [
        { id: 1, name: 'คุณวิชัย', type: 'ที่ดินเปล่า', size: '2 ไร่', amount: '2,000,000', status: 'pending', date: '02/02/2026' },
        { id: 2, name: 'คุณสมศักดิ์', type: 'บ้านเดี่ยว', size: '60 ตร.ว.', amount: '5,000,000', status: 'approved', date: '01/02/2026' },
        { id: 3, name: 'คุณมานี', type: 'คอนโด', size: '35 ตร.ม.', amount: '1,500,000', status: 'pending', date: '02/02/2026' },
    ];

    return (
        <>
            <Navbar />
            <div className={styles.dashboard}>
                <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>แผงควบคุม (Owner)</h1>
                        <div className="btn btn-primary" style={{ cursor: 'default' }}>Admin Mode</div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={`${styles.statCard} ${styles.gold}`}>
                            <div className={styles.statValue}>12</div>
                            <div className={styles.statLabel}>รอตรวจสอบ</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue}>54</div>
                            <div className={styles.statLabel}>อนุมัติเดือนนี้</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statValue}>฿12M</div>
                            <div className={styles.statLabel}>ยอดวงเงินรวม</div>
                        </div>
                    </div>

                    <div className={styles.tableSection}>
                        <h2 className={styles.tableHeader}>รายการขอประเมินล่าสุด</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>วันที่</th>
                                    <th>ชื่อผู้ติดต่อ</th>
                                    <th>ทรัพย์สิน</th>
                                    <th>ขนาด</th>
                                    <th>วงเงิน (บาท)</th>
                                    <th>สถานะ</th>
                                    <th>จัดการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((req) => (
                                    <tr key={req.id}>
                                        <td>{req.date}</td>
                                        <td>{req.name}</td>
                                        <td>{req.type}</td>
                                        <td>{req.size}</td>
                                        <td>{req.amount}</td>
                                        <td>
                                            <span className={`${styles.status} ${req.status === 'pending' ? styles.pending : styles.approved}`}>
                                                {req.status === 'pending' ? 'รอตรวจสอบ' : 'อนุมัติแล้ว'}
                                            </span>
                                        </td>
                                        <td>
                                            <button style={{ border: 'none', background: 'none', color: '#0f172a', fontWeight: 'bold', cursor: 'pointer' }}>
                                                ดูรายละเอียด
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
