type Props = {
  icon: React.ComponentType<{ className?: string }>;
  selected?: boolean;
  children: React.ReactNode;
};

function NavButton({ icon: Icon, selected, children }: Props) {
  return (
    <li
      className={`p-2 rounded-lg display flex gap-3 items-center font-semibold cursor-pointer transition hover:bg-gray-200 ${
        selected ? " text-gray-800" : "text-gray-400 "
      }`}
    >
      <Icon className="size-5" />
      {children}
    </li>
  );
}

export default NavButton;
