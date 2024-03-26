import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('shell/nav'))

export default function Create() {
  return (
    <div>
      <h1>Person Create</h1>
      <Nav>
        <h2>Navbar desde person create</h2>
      </Nav>
    </div>
  )
}