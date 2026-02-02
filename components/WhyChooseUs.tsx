import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    const reasons = [
        "มีความน่าเชื่อถือสูง ถูกต้องตามกฎหมาย 100%",
        "ไม่มีนโยบายยึดทรัพย์ พร้อมร่วมหาทางออกกับลูกค้าเสมอ",
        "ระยะเวลาสัญญาไม่มีขั้นต่ำ ไม่มีค่าปรับกรณีไถ่ถอนเร็ว",
        "ตรงไปตรงมา เราแจ้งรายละเอียดทั้งหมดก่อนทำ",
        "สามารถลดต้นลดดอกได้ตามความต้องการ",
        "อนุมัติและรับเงินภายใน 1 วัน ณ กรมที่ดิน",
        "ไถ่ถอนง่าย ไม่ยุ่งยาก",
        "กู้ได้ทุกอาชีพ ไม่เช็คเครดิตบูโร",
        "ใช้เพียงสัญญาหลักของกรมที่ดิน ไม่มีสัญญาโอนแนบท้ายใดๆ",
        "วงเงินสูง พร้อมดันยอดให้ตามที่ลูกค้าต้องการ"
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>10 เหตุผลที่ลูกค้าเลือกใช้บริการกับเรา</h2>
                    <p style={{ color: '#94a3b8' }}>เราให้บริการด้วยความจริงใจ โปร่งใส และเป็นกันเอง</p>
                </div>

                <div className={styles.grid}>
                    <ul className={styles.list}>
                        {reasons.map((reason, index) => (
                            <li key={index} className={styles.listItem}>
                                <span>{reason}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.imageBox} style={{ background: 'none', border: 'none' }}>
                        <img src="/service-mortgage.jpg" alt="บริการประทับใจ" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
