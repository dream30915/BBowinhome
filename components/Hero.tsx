import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>BBowinhome</span><br />
                        ขายบ้านมือสองรีโนเวทและบ้านเช่า <br />ใกล้นิคมบ่อวิน-ปลวกแดง
                    </h1>
                    <p className={styles.subtitle}>
                        รับซื้อ-ขายฝาก-จำนำ บ้าน คอนโด ที่ดิน <br />
                        เงินสด ด่วน ปิดไว | แก้ปัญหาสภาพคล่อง
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', fontSize: '0.95rem', color: '#64748b', fontWeight: 500 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ อนุมัติไว</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ ถูกกฎหมาย</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ ราคายุติธรรม</span>
                    </div>
                    <div className={styles.ctaGroup}>
                        <a href="#assessment" className={styles.primaryBtn}>ประเมินวงเงินสินทรัพย์</a>
                        <a href="#contact" className={styles.secondaryBtn}>ปรึกษาผู้เชี่ยวชาญ</a>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageOverlay} />
                    <img src="/banner-main.jpg" alt="Premium Real Estate Investment" className={styles.heroImage} />
                </div>
            </div>
        </section>
    );
}
