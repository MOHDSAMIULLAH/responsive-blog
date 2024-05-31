"use client"
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import blogPosts from '../data/blogPosts.json';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  thumbnail: string;
}



const Home= () => {
  const [search, setSearch] = useState('');

  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>My Blog</title>
      </Head>

      <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
      <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 border border-gray-300 rounded-md"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-primary-dark">Home</a>
          <a href="#" className="hover:text-primary-dark">About</a>
          <a href="#" className="hover:text-primary-dark">Contact</a>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            className=" focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2">
          <a href="#" className="block py-2 text-primary">Home</a>
          <a href="#" className="block py-2 hover:text-primary-dark">About</a>
          <a href="#" className="block py-2 hover:text-primary-dark">Contact</a>
        </div>
      )}
    </header>


      <main className="container mx-auto p-4 flex-grow bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl my-8 font-bold">Blog</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-4 p-2 border border-gray-300 rounded-md w-full mb-8 dark:bg-gray-800 dark:border-gray-600"
        />

        {filteredPosts.map(post => (
          <div
            key={post.id}
            className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-md hover:shadow-lg transition-shadow duration-300"
          >
            <img src={post.thumbnail} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{post.date} by {post.author}</p>
            <p className="mt-2">{post.description}</p>
          </div>
        ))}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-0.732 0-1.325 0.593-1.325 1.325v21.351c0 0.731 0.593 1.324 1.325 1.324h11.494v-9.294h-3.12v-3.622h3.12v-2.672c0-3.1 1.891-4.788 4.659-4.788 1.325 0 2.463 0.099 2.794 0.143v3.237l-1.918 0.001c-1.504 0-1.796 0.715-1.796 1.762v2.317h3.587l-0.467 3.622h-3.12v9.294h6.116c0.732 0 1.324-0.593 1.324-1.324v-21.351c0-0.732-0.592-1.325-1.324-1.325z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-0.885 0.392-1.83 0.656-2.825 0.775 1.014-0.608 1.794-1.574 2.163-2.723-0.951 0.555-2.005 0.959-3.127 1.184-0.897-0.959-2.178-1.558-3.594-1.558-2.717 0-4.918 2.201-4.918 4.917 0 0.385 0.045 0.762 0.127 1.124-4.083-0.204-7.702-2.158-10.126-5.134-0.423 0.724-0.666 1.561-0.666 2.456 0 1.694 0.861 3.188 2.17 4.067-0.801-0.026-1.554-0.246-2.21-0.615v0.061c0 2.366 1.684 4.342 3.918 4.787-0.41 0.111-0.843 0.17-1.287 0.17-0.314 0-0.615-0.03-0.916-0.086 0.631 1.953 2.445 3.377 4.6 3.416-1.68 1.318-3.809 2.106-6.115 2.106-0.398 0-0.79-0.023-1.175-0.069 2.179 1.398 4.768 2.214 7.557 2.214 9.054 0 14.009-7.498 14.009-13.986 0-0.209-0.005-0.42-0.014-0.63 0.964-0.695 1.8-1.562 2.462-2.549z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584 0.012 4.849 0.07 1.366 0.062 2.633 0.336 3.608 1.312 0.975 0.975 1.25 2.243 1.312 3.608 0.058 1.265 0.07 1.645 0.07 4.849s-0.012 3.584-0.07 4.849c-0.062 1.366-0.336 2.633-1.312 3.608-0.975 0.975-2.243 1.25-3.608 1.312-1.265 0.058-1.645 0.07-4.849 0.07s-3.584-0.012-4.849-0.07c-1.366-0.062-2.633-0.336-3.608-1.312-0.975-0.975-1.25-2.243-1.312-3.608-0.058-1.265-0.07-1.645-0.07-4.849s0.012-3.584 0.07-4.849c0.062-1.366 0.336-2.633 1.312-3.608 0.975-0.975 2.243-1.25 3.608-1.312 1.265-0.058 1.645-0.07 4.849-0.07zM12 0c-3.259 0-3.667 0.014-4.947 0.072-1.587 0.073-2.967 0.359-4.055 1.446-1.087 1.087-1.372 2.467-1.446 4.055-0.058 1.279-0.072 1.688-0.072 4.947s0.014 3.667 0.072 4.947c0.073 1.587 0.359 2.967 1.446 4.055 1.087 1.087 2.467 1.372 4.055 1.446 1.279 0.058 1.688 0.072 4.947 0.072s3.667-0.014 4.947-0.072c1.587-0.073 2.967-0.359 4.055-1.446 1.087-1.087 1.372-2.467 1.446-4.055 0.058-1.279 0.072-1.688 0.072-4.947s-0.014-3.667-0.072-4.947c-0.073-1.587-0.359-2.967-1.446-4.055-1.087-1.087-2.467-1.372-4.055-1.446-1.279-0.058-1.688-0.072-4.947-0.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 15.8c-2.096 0-3.8-1.704-3.8-3.8s1.704-3.8 3.8-3.8 3.8 1.704 3.8 3.8-1.704 3.8-3.8 3.8zM18.406 4.594c-0.796 0-1.441 0.645-1.441 1.441s0.645 1.441 1.441 1.441 1.441-0.645 1.441-1.441-0.645-1.441-1.441-1.441z"/>
              </svg>
            </a>
          </div>
          <p className="text-center">Copyright ©2020 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};



export default Home;
