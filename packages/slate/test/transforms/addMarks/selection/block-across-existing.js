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
      <mark key="b">
        wo
        <anchor />
        rd
      </mark>
    </block>
    <block>
      <mark key="b">
        an
        <focus />
        other
      </mark>
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <mark key="b">wo</mark>
      <mark key="a">
        <mark key="b">
          <anchor />
          rd
        </mark>
      </mark>
    </block>
    <block>
      <mark key="a">
        <mark key="b">
          an
          <focus />
        </mark>
      </mark>
      <mark key="b">other</mark>
    </block>
  </value>
)