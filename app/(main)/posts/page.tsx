import { BackButton } from "@/components/BackButton";
import Pagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";

const PostsPage = () => {
  return (
    <>
    <BackButton text="Go back" link="/" />
     <PostsTable />
     <Pagination />
    </>
  )
}

export default PostsPage;