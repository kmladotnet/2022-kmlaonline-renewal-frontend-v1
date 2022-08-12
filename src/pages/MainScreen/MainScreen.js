import React from 'react';

import Icons from '../../components/Icon/Icons'
import MainNavigation from '../../components/Navigation/MainNavigation';
import SubNavigation from '../../components/Navigation/SubNavigation';
import HorizontalBar from '../../components/UIMaterials/HorizontalBar/HorizontalBar';
import Title from '../../components/UIMaterials/Title/Title';

function Main() {
  return (
    <div className="App">
      <React.Fragment>
        <Icons/>
        <Title/>
        <MainNavigation />
        <HorizontalBar />
        <SubNavigation />
      </React.Fragment>
    </div>
  );
}

export default Main;
