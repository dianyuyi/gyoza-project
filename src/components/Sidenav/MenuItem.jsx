import * as React from 'react'
import { SideNavListItem, SideNavLink } from './styles'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ toggle }) => {
  return (
    <>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink href="/">Home</SideNavLink>
      </SideNavListItem>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink href="/about">About</SideNavLink>
      </SideNavListItem>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink href="/works">works</SideNavLink>
      </SideNavListItem>
      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink href="/contact">Contact</SideNavLink>
      </SideNavListItem>
    </>
  )
}
