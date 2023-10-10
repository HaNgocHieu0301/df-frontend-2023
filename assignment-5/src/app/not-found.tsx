'use client';

import Link from 'next/link';
import Layout from '../sections/Layout';

const Custom404 = () => {
  return (
    <Layout>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center dark:text-white">
        <p className="text-center text-9xl font-bold first-letter dark:text-white">404</p>
        <p className="text-center text-3xl dark:text-white">Page not found</p>
        <Link href="/" className="my-5 text-red-700 cursor-pointer hover:opacity-50">
          &lt; Back to home page
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;
