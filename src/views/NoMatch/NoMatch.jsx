'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';

export default connect(['router'], function NoMatch({ router }) {
  return (
    <div>
      <h1>{'Error: 404'}</h1>
      <p>{'No Match Found for path: '}{router.path} </p>
    </div>
  );
});
