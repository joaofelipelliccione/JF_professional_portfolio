import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Typist from 'react-typist';
import MobHeaderCvHambContent from './MobHeaderCvHambContent';
import MobileHeaderCvHambBtn from './MobileHeaderCvHambBtn';
import '../../../styles/mobile/cv/mobileHeaderCv.css';

function MobileHeaderCv() {
  const [isHambContentOpen, setIsHambContentOpen] = React.useState(false);

  return (
    <header id="cvPageMobileHeader">
      <div id="cvPageMobHeaderContainer">
        <MobileHeaderCvHambBtn
          isHambContentOpen={ isHambContentOpen }
          setIsHambContentOpen={ setIsHambContentOpen }
        />
        <LinkScroll
          to="mobWhoAmI"
          smooth
          duration={ 600 }
          onClick={ () => setIsHambContentOpen(false) }
        >
          <Typist cursor={ { hideWhenDone: true, hideWhenDoneDelay: 2000, blink: true } }>
            João Felipe P
            <Typist.Backspace count={ 13 } delay={ 2100 } />
            Junior Full-Stack Web Developer
            <Typist.Backspace count={ 31 } delay={ 2100 } />
            Business Administrator
            <Typist.Backspace count={ 22 } delay={ 2100 } />
            João Felipe P.
          </Typist>
        </LinkScroll>
      </div>
      {isHambContentOpen
        && <MobHeaderCvHambContent
          isHambContentOpen={ isHambContentOpen }
          setIsHambContentOpen={ setIsHambContentOpen }
        />}
    </header>
  );
}

export default MobileHeaderCv;
