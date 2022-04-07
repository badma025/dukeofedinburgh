import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { db } from '../utils/firebase'

interface IUsers {
  id: string
  name: string
  age: number
}

const Home: NextPage = () => {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('')
  const [users, setUsers] = useState<IUsers[]>([])
  const userCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      // @ts-ignore
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(users)
    }
    getUsers()
  }, [])

  useEffect(() => {
    const query = collection(db, 'users')
    const unsubscribe = onSnapshot(query, (snapshot) => {
      setUsers(
        // @ts-ignore
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    })

    return unsubscribe
  }, [])

  const createUser = async (e: any) => {
    e.preventDefault()
    await addDoc(userCollectionRef, {
      name: name,
      age: Number(age),
    })
  }
  const addAge = async (id: string) => {
    const docRef = doc(db, 'users', id)
    const payload = { age: Number(age) + 1 }
    await updateDoc(docRef, payload)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>CRUD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form>
        <div className="flex items-center justify-center gap-4  ">
          <div className="group relative z-0 mb-6 w-full">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required={true}
            />
            <label
              htmlFor="floating_first_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Name
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              // @ts-ignore
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required={true}
            />
            <label
              htmlFor="floating_last_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Age
            </label>
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={(e) => createUser(e)}
            type="submit"
            className=" w-full items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 sm:w-auto"
          >
            Create User
          </button>
        </div>
      </form>

      {users.map((user) => {
        return (
          <div className="m-2 flex h-20 w-60 max-w-md items-center justify-center rounded-lg border border-gray-200 bg-white px-2 shadow-md hover:bg-gray-100 ">
            <h5 className="text-md mr-1 font-bold text-gray-900 ">
              {user.name}
            </h5>
            <span> - </span>
            <h5 className=" text-md mr-5  text-gray-700">{user.age}</h5>

            <button
              onClick={() => addAge(user.id)}
              type="submit"
              className="w-auto items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-xs  font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:hover:bg-blue-700 "
            >
              Increase Age
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Home
