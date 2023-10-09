import { NavBar, Footer, Actions } from "../components";
import { blogPosts } from "../constants"; 

const BlogPage = () => {
  return (
	<main>
		<NavBar/>
    <section className="padding w-full">
      <h1 className="font-crimson text-primary text-2xl items-start mt-8">Recent Blog Posts</h1>
      <div className="flex flex-col my-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="mb-6">
            <div className="flex justify-between">
              <div className="grid gap-y-0">
              <h2 className="text-black text-4xl font-bold font-merriweather">{post.title}</h2>
              <div className="flex space-x-2 gap-2.5 mt-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className=" font-crimson px-3 py-1 bg-tertiary rounded justify-center items-center text-black text-center text-base font-normal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
              <div className="grid gap-y-0 mt-4 text-right">
              <p className="text-primary text-2xl font-bold font-crimson">{post.author}</p>
              <p className="text-xl text-black font-normal font-crimson my-4">{post.date}</p>
              </div>
            </div>
            <p className="body-text my-4">{post.body}</p>
            <Actions 
            upvotes={post.upvotes}
            downvotes={post.downvotes}
            shares="5"
            comments="10"/> 
            
          </div>
        ))}
      </div>
    </section>
    <Footer/>
  </main>
  )
}

export default BlogPage