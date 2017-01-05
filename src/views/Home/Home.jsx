/* @flow */
'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import RouterLink from '../../components/RouterLink';
import imgMobx from './images/mobx.jpg';
import imgInferno from './images/inferno.png';

require('./style.css');

const linkHandler = ({router, path, event}) => { 
  event.preventDefault();
  router.changeRoute(path);
  if (router.menu) {
    router.menu.open = false;
  }
};

export default connect(['router'], function Home({router}) {
  return (
    <div id='home'>
      <div id='menuSpacer' />
      <div id='icons'>
        <a href='https://github.com/mobxjs/mobx'>
          <img alt='mobx' className='iconImg' src={imgMobx} />
        </a>
        {' + '}
        <a href='https://github.com/infernojs/inferno'>
          <img alt='inferno' className='iconImg' src={imgInferno} />
        </a>
      </div>
      <div id='examples'>
        <h3>{'Examples:'}</h3>
        <ul>
          <li>
            <RouterLink 
              clickHandler={(path, event) => linkHandler({router, path, event})}
              path='/counters'
            >
              {'Counters'}
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              clickHandler={(path, event) => linkHandler({router, path, event})}
              path='/todos'
            >
              {'Todos'}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  );
});
