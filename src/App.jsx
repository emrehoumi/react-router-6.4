import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage, { loader as blogPostsLoader } from './pages/BlogPosts';
import NewPostPage, { action as newPostAction } from './pages/NewPost';
import PostDetailPage, { loader as postDetailLoader } from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';
import ErrorPage from './pages/Error';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
//       <Route index element={<WelcomePage />} />
//       <Route path="/blog" element={<BlogLayout />}>
//         <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
//         <Route path=":id" element={<PostDetailPage />} loader={postDetailLoader} />
//       </Route>
//       <Route path="/blog/new" element={<NewPostPage />} action={newPostAction} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: '/blog',
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <BlogPostsPage />,
            loader: blogPostsLoader
          },
          {
            path: ':id',
            element: <PostDetailPage />,
            loader: postDetailLoader
          }
        ]
      },
      {
        path: '/blog/new',
        element: <NewPostPage />,
        action: newPostAction
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
