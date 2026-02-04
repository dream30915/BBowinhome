import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>นวัตกรรมการเงิน</span> เพื่ออสังหาริมทรัพย์<br />
                        ที่คุณวางใจได้ 100%
                    </h1>
                    <p className={styles.subtitle}>
                        BBowinhome ให้บริการจำนองและขายฝากด้วยมาตรฐานระดับสากล
                        อนุมัติวงเงินสูง ดอกเบี้ยเป็นธรรม ถูกต้องตามกฎหมายทุกขั้นตอน
                        เปลี่ยนสินทรัพย์ให้เป็นสภาพคล่องได้อย่างมั่นใจ
                    </p>
                    <div className={styles.ctaGroup}>
                        <a href="#assessment" className={styles.primaryBtn}>ประเมินวงเงินฟรี</a>
                        <a href="#contact" className={styles.secondaryBtn}>ปรึกษาผู้เชี่ยวชาญ</a>
                    </div>
                </div>

                <div className={styles.imageWrapper} style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                    <img src="/banner-main.jpg" alt="รับจำนอง ขายฝาก" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '20px', boxShadow: '0 20px 40px -5px rgba(0,0,0,0.2)' }} />
                </div>
            </div>
        </section>
    );
}
