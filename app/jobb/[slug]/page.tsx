import { getJobBySlug } from "@/lib/jobs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import JobDetailClient from "./job-detail-client";

interface JobPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Jobb inte funnet - amplify",
      description: "Det begärda jobbet kunde inte hittas.",
    };
  }

  const title = `${job.title} - amplify`;
  const description = `${job.description.substring(0, 160)}...`;

  return {
    title,
    description,
    keywords: [
      job.title,
      job.location,
      "jobb",
      "karriär",
      "amplify",
      "digital utveckling",
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "amplify",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: `https://weareamplify.se/jobb/${slug}`,
    },
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
