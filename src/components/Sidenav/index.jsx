import React, { useRef } from 'react'
import { useDimensions } from 'src/utils/use-dimensions'
import { Navigation } from './Navigation'
import { MenuToggle } from './MenuToggle'
import { SideNav, SiderBg, SideNavLogo } from './styles'
import NavLogo from 'src/assets/image/icon.png'
import Image from 'next/image'

const sidebar = {
  open: (height = 800) => ({
    clipPath: `circle(${height * 2 + 200}px at 90vw 36px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    // clipPath: 'circle(24px at 90vw 36px)',
    clipPath: 'polygon(80% 0%, 100% 0%, 100% 80px, 80% 80px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const SideNavbar = () => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const [isSideOpen, setIsSideOpen] = React.useState(false)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <SideNav
      initial={false}
      animate={isSideOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <SiderBg variants={sidebar} />
      <SideNavLogo href="/" onClick={() => setIsSideOpen(!isSideOpen)}>
        <Image src={NavLogo} alt="loxi" width={20} height={20} />
      </SideNavLogo>
      <Navigation isSideOpen={isSideOpen} toggle={() => setIsSideOpen(!isSideOpen)} />
      <MenuToggle toggle={() => setIsSideOpen(!isSideOpen)} />
    </SideNav>
  )
}

export default SideNavbar
