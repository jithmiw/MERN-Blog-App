import { useEffect } from "react";
import { Link } from "react-router-dom";

interface IPost {
  _id: string;
  title: string;
  body: string;
  author: {
    [key: string]: any;
  };
  date: Date;
  published: boolean;
  imageUrl: string;
}

interface IProps {
  user: any;
  posts: IPost[];
}

function Home({ user, posts }: IProps) {
  const publishedPosts = posts.filter((post) => post.published);

  useEffect(() => {
    document.title = "Home | Blog World";
  }, []);

  return (
    <div>
      <div className="bg-gray-300 py-20 px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono uppercase">
          Welcome to Blog World!
        </h1>
        <p className="pt-4 w-60 sm:w-72 md:w-96 leading-6">
        Discover the future of technology. Stay informed, inspired, and empowered with our captivating tech blog. Explore the latest trends, innovations, and expert insights in a concise and engaging format. Join us on this exciting journey today!
        </p>
        {!user ? (
          <div>
            <Link to="/signup">
              <button className="px-8 py-1 mt-4 rounded border-2 border-black text-black duration-300 hover:text-white hover:bg-black">
                Sign up
              </button>
            </Link>
          </div>
        ) : null}
      </div>
      <h2 className="text-3xl mt-12 px-12 font-sans uppercase">Blogs</h2>
      <div className="flex items-center justify-center flex-wrap mx-8 lg:justify-start lg:items-start">
        {publishedPosts
          .slice(0)
          .reverse()
          .map((post: IPost) => {
            return (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <div className="m-4 p-4 text-center border-2 rounded hover:shadow-lg">
                  <img
                    src={post.imageUrl}
                    className="flex items-center justify-center w-64 h-36 sm:w-80 sm:h-48"
                    alt="post background"
                  />
                  <h2 className="text-1xl font-bold pt-2">{post.title}</h2>
                  <p className="text-sm">
                    By{" "}
                    <em className="text-slate-500">{post.author.username}</em>
                  </p>
                  <p className="text-sm">
                    Published: {new Date(post.date).toLocaleString()}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
