/* eslint-disable react/prop-types */
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import cx from 'classnames'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof Ta