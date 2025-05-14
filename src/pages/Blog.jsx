import React, { useState } from "react";
import Container from "../UI/Container";
import Article1 from "../assets/article1.svg";
import Article2 from "../assets/article2.svg";
import Article3 from "../assets/article3.svg";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { Breadcrumb } from "../UI/Breadcrumb";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { BlogData } from "../constants/blog";
export default function Blog() {
  //Pagination when carts = 12
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(BlogData.length / itemsPerPage);
  const handlePageChange = (page) => setCurrentPage(page);
  const displayedData = BlogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <h3 className="text-2xl font-bold my-2">Blog</h3>
      <div className="flex md:flex-col gap-10">
        <div className="flex-[3]">
          <Carts BlogData={displayedData} />
          <div className="flex items-center justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`text-sm font-semibold px-3 py-1 mx-1 ${
                  currentPage === index + 1 ? " text-Brand" : " text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
        <div className="flex-[1]">
          <SearchAndContent />
        </div>
      </div>
    </Container>
  );
}

const Carts = ({ BlogData }) => {
  return (
    <div className="my-2">
      <div className="grid-custom-blog gap-6">
        {BlogData.map((item, index) => (
          <div key={index} className="relative border rounded-lg">
            <div className="absolute left-4 top-4 text-center bg-[#EC221F] text-white rounded-lg py-2 px-4 font-semibold">
              <p className="text-lg">{item.date}</p>
              <p className="text-xs">{item.month}</p>
            </div>
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            ) : (
              <iframe
                className="w-full h-48 rounded-t-lg"
                src={item.youtube}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <div className="p-4">
              <span className="text-gray-400 text-xs font-semibold">
                {item.hook}
              </span>
              <h3 className="text-lg font-bold mt-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              <div className="flex items-center gap-2 text-Brand font-bold mt-2">
                <Link to={`/blog/${item.slug}`}>
                  Read more
                </Link>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        ))}
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
    <div className="my-2">
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
              <p className="text-gray-700">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Industry insights</p>
              <p className="text-gray-700">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>News</p>
              <p className="text-gray-700">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Premium</p>
              <p className="text-gray-700">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Tips</p>
              <p className="text-gray-700">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Usefull</p>
              <p className="text-gray-700">(1)</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Video guides</p>
              <p className="text-gray-700">(1)</p>
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
