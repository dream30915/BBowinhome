import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>เอกสิทธิ์ทางการเงิน</span><br />
                        เพื่ออสังหาริมทรัพย์ระดับพรีเมียม
                    </h1>
                    <p className={styles.subtitle}>
                        พันธมิตรที่ปรึกษาด้านการลงทุนขายฝากและจำนองอสังหาริมทรัพย์ <br />
                        เชื่อมโยงโอกาสทางการเงินด้วยมาตรฐานระดับสากล โปร่งใส และถูกต้องตามกฎหมาย
                    </p>
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
