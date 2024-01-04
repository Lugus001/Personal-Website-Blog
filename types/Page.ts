import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
