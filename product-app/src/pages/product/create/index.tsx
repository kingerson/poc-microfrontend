import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('shell/nav'))

export default function Create() {
  return (
    <div>
      <h1>Product Create Test</h1>
      <Nav>
        <h2>Navbar desde producto create</h2>
      </Nav>
    </div>
  )
}