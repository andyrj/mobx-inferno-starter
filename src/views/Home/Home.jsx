'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import RouterLink from '../../components/RouterLink';
import imgMobx from './images/mobx.jpg';
import imgInferno from './images/inferno.png';

export default connect(['router'], function Home({router}) {
  return (
    <div id='home'>
      <div id='icons'>
        <a href='https://github.com/mobxjs/mobx'>
          <img alt='mobx' src={imgMobx} />
        </a>
        {' + '}
        <a href='https://github.com/infernojs/inferno'>
          <img alt='inferno' src={imgInferno} />
        </a>
      </div>
      <div id='examples'>
        <h3>{'Examples:'}</h3>
        <ul>
          <li>
            <RouterLink 
              clickHandler={({path, event}) => router.changeRoute(path, event)} 
              path='/counters'
            >
              {'Counters'}
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              clickHandler={({path, event}) => router.changeRoute(path, event)} 
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
