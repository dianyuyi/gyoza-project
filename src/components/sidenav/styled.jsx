import tw, { styled } from 'twin.macro'
import variables from 'src/styles/variables'
import { motion } from 'framer-motion'
import { NextLink } from 'src/components/link'

export const SideNav = styled(motion.nav)`
  ${tw`block fixed top-0 right-0 bottom-0 w-screen pointer-events-none z-[9999]`}
`

export const SideNavBtn = styled.button`
  ${tw`outline-none border-none	select-none	absolute cursor-pointer rounded-full bg-transparent	pointer-events-auto top-3.5 right-[calc(10vw - 36px)] w-[48px] h-[48px]`}
`

export const SiderBg = styled(motion.div)`
  ${tw`absolute top-0 right-0 bottom-0 w-full bg-white`}
`

export const SideNavList = styled(motion.ul)`
  ${tw`absolute flex flex-col justify-center items-center w-full py-6 mt-[10%]`}

  &.preventClick {
    ${tw`pointer-events-none`}

    > li > a {
      ${tw`pointer-events-none`}
    }

    > li > button {
      ${tw`pointer-events-none`}
    }
  }
`

export const SideNavListItem = styled(motion.li)`
  ${tw`p-2`}
`

export const SideNavLink = styled(NextLink)`
  ${tw`no-underline py-0 px-2 text-lg font-light cursor-pointer`}
  color: ${variables.primary};
  pointer-events: fill;
`

export const SideNavLngBtn = styled.button`
  color: ${variables.primary};
  pointer-events: fill;
  ${tw`px-2 pb-1 duration-500 text-sm font-light`}

  &.active {
    border-bottom: solid 2px ${variables.primary};
    ${tw`pb-0`}
  }
`
