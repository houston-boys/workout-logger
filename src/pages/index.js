import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <main className="bg-[url('../rodrigo-s-2mz9IKab7DE-unsplash.jpg')] bg-cover bg-center h-screen" data-testid="description">
        <div className="w-full bg-sky-300 bg-opacity-90">
          <h1 className="grid h-40 place-items-center text-white text-7xl">Workout Logger</h1>
        </div>  
        <div className="flex bg-black bg-opacity-75 h-10">
          <Link href='/contact' className="hover:text-sky-200 text-white mt-2 ml-4">Contact</Link>
          <div className='flex ml-auto mr-4'>
            {!user && <Link href="/api/auth/login" className=" hover:text-sky-200 text-white ml-4 mt-2">Login</Link>}
            {user && <Link href="/api/auth/logout" className=" hover:text-sky-200 text-white mt-2 ml-4">Logout</Link>}
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='mt-8 p-3 border-spacing-2 bg-white max-w-xs bg-opacity-70 border rounded-lg'>Welcome to Workout Logger! Once you log-in you will be able to enter multiple training sessions for several workouts (i.e. shoulder press sets, jogging sessions or timed jump rope sessions). Workout Logger will then display your workout history and even visual representations of the data.</div>
        </div>
      </main>
    </>
  )
}
