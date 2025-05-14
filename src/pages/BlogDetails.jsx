import { useParams } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Article1 from "../assets/article1.svg";
import Article2 from "../assets/article2.svg";
import Article3 from "../assets/article3.svg";
import Email from "../assets/email.svg";
import User from "../assets/user.svg";
import Container from "../UI/Container";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import { Breadcrumb } from "../UI/Breadcrumb";
import { BlogData } from "../constants/blog";

const BlogDetails = () => {
  const { slug } = useParams();
 

  const selectedArticle = BlogData.find(
    (article) => article.slug === decodeURIComponent(slug)
  );

  if (!selectedArticle) {
    return <div>Article not found</div>;
  }

  return (
    <Container>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <h3 className="text-xl font-bold">Blog</h3>
      <div className="flex lg:flex-col gap-10">
        <div className="flex-[3]">
          <BlogCartDetails selectedArticle={selectedArticle} />
        </div>
        <div className="flex-[1]">
          <SearchAndContent />
        </div>
      </div>
    </Container>
  );
};

const BlogCartDetails = ({ selectedArticle }) => {
  return (
    <div className="flex flex-col gap-10 container mx-auto my-8 p-4">
      <div className="flex lg:flex-col gap-2">
        <img src={User} className="h-28 w-28" />
        <div>
          <Breadcrumb
            items={[{ label: "News", href: "/" }, { label: "October 2,2023" }]}
          />
          <h3 className="text-xl font-bold my-2">
            The number of new cars sold over 20 years
          </h3>
          <p className="text-sm">
            The number of new cars sold in the United States over a 20-year
            period can vary significantly depending on economic conditions,
            consumer preferences, and various other factors. I can provide you
            with historical data for new car sales in the United States up until
            my knowledge cutoff date in September 2021. However, please note
            that these figures are subject to change, and I recommend consulting
            more recent sources for up-to-date information.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        {selectedArticle.image ? (
          <img
            src={selectedArticle.image}
            alt={selectedArticle.title}
            className="w-full h-[600px] object-cover"
          />
        ) : (
          <iframe
            src={selectedArticle.youtube}
            title="YouTube video"
            className="w-full h-60 rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <p className="text-sm">
        The number of new cars sold in the United States over a 20-year period
        can vary significantly depending on economic conditions, consumer
        preferences, and various other factors. I can provide you with
        historical data for new car sales in the United States up until my
        knowledge cutoff date in September 2021. However, please note that these
        figures are subject to change, and I recommend consulting more recent
        sources for up-to-date information.
      </p>
      <div className="flex md:flex-col gap-8 md:space-y-4 lg:gap-2 md:text-center px-8 md:px-4 items-center justify-around bg-Brand py-3 rounded-2xl">
        <img src={Email} alt="Email" />
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
          <FaTelegramPlane className="absolute right-4 top-2 text-Brand size-6" />
        </div>
      </div>
    </div>
  );
};

const SearchAndContent = () => {
  const colors = [
    "Black",
    "Blue",
    "Dark",
    "Brown",
    "Enova",
    "Green",
    "Grey",
    "Large",
    "Medium",
    "Pink",
    "Small",
    "White",
  ];
  const posts = [
    {
      id: 1,
      image: Article1,
      date: "October 2, 2023",
      title: "Warning lights indicating activation of various systems",
    },
    {
      id: 2,
      image: Article3,
      date: "October 2, 2023",
      title: "Warning lights indicating activation of various systems",
    },
    {
      id: 3,
      image: Article2,
      date: "October 2, 2023",
      title: "Warning lights indicating activation of various systems",
    },
    {
      id: 4,
      image: Article1,
      date: "October 2, 2023",
      title: "Warning lights indicating activation of various systems",
    },
    {
      id: 5,
      image: Article3,
      date: "October 2, 2023",
      title: "Warning lights indicating activation of various systems",
    },
  ];
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
