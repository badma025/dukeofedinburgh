// @ts-nocheck
import type { NextPage } from 'next'
import Head from 'next/head'
import { FcGoogle } from 'react-icons/fc'
import { signIn, useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-50">
      <Head>
        <title>NextAuth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        onClick={signIn}
        className="flex h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-2"
      >
        <div className="flex items-center justify-center">
          <FcGoogle className="mr-4" fontSize={30} />
          <span>Sign in With Google</span>
        </div>
      </div>
    </div>
  )
}

export default Home
