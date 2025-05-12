type Props = {
  name: string;
  email: string;
};

function Profile({ name, email }: Props) {
  return (
    <div className="p-4 flex gap-4 items-center border border-gray-200 rounded-lg">
      <span className="size-12 flex items-center justify-center bg-gray-800 text-gray-50 font-bold rounded-lg">A</span>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <h4 className="text-xs">{email}</h4>
      </div>
    </div>
  );
}

export default Profile;
