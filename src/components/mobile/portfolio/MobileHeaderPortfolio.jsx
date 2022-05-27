import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Typist from 'react-typist';
import MobileHeaderPortHambBtn from './MobileHeaderPortHambBtn';
import MobHeaderPortHambContent from './MobHeaderPortHambContent';
import '../../../styles/mobile/portfolio/mobileHeaderPortfolio.css';

function MobileHeaderPortfolio() {
  const [isHambContentOpen, setIsHambContentOpen] = React.useState(false);

  return (
    <header id="portPageMobileHeader">
      <div
        id="portPageMobHeaderContainer"
        style={ { borderBottom: isHambContentOpen && 'dashed 0.5px #D0C9C0' } }
      >
        <MobileHeaderPortHambBtn
          isHambContentOpen={ isHambContentOpen }
          setIsHambContentOpen={ setIsHambContentOpen }
        />
        <LinkScroll
          to="mobileProjectsWithInterface"
          smooth
          duration={ 600 }
          onClick={ () => setIsHambContentOpen(false) }
        >
          <Typist cursor={ { hideWhenDone: true, hideWhenDoneDelay: 2000, blink: true } }>
            Portfolio
            <Typist.Backspace count={ 9 } delay={ 2100 } />
            WEB Development Projects
            <Typist.Backspace count={ 24 } delay={ 2100 } />
            Tech Portfolio
          </Typist>
        </LinkScroll>
      </div>
      {isHambContentOpen
        && <MobHeaderPortHambContent
          isHambContentOpen={ isHambContentOpen }
          setIsHambContentOpen={ setIsHambContentOpen }
        />}
    </header>
  );
}

export default MobileHeaderPortfolio;
