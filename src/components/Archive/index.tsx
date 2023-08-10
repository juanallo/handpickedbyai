import ArrowIcon from "./Arrow";

export interface Page {
  id: string;
  date: string;
}

export interface ArchiveProps {
  pages: Array<Page>;
}

const Archive = ({ pages = [] }: ArchiveProps) => {
  return (
    <ul className="w-full">
      {pages.map((page) => {
        return <li key={page.id} className="flex justify-between text-primary-color text-sm"><div>{page.date}</div> <div><ArrowIcon /></div></li>;
      })}
    </ul>
  );
};

export default Archive;
