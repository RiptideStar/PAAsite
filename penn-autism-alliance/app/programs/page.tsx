import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    name: "Dance Program",
    description: "Our dance program offers a fun and inclusive environment for individuals with autism to express themselves through movement. Classes are tailored to various skill levels and ages.",
    image: "/programs/dance.jpg",
  },
  {
    name: "Tennis Program",
    description: "The tennis program provides adaptive tennis lessons for individuals with autism, focusing on motor skills development, social interaction, and physical fitness.",
    image: "/programs/tennis.jpg",
  },
  {
    name: "Workshops & Special Events",
    description: "We organize various workshops and special events throughout the year, covering topics such as sensory integration, social skills, and creative arts for individuals with autism and their families.",
    image: "/programs/workshops.jpg",
  },
  {
    name: "Community Outreach",
    description: "Our community outreach initiatives aim to raise awareness about autism and promote inclusion in the Philadelphia area through partnerships with local organizations and schools.",
    image: "/programs/outreach.jpg",
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Programs</h1>
        
        {programs.map((program, index) => (
          <section key={index} className="mb-16" id={program.name.toLowerCase().replace(/\s+/g, '-')}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src={program.image}
                    alt={program.name}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover md:h-full md:w-48"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{program.name}</h2>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfoBcan_OiAd9vIV3pXeOD5JTQlPJOVvU1zmqNBN5FqiIYDYw/viewform?pli=1"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
                  >
                    Get Involved
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
