import Link from "next/link";
import RightArrowIcon from "../icons/RightArrow";

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
        return (
          <li key={page.id}>
            <Link
              title={`Image posted ${page.date}`}
              href={`/archive/${page.id}`}
              className="flex justify-between text-primary-color text-sm items-center py-2"
            >
              <div>{page.date}</div>
              <div>
                <RightArrowIcon />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Archive;
