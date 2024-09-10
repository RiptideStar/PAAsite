import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About Penn Autism Alliance</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Penn Autism Alliance is dedicated to supporting individuals with autism and their families through education and community engagement in the Philadelphia area. We strive to create a more inclusive and understanding society for people on the autism spectrum.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="text-lg mb-4">
            Founded in 2020, Penn Autism Alliance began as a small group of passionate students at the University of Pennsylvania who wanted to make a difference in the lives of individuals with autism.
          </p>
          <p className="text-lg">
            Over the years, we&apos;ve grown into a vibrant organization offering various programs and support services, always staying true to our core mission of fostering understanding and inclusion.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ariana Javaheri', role: 'Co-President', image: '/team/ariana.jpg' },
              { name: 'Melissa Liu', role: 'Co-President', image: '/team/melissa.jpg' },
              { name: 'Hannah Moss', role: 'VP of Outreach', image: '/team/hannah.jpg' },
              { name: 'Sydney Bianco', role: 'VP of Outreach', image: '/team/sydney.jpg' },
              { name: 'Allie Frydrych', role: 'VP of Events', image: '/team/Allie-Frydrych.jpg' },
              { name: 'Ananya Madduri', role: 'VP of Finance', image: '/team/ananya.jpg' },
              { name: 'Rayyan Shaik', role: 'Tennis Lead', image: '/team/rayyan.jpg' },
              { name: 'Suraj Neelamagam', role: 'Tennis Lead', image: '/team/suji.jpg' },
              { name: 'Kyle Zhang', role: 'Tennis Lead', image: '/team/kyle.jpg' },
              { name: 'Emily Hoff', role: 'Dance Lead', image: '/team/Emily-Hoff.JPG' },
              { name: 'Anne Bolt', role: 'Dance Lead', image: '/team/Anne-Bolt.jpg' },
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
      </main>
    </div>
  );
}
