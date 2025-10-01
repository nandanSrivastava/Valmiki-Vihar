import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { blogPosts } from "../data/content";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Travel
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  {" "}
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover insider tips, travel guides, and inspiring stories
                about Valmiki National Park and Bihar&apos;s hidden gems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mt-12"
            >
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Travel Tips
              </h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss out on the latest
                travel guides, destination insights, and exclusive offers.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <button className="bg-emerald-800 hover:bg-emerald-900 px-6 py-3 rounded-r-lg text-white font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
