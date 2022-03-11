import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderCv from '../components/desktop/cv/HeaderCv';
import WhoAmICv from '../components/desktop/cv/WhoAmICv';
import AcademicCv from '../components/desktop/cv/AcademicCv';
import ProfessionalXp from '../components/desktop/cv/ProfessionalXp';
import ToolsAndLanguages from '../components/desktop/cv/ToolsAndLanguages';
import ExtraCvActivities from '../components/desktop/cv/ExtraCvActivities';
import Footer from '../components/desktop/Footer';

import MobileHeaderCv from '../components/mobile/cv/MobileHeaderCv';
import MobileWhoAmICv from '../components/mobile/cv/MobileWhoAmICv';
import MobileAcademicCv from '../components/mobile/cv/MobileAcademicCv';
import MobileProfessionalXp from '../components/mobile/cv/MobileProfessionalXp';
import '../styles/desktop/cv/cv.css';
import MobileToolsAndLanguages from '../components/mobile/cv/MobileToolsAndLanguages';
import MobileExtraCvActivities from '../components/mobile/cv/MobileExtraCvActivities';
import MobileFooter from '../components/mobile/MobileFooter';

function Cv() {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <div id="cvPage">
      {isMobileDevice ? <MobileHeaderCv /> : <HeaderCv />}
      <main id="cvMain">
        {isMobileDevice ? <MobileWhoAmICv /> : <WhoAmICv />}
        {isMobileDevice ? <MobileAcademicCv /> : <AcademicCv />}
        {isMobileDevice ? <MobileProfessionalXp /> : <ProfessionalXp />}
        {isMobileDevice ? <MobileToolsAndLanguages /> : <ToolsAndLanguages />}
        {isMobileDevice ? <MobileExtraCvActivities /> : <ExtraCvActivities />}
      </main>
      {isMobileDevice ? <MobileFooter /> : <Footer />}
    </div>
  );
}

export default Cv;
