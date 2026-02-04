import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    const reasons = [
        "นิติบุคคลถูกต้องตามกฎหมาย จดทะเบียนพาณิชย์ครบถ้วน",
        "ระบบที่ปรึกษา Private Fund ดูแลแบบ One-on-One",
        "สัญญามาตรฐานสากล เป็นธรรม และตรวจสอบได้ทุกบรรทัด",
        "ประเมินมูลค่าทรัพย์สินตามราคาตลาด (Market Price)",
        "อัตราดอกเบี้ยพิเศษ (Effective Rate) แบบลดต้นลดดอก",
        "อนุมัติวงเงินรวดเร็ว ทำนิติกรรมรับเช็คที่กรมที่ดินทันที",
        "นโยบายรักษาความลับลูกค้าขั้นสูงสุด (Strict Confidentiality)",
        "ยึดหลักการเจรจาหาทางออกและประนอมหนี้เป็นอันดับแรก",
        "ไม่มีสัญญาแอบแฝง หรือค่าธรรมเนียมซ่อนเร้น",
        "วงเงินรองรับระดับ High Value Asset ถึง 100 ล้านบาท"
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>ทำไมต้องเลือก BBowinhome</h2>
                    <p className={styles.subtitle}>มาตรฐานที่เป็นเลิศและความน่าเชื่อถือที่คุณวางใจ</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.contentBox}>
                        <ul className={styles.list}>
                            {reasons.map((reason, index) => (
                                <li key={index} className={styles.listItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    <span className={styles.text}>{reason}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.imageBox}>
                        <div className={styles.imageOverlay} />
                        <img src="/service-mortgage.jpg" alt="Professional Service" className={styles.image} />
                        <div className={styles.expBadge}>
                            <span className={styles.expNumber}>10+</span>
                            <span className={styles.expText}>Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
