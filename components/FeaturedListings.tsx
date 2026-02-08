import Link from 'next/link';
import { Home, MapPin, Bed, Bath, MoveRight } from 'lucide-react';
import styles from './FeaturedListings.module.css';

import { properties as localProperties } from '../data/properties';
import { fetchProperties } from '../utils/fetchProperties';

// Make component async to support server-side fetching
export default async function FeaturedListings() {
    // Try to fetch from Google Sheet first
    const sheetProperties = await fetchProperties();

    // Use sheet data if available, otherwise fall back to local data
    const listings = sheetProperties.length > 0 ? sheetProperties : localProperties;

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
