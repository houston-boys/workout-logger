import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router';

export default function Header() {

    const { user } = useUser();
    const myPath = useRouter();

  return (
    <>
        <div className="w-full bg-sky-300 bg-opacity-90">
          <h1 className="grid h-40 place-items-center text-white text-7xl">Workout Logger</h1>
        </div>  
        <div className="flex bg-black bg-opacity-75 h-10">
          {myPath.pathname === '/contact' && <Link href='/' className="hover:text-sky-200 text-white mt-2 ml-4">Home</Link>}
          {myPath.pathname === '/' && <Link href='/contact' className="hover:text-sky-200 text-white mt-2 ml-4">Contact</Link>}
          <div className='flex ml-auto mr-4'>
            {!user && <Link href="/api/auth/login" className=" hover:text-sky-200 text-white ml-4 mt-2">Login</Link>}
            {user && <Link href="/api/auth/logout" className=" hover:text-sky-200 text-white mt-2 ml-4">Logout</Link>}
          </div>
        </div>
    </>
  )
}
