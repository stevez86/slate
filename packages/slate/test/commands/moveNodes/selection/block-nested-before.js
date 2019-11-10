/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.moveNodes({ match: 2, to: [0] })
}

export const input = (
  <value>
    <block>
      <block>
        <anchor />one
      </block>
      <block>
        two<focus />
      </block>
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <anchor />one
    </block>
    <block>
      two<focus />
    </block>
    <block>
      <text />
    </block>
  </value>
)