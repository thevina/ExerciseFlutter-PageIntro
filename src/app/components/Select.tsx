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
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="block truncate">{selectedName}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              lea