'use strict'
import Inferno from 'inferno'
import { Provider } from 'inferno-mobx'
import { Link } from '../components'

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
