import Link from 'next/link'
import { FC } from 'react'

const Navbar: FC = ({ children }: any) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/product">Product</Link>
                </li>
                <li>
                    <Link href="/product/create">Product Create</Link>
                </li>
                <li>
                    <Link href="/person">Person</Link>
                </li>
                <li>
                    <Link href="/person/create">Person Create</Link>
                </li>
            </ul>
            <br />
            <br />
            {children}
        </div>
    )
}

export default Navbar