/** @jsx h */

import { h } from '../../../helpers'

export const input = (
  <value>
    <block>
      <cursor />word
    </block>
  </value>
)

export const run = editor => {
  editor.wrapNodes(<block new />)
}

export const output = (
  <value>
    <block new>
      <block>
        <cursor />word
      </block>
    </block>
  </value>
)
