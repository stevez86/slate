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
      <text />
      <inline>
        wo
        <anchor />
        rd
      </inline>
      <text />
    </block>
    <block>
      <text />
      <inline>
        an
        <focus />
        other
      </inline>
      <text />
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <text />
      <inline>
        wo
        <mark key="a">
          <anchor />
          rd
        </mark>
      </inline>
      <mark key="a" />
    </block>
    <block>
      <mark key="a" />
      <inline>
        <mark key="a">
          an
          <focus />
        </mark>
        other
      </inline>
      <text />
    </block>
  </value>
)
