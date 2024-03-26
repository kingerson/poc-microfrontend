import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('shell/nav'))

export default function Product() {
  return (
    <div>
      <h1>Person Page</h1>
      <Nav>
        <h2>Navbar desde person</h2>
      </Nav>
    </div>
  )
}