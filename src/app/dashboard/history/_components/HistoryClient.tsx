"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Import necessary table components from the UI library.
import { format } from "date-fns"; // Import date formatting functions from date-fns library.
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"; // Import dialog components from the UI library.
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"; // Import alert dialog components from the UI library.
import { Button } from "@/components/ui/button"; // Import button component from the UI library.
import { CopyIcon } from "lucide-react"; // Import CopyIcon from the lucide-react library.

// Define the interface for a history item.
interface HistoryItem {
  id: string;
  templateUsed: string;
  title: string | null;
  description: string;
  createdAt: Date;
}

// Define the interface for the HistoryClient component props.
interface HistoryClientProps {
  userHistory: HistoryItem[];
}

// Create a functional component named HistoryClient, responsible for displaying user history.
const HistoryClient: React.FC<HistoryClientProps> = ({ userHistory }) => {
  // State to manage the displayed full description.
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );
  // State to manage the alert dialog content.
  const [alertInfo, setAlertInfo] = useState<{
    title: string;
    description: string;
  } | null>(null);

  // Function to truncate a description string to a specified word limit.
  const truncateDescription = (description: string, wordLimit: number) => {
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  // Function to copy text to clipboard and display a success or error alert.
  const handleCopy = (text: string) => {
    if (document.hasFocus()) {
      navigator.clipboard
        .writeText(text)
        .then(() =>
          setAlertInfo({
            title: "Copied",
            description: "Text copied to clipboard successfully.",
          })
        )
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          setAlertInfo({
            title: "Error",
            description: "Failed to copy text. Please try again.",
          });
        });
    } else {
      setAlertInfo({
        title: "Attention",
        description: "Please focus on the document to copy text.",
      });
    }
  };

  // Function to handle clicking on a description to display the full text.
  const handleDescriptionClick = (description: string) => {
    setSelectedDescription(description);
  };

  // Function to close the full description dialog.
  const closeDialog = () => {
    setSelectedDescription(null);
  };

  // Function to close the alert dialog.
  const closeAlert = () => {
    setAlertInfo(null);
  };

  // Return the JSX structure of the component.
  return (
    <>
      {/* Render a table to display user history */}
      <Table>
        {/* Table caption */}
        <TableCaption>Check out all your generated content here.</TableCaption>
        {/* Table header */}
        <TableHeader>
          <TableRow>
            {/* Table header cells */}
            <TableHead className="font-bold">Template</TableHead>
            <TableHead className="font-bold">Title</TableHead>
            <TableHead className="font-bold">Description</TableHead>
            <TableHead className="text-right font-bold">Created At</TableHead>
            <TableHead className="text-right font-bold">Copy</TableHead>
          </TableRow>
        </TableHeader>
        {/* Table body */}
        <TableBody>
          {/* Map over each history item and render a table row */}
          {userHistory.map((history) => (
            <TableRow key={history.id}>
              {/* Table cells for each history item */}
              <TableCell>{history.templateUsed}</TableCell>
              <TableCell className="w-[250px]">{history.title}</TableCell>
              <TableCell
                className="whitespace-pre-wrap cursor-pointer"
                onClick={() => handleDescriptionClick(history.description)}
              >
                {/* Truncate the description to 20 words and add "..." */}
                {truncateDescription(history.description, 20)}
              </TableCell>
              <TableCell className="text-right">
                {/* Format the creation date */}
                {format(history.createdAt, "MM/dd/yyyy")}
              </TableCell>
              <TableCell className="text-right">
                {/* Copy button */}
                <CopyIcon
                  onClick={() => handleCopy(history.description)}
                  className="ml-3 h-4 w-4 cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Conditional rendering of the full description dialog */}
      {selectedDescription && (
        <Dialog open={!!selectedDescription} onOpenChange={closeDialog}>
          <DialogContent className="max-w-md">
            {/* Dialog title and description */}
            <DialogTitle>Full Description</DialogTitle>
            <DialogDescription>
              {/* Display the full description in a scrollable container */}
              <div
                className="my-4 whitespace-pre-wrap max-h-[60vh] overflow-y-auto pr-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {selectedDescription}
              </div>
              {/* Copy button and close button */}
              <div className="flex justify-end mt-4">
                <Button
                  variant="secondary"
                  className="mr-2"
                  onClick={() => handleCopy(selectedDescription)}
                >
                  <CopyIcon className="mr-2 h-4 w-4" /> Copy
                </Button>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}

      {/* Conditional rendering of the alert dialog */}
      <AlertDialog open={!!alertInfo} onOpenChange={closeAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            {/* Dialog title and description */}
            <AlertDialogTitle>{alertInfo?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertInfo?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          {/* Dialog footer with OK button */}
          <AlertDialogFooter>
            <AlertDialogAction onClick={closeAlert}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

// Export the HistoryClient component as default.
export default HistoryClient;
