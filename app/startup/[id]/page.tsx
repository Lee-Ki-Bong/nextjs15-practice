import { sanityFetch } from "@/sanity/lib/live";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const { data: post } = await sanityFetch({
    query: STARTUP_BY_ID_QUERY,
    params: { id },
  });
  if (!post) return notFound();

  return <div>page {id}</div>;
};

export default page;
