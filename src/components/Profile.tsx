type Props = {
  name: string;
  email: string;
  avatar: string;
};

function Profile({ name, email, avatar }: Props) {
  return (
    <div className="flex items-center gap-2 hover:bg-slate-50 cursor-pointer transition">
      <span className="bg-purple-400 text-white font-bold rounded-full size-12 flex items-center justify-center">
        A
      </span>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4 className="text-sm text-slate-500">{email}</h4>
      </div>
    </div>
  );
}

export default Profile;
