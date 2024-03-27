import Image from "next/image";

export default function ProjectCard({tittle, description, image, link, isExpanded}) {

    const handleClick = () => {
        window.open(link, "_blank");
    };

    return (
            <div className="px-2">
                <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
                    <div className="flex justify-between items-center p-2  gap-x-2 mt-14 ">
                        <Image
                        onClick={handleClick}
                        width={200}
                        height={200}
                        className="w-14 h-14 rounded-full cursor-pointer object-cover"
                        src={image}
                        alt="project logo"/>

                    
                        <div className="p-4 rounded-lg shadow-md relative ">
                            <p className="text-sm font-bold">{tittle}</p>
                            <p className="text-xs">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
  }