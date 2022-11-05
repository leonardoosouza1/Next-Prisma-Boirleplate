// Header.tsx
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname


  return (
    <nav>
      <p>aaa</p>
    </nav>
  )
}

export default Header
