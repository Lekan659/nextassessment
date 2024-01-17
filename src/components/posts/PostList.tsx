"use client";
import { Dictionary } from "@/types/lang";
import { Post } from "@/types/post";
import { Stack } from "@mui/material";
import PostGrid from "../styled-component/grids/PostGrid";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
  postLang: Dictionary["posts"];
}
export default function PostList({ posts, postLang }: PostListProps) {
  return (
    <PostGrid>
      {posts.map((post, index) => (
        <Stack
          key={`post-${index}`}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <PostCard post={post} postLang={postLang} />
        </Stack>
      ))}
    </PostGrid>
  );
}
