import { cn } from "@/lib/utils";
import Logo from "../Logo";

const Loader = ({ shaded }: { shaded?: boolean }) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 items-center text-muted-foreground gap-2 justify-center text-center ",
        {
          "bg-zinc-100": shaded,
          "my-auto mx-auto": !shaded,
        }
      )}
    >
      <Logo logo size="xl" />
      <span className="text-xs">Loading</span>
    </div>
  );
};
export default Loader;
