import HeroSection from './components/HeroSection';
import DestinasiSection from './components/DestinasiSection';
import BudayaSection from './components/BudayaSection';
import KulinerSection from './components/KulinerSection';
import SejarahSection from './components/SejarahSection';
import TecnoSection from './components/TecnoSection';
import PetaSection from './components/PetaSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SejarahSection />
      <DestinasiSection />
      <BudayaSection />
      <KulinerSection />
      <TecnoSection />
      <PetaSection />
    </main>
  );
}