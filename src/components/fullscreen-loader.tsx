import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
  label?: string;
}

export const FullsreenLoader = ({ label }: FullscreenLoaderProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-2">
      <LoaderIcon className="size-6 text-muted animate-spin" />
      {label && <p className="text-sm text-muted">{label}</p>}
    </div>
  );
};
