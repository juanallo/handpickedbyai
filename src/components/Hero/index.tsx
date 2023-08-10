import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <Link href="/" className="flex flex-col gap-2" title="back to home">
        <h1 className="text-primary-color text-center font-monoton md:text-7xl text-5xl">
          Handpicked by AI
        </h1>
        <p className="text-center text-lg">
          AI generated images handpicked by AI
        </p>
      </Link>
    </div>
  );
};

export default Hero;
