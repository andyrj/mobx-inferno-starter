'use strict'
import Inferno from 'inferno'
import { Provider } from 'inferno-mobx'
import { Link } from '../components'

/*
export default ({ store }) => {
  return (
    <Provider store={ store } >
      <div>
        <p>{ store.path }</p>
        <Link text="test" path="/test" />
      </div>
    </Provider>
  )
}
*/

/* not working either...  weird.. */
export default () => {
  const clicked = (event) => {
    console.log(event)
    alert('1')
  }
  return (
    <div>
      <a href='#synthetic' onClick={ clicked }>click me synthetic!</a>
      <br />
      <a href='#natural' onclick={ clicked }>click me dom event!</a>
    </div>
  )
}
