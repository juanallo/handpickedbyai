export interface HighlightProps {
  id: string;
  image: string;
  caption: string;
  date?: string
}

const Highlight = ({ image, caption }: HighlightProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <figure className="flex justify-center items-center flex-col max-w-md relative min-h-[500px]">
        <img width={600} src={image} alt={caption} />
        <figcaption className="text-center text-xs text-primary-color p-4 absolute bottom-0 bg-secondary-bg/[0.6]">
          {caption}
        </figcaption>
      </figure>
    </div>
  );
};

export default Highlight;
