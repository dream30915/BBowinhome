import styles from './Process.module.css';

export default function Process() {
    const steps = [
        { num: '01', title: 'ส่งข้อมูล', desc: 'ส่งรูปถ่ายโฉนดหน้า-หลัง และรูปถ่ายทรัพย์สินเพื่อประเมินราคา' },
        { num: '02', title: 'ประเมินราคา', desc: 'เจ้าหน้าที่แจ้งยอดอนุมัติเบื้องต้นภายใน 24 ชม.' },
        { num: '03', title: 'นัดทำสัญญา', desc: 'นัดทำสัญญาและจดทะเบียนที่กรมที่ดิน' },
        { num: '04', title: 'รับเงินสด', desc: 'รับเงินสดทันทีหลังทำรายการเสร็จสิ้น' },
    ];

    return (
        <section id="process" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>ขั้นตอนง่ายๆ</h2>
                    <p style={{ color: '#64748b' }}>อนุมัติไว รับเงินภายใน 1 วัน</p>
                </div>
                <div className={styles.steps}>
                    {steps.map((step) => (
                        <div key={step.num} className={styles.step}>
                            <div className={styles.number}>{step.num}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
