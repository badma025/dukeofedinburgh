import React, { useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

function Post({ post }) {
  useEffect(() => {
    const subscription = supabase
      .from("comments")
      .on("INSERT", (payload) => {
        console.log(payload);
      })
      .subscribe();

    return supabase.removeSubscription(subscription);
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.comment}</p>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}

export default Post;

export async function getServerSideProps({ params }) {
  const { data: post, error } = await supabase
    .from("posts")
    .select("*, comments(*)")
    .eq("id", params.id)
    .single();

  if (error) {
    throw new error(error);
  }

  //the paths
  return {
    props: {
      post,
    },
  };
}
