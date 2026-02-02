'use client';
import { useState } from 'react';
import styles from './AssessmentForm.module.css';

export default function AssessmentForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            alert('ข้อมูลถูกส่งเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชม.');
        }, 1500);
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>ประเมินราคาฟรี</h2>
                    <p className={styles.subtitle}>กรอกข้อมูลทรัพย์สินเบื้องต้นเพื่อให้เจ้าหน้าที่ติดต่อกลับ</p>
                </div>

                <form className={styles.formCard} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>ประเภททรัพย์สิน</label>
                        <select className={styles.select} required>
                            <option value="">เลือกประเภท</option>
                            <option value="house">บ้านเดี่ยว / ทาวน์เฮ้าส์</option>
                            <option value="condo">คอนโดมิเนียม</option>
                            <option value="land">ที่ดินเปล่า</option>
                            <option value="commercial">อาคารพาณิชย์</option>
                            <option value="hotel">โรงแรม / รีสอร์ท</option>
                        </select>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>ขนาดพื้นที่ (ไร่-งาน-ตร.ว.)</label>
                            <input type="text" className={styles.input} placeholder="เช่น 1 ไร่ 2 งาน" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>วงเงินที่ต้องการ (บาท)</label>
                            <input type="number" className={styles.input} placeholder="ระบุจำนวนเงิน" required />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>สถานที่ตั้งทรัพย์สิน</label>
                        <textarea className={styles.textarea} rows={3} placeholder="เลขที่โฉนด, แขวง/ตำบล, เขต/อำเภอ, จังหวัด" required></textarea>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>ชื่อผู้ติดต่อ</label>
                            <input type="text" className={styles.input} placeholder="ชื่อ-นามสกุล" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>เบอร์โทรศัพท์</label>
                            <input type="tel" className={styles.input} placeholder="08x-xxx-xxxx" required />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Line ID (ถ้ามี)</label>
                        <input type="text" className={styles.input} placeholder="" />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={loading}>
                        {loading ? 'กำลังส่งข้อมูล...' : 'ส่งข้อมูลประเมินราคา'}
                    </button>
                </form>
            </div>
        </section>
    );
}
