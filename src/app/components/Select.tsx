import cx from 'classnames'
import { FC, Fragment, useMemo, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

interface Props<T> {
  options: { value: T; name: string }[]
  value: T
  onChange: (value: T) => void
}

function Select<T extends string>(props: Props<T>) {
  const { options, value, onChange } = props
  const selectedName = useMemo(() => options.find((o) => o.value === value)!.name, [options, value])
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5