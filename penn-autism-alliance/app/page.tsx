import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";

export default function Home() {
  const heroImages = [
    "/hero-slideshow/IMG_4817.jpeg",
    "/hero-slideshow/feeding.png",
    "/hero-slideshow/IMG_4804.jpeg",
    "/hero-slideshow/IMG_6845.jpeg",
    "/hero-slideshow/hero-image.jpg",
    "/hero-slideshow/IMG_4803.jpeg",
    "/hero-slideshow/IMG_4819.jpeg",
    "/hero-slideshow/IMG_4813.jpeg",
    "/hero-slideshow/IMG_4810.jpeg",
    "/hero-slideshow/IMG_4809.jpeg",
    "/hero-slideshow/IMG_4815.jpeg",
    "/hero-slideshow/IMG_4823.jpeg",
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900 font-[family-name:var(--font-geist-sans)]">
      <section className="relative h-[60vh]">
        <HeroSlideshow images={heroImages} />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1 className="text-5xl font-bold mb-4">Penn Autism Alliance</h1>
            <p className="text-xl mb-8">Supporting individuals with autism and their families</p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfoBcan_OiAd9vIV3pXeOD5JTQlPJOVvU1zmqNBN5FqiIYDYw/viewform?pli=1" className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Penn Autism Alliance is dedicated to supporting individuals with autism and their families through education and community engagement in the Philadelphia area. We strive to create a more inclusive and understanding society for people on the autism spectrum.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dance Program', icon: '💃' },
              { name: 'Tennis Program', icon: '🎾' },
              { name: 'Workshops & Special Events', icon: '🎨' },
              { name: 'Community Outreach', icon: '🤝' }
            ].map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                <p className="mb-4">Empowering individuals with autism through engaging activities and support.</p>
                <Link href={`/programs#${program.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline inline-block">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ariana Javaheri', role: 'Co-President', image: '/team/ariana.jpg' },
              { name: 'Melissa Liu', role: 'Co-President', image: '/team/melissa.jpg' },
              { name: 'Hannah Moss', role: 'VP of Outreach', image: '/team/hannah.jpg' },
              { name: 'Sydney Bianco', role: 'VP of Outreach', image: '/team/sydney.jpg' },
              { name: 'Allie Frydrych', role: 'VP of Events', image: '/team/allie.jpg' },
              { name: 'Ananya Madduri', role: 'VP of Finance', image: '/team/ananya.jpg' },
              { name: 'Rayyan Shaik', role: 'Tennis Lead', image: '/team/rayyan.jpg' },
              { name: 'Suji Neelamagam', role: 'Tennis Lead', image: '/team/suji.jpg' },
              { name: 'Kyle Zhang', role: 'Tennis Lead', image: '/team/kyle.jpg' },
              { name: 'Emily Hoffman', role: 'Dance Lead', image: '/team/emily.jpg' },
              { name: 'Anne Bolt', role: 'Dance Lead', image: '/team/anne.jpg' },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Join Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Co-VP Events',
              'Co-VP: Events and Finance',
              'VP of Marketing',
              'VP of Sparc / VP of partnerships'
            ].map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{role}</h3>
                <p className="mb-4">We&apos;re looking for passionate individuals to join our team in this role.</p>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfoBcan_OiAd9vIV3pXeOD5JTQlPJOVvU1zmqNBN5FqiIYDYw/viewform?pli=1" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
