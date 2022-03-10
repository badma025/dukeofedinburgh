// @ts-nocheck
import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Header from '../components/Header/index'
import Navbar from '../components/Navbar/index'
import Results from '../components/Results/index'
import requests from '../utils/requests'

const Home: NextPage = ({ results }) => {
  return (
    <div className="">
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Navbar />

      <Results results={results} />
    </div>
  )
}

export default Home

export const getServerSideProps = async (context: NextPageContext) => {
  // localhost:4200/?genre=fetchActionMovies
  // just gets the fetchActionMovies part
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url}` ||
      requests.fetchTrending
  ).then((res) => res.json())

  return {
    props: {
      results: request.results,
    },
  }
}
