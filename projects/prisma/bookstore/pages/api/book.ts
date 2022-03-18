// @ts-nocheck
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return await addBook(req, res)
  } else if (req.method === 'GET') {
    return await readBooks(req, res)
  } else {
    return res.status(405).json({ message: 'Method not allowed' })
  }
}

async function addBook(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  try {
    const newEntry = await prisma.bookSuggestion.create({
      data: {
        bookTitle: body.bookTitle,
        bookAuthor: body.bookAuthor,
        bookGenre: body.bookGenre,
      },
    })
    return res.status(200).json(newEntry)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error adding book', error })
  }
}

async function readBooks(req: NextApiRequest, res: NextApiResponse) {
  try {
    const books = await prisma.bookSuggestion.findMany()
    return res.status(200).json(books)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Error reading from database' })
  }
}
