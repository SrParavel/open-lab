import Card from "./Card";
import { LuEye, LuHeart, LuTag } from "react-icons/lu";
import Stat from "./Stat";

type ProjectCardProps = {
  title: string;
  description: string;
  views: number;
  likes: number;
  picture: string;
  icon: string;
  tags: string[];
};

function ProjectCard({ title, description, views, likes, picture, icon, tags }: ProjectCardProps) {
  return (
    <Card className="bg-gray-50 hover:contrast-[95%] transition cursor-pointer aspect-square flex flex-col">
      <img src={picture || "https://placehold.co/600x400"} alt={title} className="object-cover min-h-0 w-full" />

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img
            src={icon || "https://placehold.co/100x100"}
            alt={`${title} icon`}
            className="size-10 rounded-lg object-cover"
          />
          <h3 className="font-bold text-lg">{title}</h3>
        </div>

        <div className="min-h-15">
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>

        <div className="flex gap-3 text-gray-500 text-sm">
          <Stat icon={LuEye} value={views} />
          <Stat icon={LuHeart} value={likes} />

          <div className="flex gap-2">
            {tags.slice(0, 1).map((tag, index) => (
              <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
            {tags.length > 1 && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                +{tags.length - 1}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
