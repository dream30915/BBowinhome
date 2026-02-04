import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    const reasons = [
        "นิติบุคคลถูกต้องตามกฎหมาย จดทะเบียนประกอบธุรกิจภายใต้กระทรวงพาณิชย์",
        "มีที่ปรึกษาทางการเงินและทีมกฎหมายดูแลเคสต่อเคส",
        "สัญญาธรรม ไม่เอาเปรียบ ไถ่ถอนได้ตลอดเวลาโดยไม่มีค่าปรับแอบแฝง",
        "ประเมินวงเงินตามราคาตลาดจริง ไม่กดราคา",
        "ดอกเบี้ย Start 1.25% ต่อเดือน แบบลดต้นลดดอก (Effective Rate)",
        "อนุมัติไวภายใน 24 ชม. ทำนิติกรรมที่กรมที่ดินรับเช็คเงินสดทันที",
        "รักษาความลับของลูกค้าอย่างเคร่งครัด",
        "ไม่มีนโยบายยึดทรัพย์ พร้อมเจรจาหาทางออกประนอมหนี้",
        "ทำสัญญาฉบับเดียวจบ ไม่มีสัญญาแนบท้ายผูกมัด",
        "วงเงินไม่จำกัด รองรับตั้งแต่ 1 แสน - 100 ล้านบาท"
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
