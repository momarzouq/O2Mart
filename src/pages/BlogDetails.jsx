import { useParams } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Email from "../assets/email.svg";
import User from "../assets/user.svg";
import Container from "../UI/Container";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import { Breadcrumb } from "../UI/Breadcrumb";
import { BlogData } from "../constants/blog";
import { ArticleData } from "../constants/articles";
import { posts } from "../constants/posts";
import { colors } from "../constants/colors";

const BlogDetails = () => {
  const { slug } = useParams();

  // Find matching blog or article
  const selectedBlog = BlogData.find(
    (article) => article.slug === decodeURIComponent(slug)
  );
  const selectedArticle = ArticleData.find(
    (article) => article.slug === decodeURIComponent(slug)
  );

  // Determine which content to display
  const content = selectedBlog || selectedArticle;

  if (!content) {
    return (
      <Container>
        <div className="text-center py-8">
          <h3 className="text-xl font-bold">Article not found</h3>
          <p>The requested article could not be found.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Breadcrumb items={[
        { label: "Home", href: "/" }, 
        { label: selectedBlog ? "Blog" : "Articles" },
      ]} />
      
      <h3 className="text-xl font-bold mb-6">{selectedBlog ? "Blog" : "Articles"}</h3>
      
      <div className="flex lg:flex-col gap-10">
        <div className="flex-[3]">
          <BlogCartDetails content={content} isBlog={!!selectedBlog} />
        </div>
        <div className="flex-[1]">
          <SearchAndContent posts={posts} colors={colors}/>
        </div>
      </div>
    </Container>
  );
};

const BlogCartDetails = ({ content, isBlog }) => {
  return (
    <div className="flex flex-col gap-10 container mx-auto p-4">
      <div className="flex lg:flex-col gap-4 items-start">
        <img src={User} alt="Author" className="h-28 w-28 rounded-full" />
        <div>
          <Breadcrumb
            items={[
              { label: isBlog ? "News" : "Article", href: "/" }, 
              { label: content.date || "October 2, 2023" }
            ]}
          />
          <h3 className="text-xl font-bold my-2">
            {content.title || content.desc}
          </h3>
          <p className="text-sm">
            {content.content || `
              The number of new cars sold in the United States over a 20-year
              period can vary significantly depending on economic conditions,
              consumer preferences, and various other factors. I can provide you
              with historical data for new car sales in the United States up until
              my knowledge cutoff date in September 2021. However, please note
              that these figures are subject to change, and I recommend consulting
              more recent sources for up-to-date information.
            `}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        {isBlog ? (
          content.image ? (
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-[600px] object-cover rounded-lg"
            />
          ) : (
            <iframe
              src={content.youtube}
              title="YouTube video"
              className="w-full h-60 rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )
        ) : (
          <img
            src={content.img}
            alt={content.desc}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        )}
      </div>

      <p className="text-sm">
        {content.fullContent || `
          The number of new cars sold in the United States over a 20-year period
          can vary significantly depending on economic conditions, consumer
          preferences, and various other factors. I can provide you with
          historical data for new car sales in the United States up until my
          knowledge cutoff date in September 2021. However, please note that these
          figures are subject to change, and I recommend consulting more recent
          sources for up-to-date information.
        `}
      </p>

      <div className="flex md:flex-col gap-8 md:space-y-4 lg:gap-2 md:text-center px-8 md:px-4 items-center justify-around bg-Brand py-3 rounded-2xl">
        <img src={Email} alt="Email" className="w-12 h-12" />
        <div className="flex flex-col gap-2 text-white">
          <h3 className="text-2xl lg:text-xl">
            Get the Latest Deals & Updates.
          </h3>
          <p className="text-sm">
            Stay in the loop! Subscribe to our newsletter to receive the latest
            deals, discounts, announcements
          </p>
        </div>
        <div className="relative flex flex-col gap-2 w-80 lg:w-72">
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="text-sm border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
          <button className="absolute right-2 top-2">
            <FaTelegramPlane className="text-Brand size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const SearchAndContent = ({posts, colors}) => {
  return (
    <div className="my-8">
      <div className="space-y-10">
        {/* Social Midea */}
        <div>
          <h3 className=" font-bold">Stay connected</h3>
          <div className="flex gap-1">
            <FaFacebookF className="text-md text-white bg-black h-8 w-8 p-2 rounded-md " />
            <FaInstagram className="text-md text-white bg-black h-8 w-8 p-2 rounded-md " />
            <FaXTwitter className="text-md text-white bg-black h-8 w-8 p-2 rounded-md " />
          </div>
        </div>
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Type a keyword"
            className="text-xs border rounded-lg px-8 pl-8 py-3 outline-none"
          />
          <HiMiniMagnifyingGlass className="absolute text-Brand top-1/2 right-[28%] md:right-[34%] -translate-y-1/2" />
        </div>
        {/* Categoris */}

        <div>
          <h3 className=" font-bold">Categories</h3>
          <div className="my-4 space-y-4 text-sm font-semibold">
            <div className="flex justify-between items-center">
              <p>Experts</p>
              <p className="text-gray-800">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Industry insights</p>
              <p className="text-gray-800">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>News</p>
              <p className="text-gray-800">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Premium</p>
              <p className="text-gray-800">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Tips</p>
              <p className="text-gray-800">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Usefull</p>
              <p className="text-gray-800">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Video guides</p>
              <p className="text-gray-800">(1)</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className=" font-bold">Tags</h3>
          <div className="flex flex-wrap items-center gap-2 my-4 space-y-2 text-sm font-semibold">
            {colors.map((color, index) => (
              <p key={index} className="border rounded-lg py-1 px-2 mt-2">
                {color}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Recent posts</h3>
          {posts.map((post) => (
            <div key={post.id} className="flex items-start gap-2 border-b py-4">
              <img
                src={post.image}
                className="h-12 w-24 object-cover rounded"
                alt={post.title}
              />
              <div className="flex flex-col">
                <p className="text-gray-300 text-xs font-semibold">
                  {post.date}
                </p>
                <p className="text-sm font-semibold">{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
















