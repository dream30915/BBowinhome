import styles from './Services.module.css';
import { Home, Key, Banknote, Landmark } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>บริการของเรา</h2>
                    <p className={styles.subtitle}>
                        ครบวงจรเรื่องบ้านและที่ดิน ในโซนบ่อวิน-ปลวกแดง
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Card 1: Sell Renovated Homes */}
                    <a href="https://lin.ee/T0tRLeC" target="_blank" className={styles.card} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <div className={styles.imageContainer}>
                            <Home className={styles.icon} size={48} />
                        </div>
                        <h3 className={styles.cardTitle}>ขายบ้านมือสองรีโนเวท</h3>
                        <p className={styles.cardDesc}>
                            บ้านสวย สภาพดี รีโนเวทใหม่ทั้งหลัง พร้อมเข้าอยู่ ใกล้นิคมฯ
                        </p>
                        <span className={styles.cardBtn}>ดูรายการบ้าน</span>
                    </a>

                    {/* Card 2: Houses for Rent */}
                    <a href="https://lin.ee/T0tRLeC" target="_blank" className={styles.card} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <div className={styles.imageContainer}>
                            <Key className={styles.icon} size={48} />
                        </div>
                        <h3 className={styles.cardTitle}>บ้านเช่าพร้อมอยู่</h3>
                        <p className={styles.cardDesc}>
                            มีบ้านเช่าในโซนบ่อวิน เฟอร์นิเจอร์ครบ หิ้วกระเป๋าเข้าอยู่ได้เลย
                        </p>
                        <span className={styles.cardBtn}>ดูบ้านเช่า</span>
                    </a>

                    {/* Card 3: Buy Property */}
                    <a href="https://lin.ee/T0tRLeC" target="_blank" className={styles.card} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <div className={styles.imageContainer}>
                            <Banknote className={styles.icon} size={48} />
                        </div>
                        <h3 className={styles.cardTitle}>รับซื้อ บ้าน-คอนโด-ที่ดิน</h3>
                        <p className={styles.cardDesc}>
                            รับซื้อเงินสด ด่วน ปิดไว ให้ราคายุติธรรม
                        </p>
                        <span className={styles.cardBtn}>เสนอขายทรัพย์</span>
                    </a>

                    {/* Card 4: Pawn / Consignment */}
                    <a href="https://lin.ee/T0tRLeC" target="_blank" className={`${styles.card} ${styles.highlightCard}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                        <div className={styles.imageContainer}>
                            <Landmark className={styles.icon} size={48} />
                        </div>
                        <h3 className={styles.cardTitle}>รับจำนำ / ขายฝาก</h3>
                        <p className={styles.cardDesc}>
                            เปลี่ยนโฉนดเป็นเงินสด เสริมสภาพคล่อง อนุมัติไว ดอกเบี้ยตามกฎหมาย
                        </p>
                        <span className={`${styles.cardBtn} ${styles.goldBtn}`}>ประเมินวงเงิน</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
