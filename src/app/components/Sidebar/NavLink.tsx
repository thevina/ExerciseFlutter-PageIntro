import { Link, LinkPropsOptions } from '@tanstack/react-router'

function NavLink(props: LinkPropsOptions & { text: string }) {
  const { text, ...linkProps } = props
  return (
    <Link
      className="rounded-[10px] w-full h-[50px] pl-5 flex flex-col justify-center"
      act