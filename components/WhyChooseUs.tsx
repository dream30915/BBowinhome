import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    const reasons = [
        "โปร่งใส ไม่มีค่าแอบแฝง",
        "สัญญาถูกกฎหมาย อธิบายก่อนเซ็น",
        "เงินไว ไม่กดราคา ไม่เอาเปรียบ",
        "มีแผนไถ่ถอนจริง ดูแลเหมือนพาร์ทเนอร์"
    ];

    const highlightedTextStyle = {
        fontWeight: 'bold',
        color: '#b91c1c',
        textAlign: 'center' as const,
        fontSize: '1.25rem',
        marginBottom: '1.5rem'
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>ทำไมต้องเลือก BBowinhome</h2>
                    <p className={styles.subtitle}>มาตรฐานที่เป็นเลิศและความน่าเชื่อถือที่คุณวางใจ</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.contentBox}>
                        <div style={highlightedTextStyle}>
                            เพราะเราไม่ได้แค่ให้เงินเร็ว<br />
                            แต่ช่วยคิด วางแผน และปิดความเสี่ยงให้คุณ
                        </div>

                        <ul className={styles.list}>
                            {reasons.map((reason, index) => (
                                <li key={index} className={styles.listItem}>
                                    <span className={styles.checkIcon}>✔️</span>
                                    <span className={styles.text}>{reason}</span>
                                </li>
                            ))}
                        </ul>

                        <div style={{ ...highlightedTextStyle, marginTop: '2rem', marginBottom: 0 }}>
                            ขายฝากกับเรา = เงินเร็ว ใจสบาย มีทางออกจริง
                        </div>
                    </div>

                    <div className={styles.imageBox}>
                        <div className={styles.imageOverlay} />
                        <img src="/service-mortgage.jpg" alt="Professional Service" className={styles.image} />
                    </div>
                </div>
            </div>
        </section>
    );
}
