/* @flow */
'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';

export default connect(['todos'], ({ todos }) => {
  return (
    <div />
  );
});