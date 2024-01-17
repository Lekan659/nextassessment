import { Dictionary } from "@/types/lang";
import { Post } from "@/types/post";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ImgSVG from "../styled-component/ImgSVG";
import CardDescContainer from "../styled-component/containers/CardDescContainer";
import { svgs } from "../util/SVGImages";

interface PostCardProps {
  post: Post;
  postLang: Dictionary["posts"];
}
export default function PostCard({ post, postLang }: PostCardProps) {
  return (
    <Stack
      direction="column"
      width={{
        xs: "295px",
        sm: "320px",
      }}
      boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.10)"
      bgcolor="background.light"
    >
      <Box position="relative" height={300} width="100%">
        <Image
          src={post.imgSrc}
          alt={post.title}
          sizes="(min-width: 600px) 320px, 295px"
          fill
        />
        {post.tag ? (
          <Box
            position="absolute"
            top="20px"
            left="30px"
            bgcolor="text.danger"
            padding="1px 10px"
            width="fit-content"
          >
            <Typography
              variant="h6"
              textTransform="uppercase"
              color="text.light"
            >
              {post.tag}
            </Typography>
          </Box>
        ) : null}
      </Box>
      <CardDescContainer sx={{ width: "100%" }}>
        <Stack
          justifyContent="flex-start"
          gap="15px"
          width="100%"
          sx={{
            "& :where(span)": { fontSize: "12px", color: "text.secondary" },
          }}
        >
          <Typography variant="body1" sx={{ "&": { color: "text.disabled" } }}>
            Google
          </Typography>
          <Typography variant="body1">Trending</Typography>
          <Typography variant="body1">New</Typography>
        </Stack>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {post.desc}
        </Typography>
        <Stack justifyContent="space-between" width="100%" padding="15px 0">
          <Stack sx={{ gap: "5px" }}>
            <ImgSVG
              svg={svgs.clock}
              sx={{ height: 16, width: 16, color: "primary.main" }}
            />
            <Typography fontSize="12px" variant="body1">
              {post.date}
            </Typography>
          </Stack>
          <Stack sx={{ gap: "5px" }}>
            <ImgSVG svg={svgs.chart} sx={{ height: 14, width: 16 }} />
            <Typography fontSize="12px" variant="body1">
              {"10 comments"}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          gap="10px"
          width="100%"
          sx={{
          cursor:"pointer",
            "&:hover :where(h6)": { color: "primary.main" },
          }}
        >
          <Typography color="text.secondary" variant="h6">
            {postLang.learnMore}
          </Typography>
          <ImgSVG
            svg={svgs.arrowNext}
            sx={{ height: 16, width: 9, color: "primary.main" }}
          />
        </Stack>
      </CardDescContainer>
    </Stack>
  );
}
