import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Author, Startup } from "@/sanity/types";

// 제너레이터로 뽑은 type 은 참조 타입은 참조 값만 가지고있어, Omit 으로 author 를 제외하고 다시 정의해서 사용해야함.
export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image = "http://placehold.co/900x600", // 기본값 설정,
    description,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        {/** Avata */}
        <Link href={`/user/${author?._id}`}>
          <Image
            src={"http://placehold.co/48x48"}
            alt={author?.name!}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      {/** description, image */}
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <Image
          src={image}
          alt={`Image of ${description}`}
          layout="responsive" // 반응형 레이아웃
          width={16} // 종횡비를 결정
          height={9}
          className="startup-card_img"
        />
      </Link>

      {/** detaile button */}
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
