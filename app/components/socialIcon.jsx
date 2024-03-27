import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";


export default function SocialIcon({link, content, RiIcon }) {

    return (
        <Tooltip showArrow={true} content={content} color="#161616">
        <Link
          target="_blank"
          href={link}
          className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
        >
          <RiIcon className="text-xl" />
        </Link>
      </Tooltip>
    );
  }