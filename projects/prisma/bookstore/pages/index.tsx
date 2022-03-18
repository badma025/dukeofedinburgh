// @ts-nocheck
import { BookSuggestion } from '@prisma/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MouseEventHandler, useState, useEffect } from 'react'

const Home: NextPage = () => {
  const [bookTitle, setBookTitle] = useState('')
  const [bookAuthor, setBookAuthor] = useState('')
  const [bookGenre, setBookGenre] = useState('')
  const [APIResponse, setAPIResponse] = useState(null)

  const readDB = async () => {
    try {
      const response = await fetch('/api/book', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      setAPIResponse(await response.json())

      if (response.status !== 200) {
        console.log('something went wrong')
        //set an error banner here
      } else {
        console.log('form submitted successfully !!!')
        //set a success banner here
      }
    } catch (error) {
      console.log('there was an error submitting', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      bookTitle: bookTitle,
      bookAuthor: bookAuthor,
      bookGenre: bookGenre,
    }
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (response.status !== 200) {
        console.log('something went wrong')
        console.log(response.status)
        //set an error banner here
      } else {
        resetForm()
        readDB()
        console.log('form submitted successfully !!!')
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log('there was an error submitting', error)
    }
  }

  const resetForm = () => {
    setBookAuthor('')
    setBookGenre('')
    setBookTitle('')
  }

  return (
    <div className="mt-14">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-lg ">
        <form className="mx-8">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Book Title
            </label>
            <input
              onChange={(e) => {
                setBookTitle(e.target.value)
              }}
              type="text"
              id="email"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required={true}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Author name
            </label>
            <input
              onChange={(e) => {
                setBookAuthor(e.target.value)
              }}
              type="text"
              id="password"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required={true}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Genre
            </label>
            <input
              onChange={(e) => {
                setBookGenre(e.target.value)
              }}
              type="text"
              id="repeat-password"
              className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 "
              required={true}
            />
          </div>

          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Submit Book
          </button>
        </form>
      </div>
      <div>
        {APIResponse?.map((book: BookSuggestion) => {
          return (
            <li className='text-center list-none'>{book.bookTitle}</li>
          )
        })}
      </div>
    </div>
  )
}

export default Home
