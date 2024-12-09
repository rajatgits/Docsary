import { BsCloudCheck } from "react-icons/bs";

interface DocumentInputProps {
  title: string;
}

export const DocumentInput = ({ title }: DocumentInputProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">{title}</span>
      <BsCloudCheck />
    </div>
  );
};
