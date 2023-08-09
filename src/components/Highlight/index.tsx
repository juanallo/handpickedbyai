const Highlight = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <figure className="flex justify-center items-center flex-col max-w-md">
        <img
          height={500}
          src="https://cdn.midjourney.com/7fc3f1e5-b914-4990-a9c8-b00eeb0b51f7/0_0_384_N.webp"
          alt="Golden Gate Bridge at night"
        />
        <figcaption className="text-center text-xs">
          {
            "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean."
          }
        </figcaption>
      </figure>
    </div>
  );
};

export default Highlight;
