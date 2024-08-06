import React from "react";
import { CategoryProps } from "./Categories";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const CategoryItem = ({ name, value }: CategoryProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const isSelected = currentCategory === value;

  const handleOnClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          category: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
  };

  // Add hover styles
  const buttonStyles = cn(
    "py-2 px-4 text-sm border rounded-full flex items-center cursor-pointer ease-in-out duration-200",
    {
      "bg-white hover:bg-gray-200": !isSelected,
      "bg-black text-white": isSelected,
    }
  );

  return (
    <button onClick={handleOnClick} className={buttonStyles}>
      {name}
    </button>
  );
};

export default CategoryItem;
