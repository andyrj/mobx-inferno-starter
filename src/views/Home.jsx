'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import RouterLink from '../components/RouterLink';

export default connect(['routerStore'], function Home({routerStore}) {
  return (
    <div>
      <p>{'Home'}</p>
      <div>
        <RouterLink 
          clickHandler={({path, event}) => {routerStore.changeRoute(path, event)}}
          path={'/counters'} 
        >{'Counters'}</RouterLink>
      </div>
    </div>
  );
});
