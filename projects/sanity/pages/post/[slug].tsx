import { NextPage } from "next";
import Header from "../../components/Header";
import { sanityClient } from "../../sanity";

const Post: NextPage = () => {
  return (
    <main>
      <Header />
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
// we figure out the path
// const paths = posts.map(post => [{

// }])
};
