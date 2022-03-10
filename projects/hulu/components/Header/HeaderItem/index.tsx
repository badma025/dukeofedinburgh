import { NextPage } from 'next'

interface Props {
  title: string
  Icon: any
}

const HeaderItem: NextPage<Props> = ({ title, Icon }) => {
  return (
    <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
      <Icon className="mb-1 h-8 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
