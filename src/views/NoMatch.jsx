'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import { Link } from '../components';

export default connect(['routerStore'], function NoMatch({ routerStore }) {
  return (
    <div>
      <h1>{'Error: 404'}</h1>
      <p>{'No Match Found for path: '}{routerStore.path} </p>
    </div>
  );
});
