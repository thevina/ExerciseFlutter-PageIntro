/* eslint-disable react/prop-types */
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import cx from 'classnames'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cx('inline-flex items-center justify-center rounded-md bg-slate-100 p-1 dark:bg-slate-800', className)}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cx(
      'inline-flex min-w-[100px] items-center justify-center rounded-[0.185re