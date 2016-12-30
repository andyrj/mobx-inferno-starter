'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import RouterLink from '../components/RouterLink';

export default connect(['router'], function Home({router}) {
  return (
    <div>
      <p>{'Home'}</p>
      <div>
        <RouterLink 
          clickHandler={({path, event}) => 
            {router.changeRoute(path, event);}
          }
          path={'/counters'} 
        >{'Counters'}</RouterLink>
      </div>
    </div>
  );
});
