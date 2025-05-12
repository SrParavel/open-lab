type Props = {
  icon: React.ComponentType<{ className?: string }>;
};

function IconButton({ icon: Icon }: Props) {
  return (
    <button className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
      <Icon className="size-6 text-gray-600" />
    </button>
  );
}

export default IconButton;
