import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Exchange from '@/components/Exchange';
import About from '@/components/About';
import Support from '@/components/Support';

export default function Main() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl">
        <Exchange />
        <About />
        <Support />
      </main>
      <Footer />
    </>
  );
}
