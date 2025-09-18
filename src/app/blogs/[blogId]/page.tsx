import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const BlogDetailsPage = async({params}:{params:Promise<{blogId:string}>}) => {
    const {blogId}=await params ;
    const res=await fetch(`http://localhost:5000/blogs/${blogId}`)
    const blogDetails=await res.json()

    return (
        <div>
           <BlogDetailsCard blog={blogDetails}/>
        </div>
    );
};

export default BlogDetailsPage;