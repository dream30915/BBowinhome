import styles from './Services.module.css';

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>โซลูชั่นทางการเงินครบวงจร</h2>
                    <p className={styles.subtitle}>
                        ยกระดับมาตรฐานการให้บริการขายฝากและจำนอง ด้วยความโปร่งใสและยุติธรรมสูงสุด <br />
                        เพื่อสภาพคล่องทางธุรกิจที่คุณมั่นใจ
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src="/icon-consignment-3d.png" alt="ขายฝาก" className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>สินเชื่อเพื่อเจ้าของกิจการ (ขายฝาก)</h3>
                        <p className={styles.cardDesc}>
                            เปลี่ยนสินทรัพย์เป็นเงินทุนหมุนเวียนธุรกิจทันที อนุมัติวงเงินสูงตามราคาประเมินจริง
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>อนุมัติวงเงินสูงสุด 70-80%</li>
                            <li className={styles.listItem}>รับเงินสดทันที ณ กรมที่ดิน</li>
                            <li className={styles.listItem}>ไม่ตรวจสอบเครดิตบูโร</li>
                        </ul>
                        <button className={styles.cardBtn}>รายละเอียดเพิ่มเติม</button>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src="/icon-mortgage-3d.png" alt="จำนอง" className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>สินเชื่ออเนกประสงค์ (จำนอง)</h3>
                        <p className={styles.cardDesc}>
                            เสริมสภาพคล่องระยะสั้นโดยไม่ต้องโอนกรรมสิทธิ์ ดอกเบี้ยแบบลดต้นลดดอก
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>วงเงิน 30-50% ของราคาตลาด</li>
                            <li className={styles.listItem}>ดอกเบี้ยต่ำพิเศษสำหรับวงเงินสูง</li>
                            <li className={styles.listItem}>ทำสัญญาถูกต้องตามกฎหมาย</li>
                        </ul>
                        <button className={styles.cardBtn}>รายละเอียดเพิ่มเติม</button>
                    </div>

                    <div className={`${styles.card} ${styles.highlightCard}`}>
                        <div className={styles.imageContainer}>
                            <div className={styles.gemIcon}>💎</div>
                        </div>
                        <h3 className={styles.cardTitle}>Private Wealth Investment</h3>
                        <p className={styles.cardDesc}>
                            บริการบริหารพอร์ตลงทุนอสังหาริมทรัพย์สำหรับนักลงทุน High Net Worth
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Yield 9-15% ต่อปี (การันตีโฉนด)</li>
                            <li className={styles.listItem}>คัดกรองทรัพย์เกรด A+ (Prime Location)</li>
                            <li className={styles.listItem}>ทีมกฎหมายดูแลสัญญาอย่างรัดกุม</li>
                        </ul>
                        <button className={`${styles.cardBtn} ${styles.goldBtn}`}>ติดต่อฝ่ายลงทุน</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
