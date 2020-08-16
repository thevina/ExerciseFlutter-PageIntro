import * as ReactTooltip from '@radix-ui/react-tooltip'
import { FC, PropsWithChildren } from 'react'

const Tooltip: FC<PropsWithChildren<{ content: string }>> = (props) => {
  return (
    <ReactTooltip.Provider delayDuration={1}>
      <ReactTooltip.Root>
        <ReactTooltip.Trigger asChild>{props.children}</ReactTooltip.Trigger>
        <ReactTooltip.Portal>
          <ReactTooltip.Content
            className="data-[state=delayed-op