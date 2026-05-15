import { X } from "lucide-react";
import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export default function Popup({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ open, setOpen }}>
      {children}
    </PopupContext.Provider>
  );
}

export function Trigger({ children }) {
  const { setOpen } = useContext(PopupContext);

  return (
    <div
      onClick={() => setOpen(true)}
      className="inline-block cursor-pointer w-full"
    >
      {children}
    </div>
  );
}

export function Content({ children }) {
  const { open, setOpen } = useContext(PopupContext);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-md rounded-lg bg-gray-900 p-4 shadow-xl">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-xl"
        >
          <X />
        </button>

        {children}
      </div>
    </div>
  );
}
