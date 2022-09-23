import { useLoaderData } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
  const { title, body } = useLoaderData();

  return <BlogPost title={title} text={body} />;
}

export default PostDetailPage;

export function loader({ params }) {
  return getPost(params.id);
}
