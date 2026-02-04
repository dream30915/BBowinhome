import styles from './Services.module.css';

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>โซลูชั่นทางการเงินครบวงจร</h2>
                    <p className={styles.subtitle}>
                        ยกระดับมาตรฐานการให้บริการขายฝากและจำนอง ด้วยความโปร่งใสและยุติธรรมสูงสุด
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src="/icon-consignment-3d.png" alt="ขายฝาก" style={{ width: '120px', height: '120px' }} />
                        </div>
                        <h3 className={styles.cardTitle}>สินเชื่อเพื่อเจ้าของกิจการ (ขายฝาก)</h3>
                        <p className={styles.cardDesc}>
                            เปลี่ยนสินทรัพย์เป็นเงินทุนหมุนเวียนธุรกิจทันที อนุมัติวงเงินสูงตามราคาประเมินจริง ดอกเบี้ยเริ่ม 0.xx% ต่อเดือน
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>วงเงินอนุมัติสูงสุด 70-80%</li>
                            <li className={styles.listItem}>รับเงินสดทันที ณ กรมที่ดิน</li>
                            <li className={styles.listItem}>ไม่ตรวจเครดิตบูโร ไม่ดู Statement</li>
                            <li className={styles.listItem}>ขยายเวลาสัญญาได้ไม่จำกัด</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src="/icon-mortgage-3d.png" alt="จำนอง" style={{ width: '120px', height: '120px' }} />
                        </div>
                        <h3 className={styles.cardTitle}>สินเชื่ออเนกประสงค์ (จำนอง)</h3>
                        <p className={styles.cardDesc}>
                            เสริมสภาพคล่องระยะสั้นโดยไม่ต้องโอนกรรมสิทธิ์ ดอกเบี้ยแบบลดต้นลดดอก ชำระคืนได้ตลอดเวลา
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>วงเงิน 30-50% ของราคาตลาด</li>
                            <li className={styles.listItem}>ดอกเบี้ยต่ำพิเศษสำหรับวงเงินสูง</li>
                            <li className={styles.listItem}>ทำสัญญาถูกต้องตามกฎหมายแพ่ง</li>
                            <li className={styles.listItem}>ผ่อนชำระแบบยืดหยุ่นได้</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            <div style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>💎</div>
                        </div>
                        <h3 className={styles.cardTitle}>Private Wealth Investment</h3>
                        <p className={styles.cardDesc}>
                            บริการจัดหาทรัพย์ศักยภาพสูงสำหรับนักลงทุน Yield 9-15% ต่อปี พร้อมการคัดกรองทรัพย์สินเกรด A+ อย่างเข้มงวด
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>การันตีผลตอบแทนด้วยโฉนด</li>
                            <li className={styles.listItem}>ทีมกฎหมายดูแลสัญญาอย่างรัดกุม</li>
                            <li className={styles.listItem}>ประเมินราคาทรัพย์โดยผู้เชี่ยวชาญ</li>
                            <li className={styles.listItem}>บริหารจัดการพอร์ตการลงทุนครบวงจร</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
