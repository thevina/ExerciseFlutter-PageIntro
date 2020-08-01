import cx from 'classnames'
import React, { KeyboardEventHandler, useCallback } from 'react'
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'

type Props = TextareaAutosizeProps & {
  onValueChange: (value: string) => void
  formref?: React.RefObject<HTMLFormElement>
}

const TextInput = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { className, value = '', onValueChange, minRows = 1, formref, disabled, ...textareaProps } = props

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      if (e.keyCode 