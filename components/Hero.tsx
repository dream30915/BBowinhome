import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>BBowinhome</span><br />
                        ขายบ้านมือสองราคาถูก โซนบ่อวิน ใกล้นิคมฯ
                    </h1>
                    <p className={styles.subtitle}>
                        คนทำงานผ่อนสบาย ดูแลสินเชื่อให้จบ <br />
                        <span style={{ fontSize: '0.9em', opacity: 0.9 }}>นัดดูบ้าน/ประเมินราคาฟรี ได้ทุกวัน | Viewings & Free Valuation Daily</span>
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', fontSize: '0.95rem', color: '#64748b', fontWeight: 500 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ อนุมัติไว</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ ถูกกฎหมาย</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ ราคายุติธรรม</span>
                    </div>
                    <div className={styles.ctaGroup}>
                        <a href="tel:0839892828" className={styles.primaryBtn}>👉 โทรตอนนี้ | Call Now</a>
                        <a href="https://lin.ee/T0tRLeC" target="_blank" className={styles.secondaryBtn}>👉 แอดไลน์ | Add LINE</a>
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
