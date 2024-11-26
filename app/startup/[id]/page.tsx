import { formatDate } from "@/lib/utils";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const { data: post } = await sanityFetch({
    query: STARTUP_BY_ID_QUERY,
    params: { id },
  });
  if (!post) return notFound();

  return (
    <>
      {/** 페이지 상단에 표시되는 정보 */}
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>

        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <Image
          src={post.image}
          alt="thumbnail"
          layout="responsive" // 반응형 레이아웃
          width={16} // 종횡비를 결정
          height={9}
          className="rounded-xl"
        />

        {/** 페이지 내용 */}
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post.author.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>
        </div>

        <hr className="divider" />
      </section>

      {/** 페이지 내용업데이트 감지 */}
      <SanityLive />
    </>
  );
};

export default page;
