import styles from './Dashboard.module.css';

export default function Dashboard() {
    // Premium Mock Data
    const stats = [
        { label: 'มูลค่าพอร์ตลงทุน', value: '฿128.5M', change: '+12.5%', isUp: true },
        { label: 'ผลตอบแทนเฉลี่ย (Yield)', value: '11.2%', change: '+0.8%', isUp: true },
        { label: 'เคสรออนุมัติ', value: '12', change: 'เร่งด่วน 3', isUp: false },
    ];

    const requests = [
        { id: 101, name: 'คุณวิชัย เจริญกุล', type: 'ที่ดินเปล่า (EEC)', location: 'ชลบุรี', amount: '25,000,000', status: 'pending', date: '05/02/2026' },
        { id: 102, name: 'บจก. สยามเรียลเอสเตท', type: 'โรงแรม 3 ดาว', location: 'ภูเก็ต', amount: '85,000,000', status: 'review', date: '04/02/2026' },
        { id: 103, name: 'คุณภิรมย์ สุขสวัสดิ์', type: 'บ้านเดี่ยว (Luxury)', location: 'บางนา', amount: '12,500,000', status: 'approved', date: '02/02/2026' },
        { id: 104, name: 'คุณสมชาย ใจดี', type: 'อาคารพาณิชย์', location: 'สยาม', amount: '45,000,000', status: 'rejected', date: '01/02/2026' },
    ];

    return (
        <div className={styles.dashboardContainer}>
            <header className={styles.topHeader}>
                <h1 className={styles.pageTitle}>Dashboard Overview</h1>
                <div className={styles.dateDisplay}>5 กุมภาพันธ์ 2026</div>
            </header>

            <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                        <div className={styles.statInfo}>
                            <p className={styles.statLabel}>{stat.label}</p>
                            <p className={styles.statValue}>{stat.value}</p>
                        </div>
                        <div className={`${styles.statChange} ${stat.isUp ? styles.up : styles.down}`}>
                            {stat.change}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>รายการขอสินเชื่อล่าสุด (Recent Requests)</h2>
                    <button className={styles.viewAllBtn}>ดูทั้งหมด</button>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Ref ID</th>
                                <th>วันที่</th>
                                <th>ผู้ยื่นคำขอ</th>
                                <th>ทรัพย์สิน</th>
                                <th>ทำเล</th>
                                <th>วงเงินประเมิน</th>
                                <th>สถานะ</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((req) => (
                                <tr key={req.id}>
                                    <td className={styles.refId}>#{req.id}</td>
                                    <td>{req.date}</td>
                                    <td className={styles.clientName}>{req.name}</td>
                                    <td>{req.type}</td>
                                    <td>{req.location}</td>
                                    <td className={styles.amount}>฿{req.amount}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[req.status]}`}>
                                            {req.status === 'pending' && 'รอตรวจสอบ'}
                                            {req.status === 'review' && 'กำลังพิจารณา'}
                                            {req.status === 'approved' && 'อนุมัติแล้ว'}
                                            {req.status === 'rejected' && 'ไม่อนุมัติ'}
                                        </span>
                                    </td>
                                    <td>
                                        <button className={styles.actionBtn}>ตรวจสอบ</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
