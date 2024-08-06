import Auth from "@/components/Auth";
import { SearchIcon } from "lucide-react";
import React from "react";
import Categories from "./Categories";
import MobileNav from "./MobileNav";

const categories = [
  { name: "All", value: "All" },
  { name: "Social", value: "Social" },
  { name: "Lifestyle", value: "Lifestyle" },
  { name: "Writing", value: "Writing" },
  { name: "Development", value: "Development" },
  { name: "Miscellaneous", value: "Miscellaneous" },
];

const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex flex-col md:flex-row gap-2 mt-5 py-6 px-4 bg-white rounded">
        <div className="flex gap-2 items-center p-2 border rounded-full bg-white w-full md:w-1/5 md:min-w-[250px]">
          <SearchIcon className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none text-black flex-1"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <Categories items={categories} />
        </div>
        <div className="mt-2 md:mt-0 md:ml-auto flex justify-center">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default SearchDashboard;
