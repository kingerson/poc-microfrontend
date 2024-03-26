import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('shell/nav'))

export default function Product() {
  return (
    <div>
      <h1>Product Page</h1>
      <Nav>
        <h2>Navbar desde producto</h2>
      </Nav>
    </div>
  )
}