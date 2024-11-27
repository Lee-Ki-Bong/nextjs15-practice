import { formatDate } from "@/lib/utils";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import markdownit from "markdown-it";
import DOMPurify from "isomorphic-dompurify";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

const md = markdownit();

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  if (!post) return notFound();

  // 마크다운 HTML로 변환하면서 XSS 방지
  const parsedContent = md.render(post?.pitch || "");
  const sanitizedContent = DOMPurify.sanitize(parsedContent); // HTML 정화

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

          <hr className="divider" />

          <h3 className="text-30-bold">Pitch Details</h3>
          {sanitizedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
