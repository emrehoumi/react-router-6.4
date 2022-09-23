import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  const loadedData = useLoaderData();

  return (
    <>
      <h1>Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={loadedData.posts} errorElement={<p>Error loading blog posts!</p>}>
          {(blogPosts) => <Posts blogPosts={blogPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default BlogPostsPage;

export async function loader() {
  return defer({ posts: getPosts() });
  // return defer({ posts: await getPosts() }); // do not display the page until getting Posts
}
