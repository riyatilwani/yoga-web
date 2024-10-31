import React from 'react';
import { FaRegComment } from 'react-icons/fa';

interface BlogPost {
  image: string;
  date: string;
  author: string;
  comments: number;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    image: '/images/image_1.jpg',
    date: 'July 14, 2019',
    author: 'Admin',
    comments: 3,
    title: 'Is wellness the new luxury',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    image: '/images/image_2.jpg',
    date: 'July 14, 2019',
    author: 'Admin',
    comments: 3,
    title: 'Is wellness the new luxury',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    image: '/images/image_3.jpg',
    date: 'July 14, 2019',
    author: 'Admin',
    comments: 3,
    title: 'Is wellness the new luxury',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50" id="blog-section">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg">
                <a href="#" className="block overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                  />
                </a>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <span className="mr-4">{post.date}</span>
                    <span className="mr-4">{post.author}</span>
                    <span className="flex items-center">
                      <FaRegComment className="mr-1" /> {post.comments}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <a href="#" className="hover:underline">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
