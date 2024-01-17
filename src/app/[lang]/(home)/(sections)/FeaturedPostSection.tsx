import { Dictionary } from "@/types/lang";
import { Post } from "@/types/post";
import { Stack, Typography } from "@mui/material";

import postImg1 from "@/assets/images/post-img-1.png";
import postImg2 from "@/assets/images/post-img-2.png";
import postImg3 from "@/assets/images/post-img-3.png";
import PostList from "@/components/posts/PostList";
import SectionContainer from "@/components/styled-component/containers/SectionContainer";

const testPosts: Post[] = [
  {
    imgSrc: postImg1.src,
    tag: "NEW",
    title: `Loudest à la Madison #1 (L'integral)`,
    desc: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
    date: "22 April 2021",
  },
  {
    imgSrc: postImg2.src,
    tag: "NEW",
    title: `Loudest à la Madison #1 (L'integral)`,
    desc: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
    date: "22 April 2021",
  },
  {
    imgSrc: postImg3.src,
    tag: "NEW",
    title: `Loudest à la Madison #1 (L'integral)`,
    desc: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
    date: "22 April 2021",
  },
];
interface FeaturedPostSectionProps {
  featuredPostLang: Dictionary["home"]["featuredPosts"];
  postLang: Dictionary["posts"];
}
export default function FeaturedPostSection({
  featuredPostLang,
  postLang,
}: FeaturedPostSectionProps) {
  return (
    <SectionContainer sx={{ paddingY: "112px", gap: "80px" }}>
      <Stack direction="column" alignItems="center" sx={{ gap: "10px" }}>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          {featuredPostLang.practiceAdvice}
        </Typography>
        <Typography variant="h3" sx={{ color: "text.primary" }}>
          {featuredPostLang.featuredPosts}
        </Typography>
      </Stack>
      <PostList posts={testPosts} postLang={postLang} />
    </SectionContainer>
  );
}
