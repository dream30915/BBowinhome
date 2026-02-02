'use client';
import { useState } from 'react';
import styles from './InterestCalculator.module.css';

export default function InterestCalculator() {
    const [amount, setAmount] = useState(1000000);
    const interestRate = 1.25; // 1.25% per month

    const monthlyInterest = (amount * interestRate) / 100;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>คำนวณดอกเบี้ยเบื้องต้น</h2>
                        <p className={styles.subtitle}>ลองคำนวณยอดผ่อนชำระต่อเดือน ด้วยอัตราดอกเบี้ยพิเศษ 1.25%</p>
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.label}>
                            <span>วงเงินที่ต้องการ</span>
                            <span style={{ color: '#d97706', fontWeight: 700 }}>฿ {amount.toLocaleString()}</span>
                        </div>
                        <input
                            type="range"
                            className={styles.range}
                            min="50000"
                            max="10000000"
                            step="10000"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            className={styles.numberInput}
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                    </div>

                    <div className={styles.resultBox}>
                        <div className={styles.resultLabel}>ดอกเบี้ยต่อเดือน (โดยประมาณ)</div>
                        <div className={styles.resultValue}>฿ {monthlyInterest.toLocaleString()}</div>
                        <p className={styles.resultNote}>*ลดต้นลดดอกได้ อนุมัติตามราคาประเมินจริง</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
