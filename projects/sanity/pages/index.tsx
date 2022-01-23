import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../types";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }): JSX.Element => {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <img
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-100 ease-in-out"
                  src={urlFor(post.mainImage).url()!}
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">
                      {post.description} by{" "}
                      <span className="font-bold">{post.author.name}</span>
                    </p>
                  </div>
                  <img
                    className="h-12 w-12 rounded-full object-contain"
                    src={urlFor(post.author.image).url()!}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Home;

// turns our page into a ssr page
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  author -> {
  name,
  image,
  bio,
},
  description,
  mainImage,
  slug
}`;

  // Perform a GROQ-query against the configured dataset.
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
