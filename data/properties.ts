export const properties = [
    {
        id: 1,
        title: "บ้านเดี่ยว 2 ชั้น รีโนเวทใหม่",
        location: "ต.บ่อวิน อ.ศรีราชา (ใกล้โรบินสัน)",
        price: "2.89 ลบ.",
        status: "ขาย", // หรือ "เช่า"
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

// วิธีเพิ่มทรัพย์ใหม่:
// 1. ก๊อปปี้ช่วง {} ของรายการสุดท้าย
// 2. ใส่เครื่องหมาย , (ลูกน้ำ) ต่อท้าย } ของตัวสุดท้าย
// 3. วางที่ก๊อปปี้มาต่อท้าย
// 4. แก้แก้ไขข้อมูลข้างใน
