import { contentTemplates } from "@/lib/content-templates";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);
  const [visibleTemplates, setVisibleTemplates] = useState(contentTemplates);
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  useEffect(() => {
    let newTemplateList;
    if (searchCategory === "All") {
      newTemplateList = contentTemplates;
    } else if (searchCategory) {
      newTemplateList = contentTemplates.filter(
        (item) => item.category === searchCategory
      );
    } else {
      newTemplateList = contentTemplates;
    }

    if (searchInput) {
      newTemplateList = newTemplateList.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setTemplateList(newTemplateList);

    // Animate out
    setVisibleTemplates([]);

    // Animate in after a short delay
    setTimeout(() => {
      setVisibleTemplates(newTemplateList);
    }, 66.67);
  }, [searchCategory, searchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-5 mt-5">
      {templateList.map((template) => (
        <div
          key={template.slug}
          className={`relative transition-all duration-300 ${
            visibleTemplates.includes(template)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href={`/dashboard/${template.slug}`}
            className="bg-white w-full rounded-lg h-[180px] py-4 px-4 text-center flex flex-col justify-center transition duration-300 transform hover:scale-105 hover:shadow-md"
          >
            <template.icon className="h-10 w-10 mx-auto" />
            <h2 className="font-semibold mt-5">{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
