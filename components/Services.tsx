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
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Home className={styles.icon} size={48} />
                        </div>
                        <h3 className={styles.cardTitle}>ขายบ้านมือสองรีโนเวท</h3>
                        <p className={styles.cardDesc}>
                            บ้านสวย สภาพดี รีโนเวทใหม่ทั้งหลัง พร้อมเข้าอยู่ ใกล้นิคมฯ
                        </p>
                        <button className={styles.cardBtn}>ดูรายการบ้าน</button>
                    </div>

                    {/* Card 2: Houses for Rent */}
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Key className={styles.icon} size={48} />
                        </div>
                        <h3 className={styles.cardTitle}>บ้านเช่าพร้อมอยู่</h3>
                        <p className={styles.cardDesc}>
                            มีบ้านเช่าในโซนบ่อวิน เฟอร์นิเจอร์ครบ หิ้วกระเป๋าเข้าอยู่ได้เลย
                        </p>
                        <button className={styles.cardBtn}>ดูบ้านเช่า</button>
                    </div>

                    {/* Card 3: Buy Property */}
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Banknote className={styles.icon} size={48} />
                        </div>
                        <h3 className={styles.cardTitle}>รับซื้อ บ้าน-คอนโด-ที่ดิน</h3>
                        <p className={styles.cardDesc}>
                            รับซื้อเงินสด ด่วน ปิดไว ให้ราคายุติธรรม
                        </p>
                        <button className={styles.cardBtn}>เสนอขายทรัพย์</button>
                    </div>

                    {/* Card 4: Pawn / Consignment */}
                    <div className={`${styles.card} ${styles.highlightCard}`}>
                        <div className={styles.imageContainer}>
                            <Landmark className={styles.icon} size={48} />
                        </div>
                        <h3 className={styles.cardTitle}>รับจำนำ / ขายฝาก</h3>
                        <p className={styles.cardDesc}>
                            เปลี่ยนโฉนดเป็นเงินสด เสริมสภาพคล่อง อนุมัติไว ดอกเบี้ยตามกฎหมาย
                        </p>
                        <button className={`${styles.cardBtn} ${styles.goldBtn}`}>ประเมินวงเงิน</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
