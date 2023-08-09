export interface HighlightProps {
  image: string;
  caption: string;
}

const Highlight = ({ image, caption }: HighlightProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <figure className="flex justify-center items-center flex-col max-w-md">
        <img width={600} src={image} alt={caption} />
        <figcaption className="text-center text-xs text-primary-color px-4">
          {caption}
        </figcaption>
      </figure>
    </div>
  );
};

export default Highlight;
