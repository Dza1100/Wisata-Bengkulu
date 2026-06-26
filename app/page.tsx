import HeroSection from './components/HeroSection';
import DestinasiSection from './components/DestinasiSection';
import BudayaSection from './components/BudayaSection';
import KulinerSection from './components/KulinerSection';
import SejarahSection from './components/SejarahSection';
import TecnoSection from './components/TecnoSection';
import PetaSection from './components/PetaSection';
import WaveDivider from './components/WaveDivider';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SejarahSection />
      <WaveDivider fromColor="#f5f0e8" toColor="#dce8f0" />
      <BudayaSection />
      <WaveDivider fromColor="#dce8f0" toColor="#f5f0e8" />
      <KulinerSection />
      <WaveDivider fromColor="#f5f0e8" toColor="#dce8f0" />
      <DestinasiSection />
      <WaveDivider fromColor="#dce8f0" toColor="#1c2b3a" />
      <TecnoSection />
      <WaveDivider fromColor="#1c2b3a" toColor="#dce8f0" />
      <PetaSection />
    </main>
  );
}