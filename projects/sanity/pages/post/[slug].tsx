import { GetStaticProps, NextPage } from "next";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../types";

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }): JSX.Element => {
  return (
    <main>
      <Header />
      <img className="w-full h-40 object-contain" src={urlFor(post.mainImage).url()!} alt="" />
    </main>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
   _id,
   slug {
    current
  },
 }`;
  const posts = await sanityClient.fetch(query);
  // list of paths with the names (possible pages)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author -> {
        name,
        image
    },
    description,
    mainImage,
    slug,
    body
  }
`;
  // for each and every post (the slug is a parameter which we passed into the query)
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  // if no post exists we throw the 404
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // after 60 seconds the page is regnerated
  };
};
