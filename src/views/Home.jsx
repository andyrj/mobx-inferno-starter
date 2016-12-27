'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import RouterLink from '../components/RouterLink';

export default connect(['store'], function Home(props) {
  return (
    <div>
      <p>{'Home'}</p>
      <div>
        <RouterLink path={'/counters'}>{'Counters'}</RouterLink>
      </div>
    </div>
  );
});
