/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.addMarks(editor, editor.value.selection, [{ key: 'a' }], {
    select: true,
  })
}

export const input = (
  <value>
    <block>
      w<anchor />o<focus />
      rd
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      w
      <mark key="a">
        <anchor />o<focus />
      </mark>
      rd
    </block>
  </value>
)
