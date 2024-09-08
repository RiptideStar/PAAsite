import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Penn Autism Alliance logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold">Penn Autism Alliance</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link></li>
          <li><Link href="/programs" className="hover:text-yellow-400 transition-colors">Programs</Link></li>
          <li><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfoBcan_OiAd9vIV3pXeOD5JTQlPJOVvU1zmqNBN5FqiIYDYw/viewform?pli=1" className="hover:text-yellow-400 transition-colors">Get Involved</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
