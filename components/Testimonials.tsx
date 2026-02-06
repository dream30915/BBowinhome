import styles from './Testimonials.module.css';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "คุณสมชาย",
            role: "เจ้าของธุรกิจ",
            content: "อนุมัติไวมากครับ ขายฝากที่ดินได้เงินวันนั้นเลย ช่วยให้ธุรกิจผมเดินต่อได้ ขอบคุณทีมงานมากครับ",
            rating: 5
        },
        {
            id: 2,
            name: "คุณหญิง",
            role: "พนักงานบริษัท",
            content: "บ้านเช่าสะอาดมาก น้องแอดมินดูแลดี เฟอร์นิเจอร์ครบพร้อมอยู่จริงๆ ค่ะ แนะนำเลย",
            rating: 5
        },
        {
            id: 3,
            name: "คุณประเสริฐ",
            role: "นักลงทุน",
            content: "ขายบ้านได้ราคาดีกว่าที่คิด ทีมงานให้คำปรึกษาเรื่องสินเชื่อและโอนกรรมสิทธิ์ดีมาก มืออาชีพครับ",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>เสียงจากลูกค้าของเรา</h2>
                    <p className={styles.subtitle}>ความประทับใจจากผู้ใช้บริการจริง</p>
                </div>

                <div className={styles.grid}>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles.card}>
                            <Quote className={styles.quoteIcon} size={40} />
                            <div className={styles.stars}>
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="#FBBF24" color="#FBBF24" />
                                ))}
                            </div>
                            <p className={styles.content}>"{review.content}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {review.name.charAt(0)}
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{review.name}</span>
                                    <span className={styles.role}>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
