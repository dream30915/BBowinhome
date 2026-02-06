import Link from 'next/link';
import { Home, MapPin, Bed, Bath, MoveRight } from 'lucide-react';
import styles from './FeaturedListings.module.css';

export default function FeaturedListings() {
    const listings = [
        {
            id: 1,
            title: "บ้านเดี่ยว 2 ชั้น รีโนเวทใหม่",
            location: "ต.บ่อวิน อ.ศรีราชา (ใกล้โรบินสัน)",
            price: "2.89 ลบ.",
            status: "ขาย",
            specs: "3 นอน 2 น้ำ 2 จอด",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&w=800&q=80",
            tag: "Renovated"
        },
        {
            id: 2,
            title: "ทาวน์โฮมพร้อมอยู่ เฟอร์ฯ ครบ",
            location: "นิคมอมตะซิตี้ ระยอง",
            price: "6,500 / เดือน",
            status: "เช่า",
            specs: "2 นอน 1 น้ำ 1 จอด",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            tag: "Ready to move"
        },
        {
            id: 3,
            title: "ที่ดินเปล่า ถมแล้ว 1 งาน",
            location: "ต.ปลวกแดง (ซอยแม่สอด)",
            price: "1.2 ลบ.",
            status: "ขาย",
            specs: "100 ตร.ว.",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
            tag: "Hot Deal"
        }
    ];

    return (
        <section id="listings" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>ทรัพย์เด่นแนะนำ</h2>
                    <Link href="/properties" className={styles.viewAllBtn}>
                        ดูทั้งหมด <MoveRight size={20} />
                    </Link>
                </div>

                <div className={styles.grid}>
                    {listings.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={item.image} alt={item.title} className={styles.image} />
                                <span className={`${styles.statusBadge} ${item.status === 'เช่า' ? styles.rent : styles.sale}`}>
                                    {item.status}
                                </span>
                                <span className={styles.tagBadge}>{item.tag}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <div className={styles.location}>
                                    <MapPin size={16} /> {item.location}
                                </div>
                                <div className={styles.specs}>
                                    {item.title.includes('ที่ดิน') ? (
                                        <span>📐 {item.specs}</span>
                                    ) : (
                                        <>
                                            <span><Bed size={16} /> 3</span>
                                            <span><Bath size={16} /> 2</span>
                                        </>
                                    )}
                                </div>
                                <div className={styles.footer}>
                                    <div className={styles.price}>{item.price}</div>
                                    <button className={styles.detailBtn}>ดูรายละเอียด</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
