import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AssessmentForm from "@/components/AssessmentForm";
import Services from "@/components/Services";
import Process from "@/components/Process";
import InterestCalculator from "@/components/InterestCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import FloatingContact from "@/components/FloatingContact";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import FeaturedListings from "@/components/FeaturedListings";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedListings />
      <Process />
      <Services />
      <InterestCalculator />
      <WhyChooseUs />
      <Testimonials />
      <Articles />
      <AssessmentForm />
      <FloatingContact />
      <Footer />
      {/* Contact section integrated into AssessmentForm */}
      <section id="features" style={{ padding: '4rem 1.5rem', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>พื้นที่ให้บริการทั่วประเทศ</h2>
          <p style={{ color: '#64748b' }}>กรุงเทพฯ ปริมณฑล พัทยา ชลบุรี หัวหิน เชียงใหม่ ภูเก็ต และจังหวัดเศรษฐกิจ</p>
        </div>
      </section>
    </main>
  );
}
