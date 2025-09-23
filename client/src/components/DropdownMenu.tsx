import type { LucideIcon } from "lucide-react";

type DropdownMenuProps = {
  //   onSelect?: (id: string) => void;
  icon: LucideIcon;
};

function DropdownMenu({ icon }: DropdownMenuProps) {
  const Icon = icon;

  return (
    <button className="dropdown dropdown-end cursor-pointer">
      {Icon && <Icon className="size-5.5" />}
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li>
          <a>Item 1</a>
        </li>
      </ul>
    </button>
  );
}

export default DropdownMenu;
