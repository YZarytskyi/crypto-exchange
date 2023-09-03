import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Exchange from '@/components/Exchange/Exchange';
import About from '@/components/About';
import Contacts from '@/components/Contacts';

export default function Main() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-[85vh] max-w-xl">
        <Exchange />
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
