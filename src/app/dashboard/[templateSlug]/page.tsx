"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/content-templates";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import Editor from "./_components/Editor";
import { chatSession } from "@/lib/gemini";
import axios from "axios";

export interface TemplateSlugProps {
  templateSlug: string;
}

// getting template info from request params
const TemplatePage = ({ params }: { params: TemplateSlugProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const generateAIContent = async (formData: FormData) => {
    setIsLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };
      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAiPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;
      const result = await chatSession.sendMessage(finalAiPrompt); //once we get the result, inject that to current state
      setAiOutput(result.response.text());

      // send the data to api route to persist in the database.
      const response = await axios.post("/api/", {
        title: dataSet.title,
        description: result.response.text(),
        templateUsed: selectedTemplate?.name,
      });
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };

  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>

      {/* input form */}
      <form action={onSubmit}>
        <div className="flex flex-col gap-4 p-5 mt-5 bg-white">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              <label htmlFor="">{form.label}</label>
              {form.field === "input" ? (
                <div className="mt-5">
                  <Input name="title" />
                </div>
              ) : (
                <div className="mt-5">
                  <Textarea name="description" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="mt-5" type="submit">
          {isLoading ? <Loader className="animate-spin" /> : "Generate Content"}
        </Button>
      </form>

      {/* output / editor */}

      <div className="my-10 mb-10 ">
        <Editor value={isLoading ? "Wait for it..." : aiOutput} />
      </div>
    </div>
  );
};

export default TemplatePage;
