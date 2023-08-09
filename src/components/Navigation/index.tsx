import ArrowIcon from "./Arrow";

export interface Page {
  id: string;
  date: string;
}

export interface NavigationProps {
  pages: Array<Page>;
}

const Navigation = ({ pages = [] }: NavigationProps) => {
  return (
    <ul className="w-full">
      {pages.map((page) => {
        return <li key={page.id} className="flex justify-between text-primary-color text-sm"><div>{page.date}</div> <div><ArrowIcon /></div></li>;
      })}
    </ul>
  );
};

export default Navigation;
