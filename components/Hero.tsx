import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        รับจำนอง ขายฝาก <br />
                        <span className={styles.highlight}>ให้วงเงินสูง</span> อนุมัติไว
                    </h1>
                    <p className={styles.subtitle}>
                        เปลี่ยนโฉนดให้เป็นเงินทุนหมุนเวียน ดอกเบี้ยต่ำถูกกฎหมาย ไม่เช็คเครดิตบูโร
                        อนุมัติภายใน 1 วัน รับเงินทันที ณ กรมที่ดิน
                        บริการสุภาพ ตรงไปตรงมา
                    </p>
                    <div className={styles.actions}>
                        <Link href="#contact" className="btn btn-primary">
                            ประเมินราคาฟรี
                        </Link>
                        <Link href="#services" className="btn" style={{ background: 'white', border: '1px solid #cbd5e1' }}>
                            ดูอัตราดอกเบี้ย
                        </Link>
                    </div>
                </div>

                <div className={styles.imageWrapper} style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                    <img src="/banner-main.jpg" alt="รับจำนอง ขายฝาก" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '20px', boxShadow: '0 20px 40px -5px rgba(0,0,0,0.2)' }} />
                </div>
            </div>
        </section>
    );
}
