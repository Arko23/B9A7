

const Banner = () => {
    return (
        <section className=" mt-14 mx-auto rounded-3xl w-[1200px] ">
      <div
        className="hero min-h-[500px] rounded-xl"
        style={{
          backgroundImage: 'url("https://png.pngtree.com/background/20230519/original/pngtree-man-with-chef-coat-working-in-kitchen-of-a-restaurant-close-picture-image_2662771.jpg")',
          backgroundSize: 'contain',
        }}
      >
        <div className="hero"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full p-10">
            <h1 className="mb-5 text-5xl px-5 text-white font-extrabold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5 px-7 text-white font-normal text-xl">
            Unleash Your Culinary Creativity: Enroll Today and Master the Art of Cooking with Our Expert Chefs
            </p>
            <div className="flex flex-col lg:flex-row gap-5 justify-center">
            <button className="rounded-full bg-green-400 p-5 hover:border-4 border-white text-xl text-white font-bold">Explore Now</button>
            <button className="rounded-full border-4 bg-transparent border-green-400 p-5 hover:border-4 border-white hover:border-red-500 text-xl text-white font-bold">Our feedback</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Banner;