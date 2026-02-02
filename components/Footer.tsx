import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>BBowinhome</h2>
                        <p className={styles.brandDesc}>
                            บริการรับจำนอง ขายฝาก อสังหาริมทรัพย์ทุกประเภท วงเงินสูง อนุมัติไว ถูกต้องตามกฎหมาย
                            ด้วยประสบการณ์กว่า 10 ปี มั่นใจได้ในความปลอดภัยและบริการที่เป็นธรรม
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h3 className={styles.heading}>เมนูลัด</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}><Link href="/" className={styles.link}>หน้าแรก</Link></li>
                            <li className={styles.linkItem}><Link href="#services" className={styles.link}>บริการของเรา</Link></li>
                            <li className={styles.linkItem}><Link href="#contact" className={styles.link}>ประเมินราคา</Link></li>
                            <li className={styles.linkItem}><Link href="/dashboard" className={styles.link}>สำหรับเจ้าหน้าที่ (Admin)</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h3 className={styles.heading}>ติดต่อเรา</h3>
                        <div className={styles.contactInfo}>
                            <p>📍 123 อาคารแคปปิตอล ชั้น 5 เขตจตุจักร กทม.</p>
                            <p>📞 08x-xxx-xxxx</p>
                            <p>💬 Line: @bowinhome</p>
                            <p>⏰ เปิดทำการ: 08:30 - 18:00 น.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; 2026 BBowinhome. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
