import React from 'react'
import Navbar from './Navbar'

const events = [
  {
    title: "Startup Expo",
    desc: "A showcase of innovative student-led startups, inspiring business ideas, and groundbreaking projects at NIT Raipur.",
    btn: "Explore Expo"
  },
  {
    title: "HackBattle",
    desc: "A thrilling hackathon where teams build tech solutions to real-world problems under intense time pressure.",
    btn: "Join HackBattle"
  },
  {
    title: "Pitch Perfect",
    desc: "A pitching competition where young entrepreneurs present their ideas to investors, mentors, and industry experts.",
    btn: "Pitch Your Idea"
  },
  {
    title: "Workshops & Talks",
    desc: "Interactive workshops and guest sessions led by founders, innovators, and startup mentors across the country.",
    btn: "View Schedule"
  }
];

const Home = () => {
  return (

    <div>
      <Navbar />
      {/* <div className="mt-20 text-black">this is</div> */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">

          {/* Glow background circle */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-300/20 blur-3xl z-30"></div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Where Ideas Take Flight
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Join our vibrant community of innovators, dreamers, and doers. Transform your ideas into impactful ventures with E-Cell.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Join Us
            </button>

            <button className="px-8 py-3 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition">
              Explore Events
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">

          {/* Cool Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tight">
            Igniting Ideas Since 2015
          </h2>

          {/* Short underline accent */}
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

          {/* Content */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-32">
            <div className="relative w-full md:w-[380px] h-[320px] flex justify-center items-center">

              {/* Photo 1 */}
              <img
                src='https://tse3.mm.bing.net/th/id/OIP.SdpBJdswjZ_RGn_TVGn3egHaHa?pid=Api&P=0&h=180'
                alt="E-Cell NITRR"
                className="absolute w-72 h-48 object-cover rounded-xl shadow-xl border border-gray-200
               rotate-[-10deg] -translate-x-20 -translate-y-4 z-0
               hover:rotate-[-6deg] transition-all duration-500 ease-out hover:scale-105 hover:z-15"
              />

              {/* Photo 2 */}
              <img
                src="https://pbs.twimg.com/media/Fheyl_UacAA_HV0?format=jpg&name=large"
                alt="E-Cell NITRR"
                className="absolute w-72 h-48 object-cover rounded-xl shadow-xl border border-gray-200
               rotate-[8deg] translate-x-10 translate-y-10 z-0
               hover:rotate-[4deg] transition-all duration-500 ease-out hover:scale-105 hover:z-15"
              />

            </div>

            <div className="home-about">
              <p className="mt-10 text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                E-Cell NIT Raipur is the entrepreneurial hub of the institute—created
                to inspire innovation, foster problem-solving, and empower students to
                transform ideas into impactful ventures. Through events, workshops,
                mentorship programs, and national-level competitions, we cultivate a
                thriving startup ecosystem driven by curiosity and passion.
              </p>
            </div>
          </div>


        </div>
      </section>

      <section className="py-24 bg-gray-50 px-6" id="events">
        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight">
            Events That Inspire Innovation
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

          {/* Cards */}
          <div className="mt-16 flex flex-wrap justify-center gap-10">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="
        bg-white 
        rounded-xl 
        p-8 
        border 
        border-gray-200 
        flex 
        flex-col
        w-[300px]
        shadow-md
        hover:shadow-xl
        transition 
        duration-300 
        transform
        hover:-translate-y-2
        hover:scale-[1.03]
      "
              >
                <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>

                <p className="mt-4 text-gray-600 leading-relaxed flex-grow">
                  {event.desc}
                </p>

                <button className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  {event.btn}
                </button>
              </div>
            ))}
          </div>



        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-tight">
            Glimpses of E-Cell Moments
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>

          {/* Photos Row */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 relative">

            {/* Image 1 */}
            <img
              src="https://images.pexels.com/photos/3182770/pexels-photo-3182770.jpeg"
              alt="glimpse"
              className="w-64 h-44 object-cover rounded-xl shadow-lg border 
        border-gray-200 transform rotate-[-8deg] hover:rotate-[-4deg] 
        hover:scale-105 transition-all duration-500"
            />

            {/* Image 2 */}
            <img
              src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
              alt="glimpse"
              className="w-64 h-44 object-cover rounded-xl shadow-lg border
        border-gray-200 transform rotate-[5deg] hover:rotate-[2deg]
        hover:scale-105 transition-all duration-500"
            />

            {/* Image 3 */}
            <img
              src="https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg"
              alt="glimpse"
              className="w-64 h-44 object-cover rounded-xl shadow-lg border
        border-gray-200 transform rotate-[-4deg] hover:rotate-[-1deg]
        hover:scale-105 transition-all duration-500 z-10"
            />

            {/* Image 4 */}
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
              alt="glimpse"
              className="w-64 h-44 object-cover rounded-xl shadow-lg border
        border-gray-200 transform rotate-[7deg] hover:rotate-[3deg]
        hover:scale-105 transition-all duration-500"
            />

            

          </div>

          {/* View More Button */}
          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md">
              View Gallery
            </button>
          </div>

        </div>
      </section>


    </div>
  )
}

export default Home
