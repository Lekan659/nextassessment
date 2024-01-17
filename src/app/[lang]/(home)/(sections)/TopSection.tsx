"use client";

import content1 from "@/assets/images/f1.jpg";
import content2 from "@/assets/images/f2.jpg";
import content3 from "@/assets/images/f3.jpg";
import content4 from "@/assets/images/f4.jpg";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Image from "next/image";
// import { useMediaQuery } from '../../../../hooks/mediaquery';

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  boxShadow: "none",
}));
// const mobilemode = useMediaQuery('(min-width: 500px)');

export default function TopItems() {
  return (
    <Box
    sx={{
      display: { xs: "block", md: "grid" }, 
      mb: "80px",
      padding: {
        xs: "24px 40px",
        lg: "80px 147px",
      },
      justifyContent: "center",
    }}
      gridTemplateColumns="repeat(10, 1fr)"
      gap={1}
    >
                  <style jsx>{`
        .container {
          margin: 50px;
        }
        Image {
          height: 20px;
        }
      `}</style>
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Item sx={{ 
          position: "relative",
          
          }}>
            
          <Image
            src={content1}
            alt="Some text"
            style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 600px) 95px, (max-width: 700px) 678px, 100vw"
          />
          <Box position="absolute" top="24px" left="24px">
            <Typography
              variant="subtitle2"
              fontWeight={700}
              textAlign="left"
              color="#2DC071"
            >
              5 items
            </Typography>
            <Typography
              variant="h1"
              fontSize="2.5rem"
              fontWeight={700}
              className="color-main"
            >
              Furniture
            </Typography>

            <Typography
              variant="subtitle2"
              className="color-main"
              fontWeight={700}
              textAlign="left"
            >
              Read More
            </Typography>
          </Box>
        </Item>
      </Box>
      <Box gridColumn="span 6">
        <Box sx={{ width: 1 }}>
          <Box
            gridTemplateColumns="repeat(12, 1fr)"
            gap={1}
            sx={{ display: { xs: "block", md: "grid" } }}
          >
            <Box gridColumn="span 12">
              <Item sx={{ position: "relative" }}>
                <Image
                  src={content2}
                  alt="Some text"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box position="absolute" top="24px" left="24px">
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="left"
                    color="#2DC071"
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize="1.5rem"
                    fontWeight={700}
                    className="color-main"
                  >
                    Furniture
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="color-main"
                    fontWeight={700}
                    textAlign="left"
                  >
                    Read More
                  </Typography>
                </Box>
              </Item>
            </Box>
            <Box gridColumn="span 6">
              <Item sx={{ position: "relative" }}>
                <Image
                  src={content3}
                  alt="Some text"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box position="absolute" top="24px" left="24px">
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="left"
                    color="#2DC071"
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize="1.5rem"
                    fontWeight={700}
                    className="color-main"
                  >
                    Furniture
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="color-main"
                    fontWeight={700}
                    textAlign="left"
                  >
                    Read More
                  </Typography>
                </Box>
              </Item>
            </Box>
            <Box gridColumn="span 6">
              <Item sx={{ position: "relative" }}>
                <Image
                  src={content4}
                  alt="Some text"
                  style={{ width: "100%", height: "auto" }}
                />
                <Box position="absolute" top="24px" left="24px">
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="left"
                    color="#2DC071"
                  >
                    5 items
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize="1.5rem"
                    fontWeight={700}
                    className="color-main"
                  >
                    Furniture
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="color-main"
                    fontWeight={700}
                    textAlign="left"
                  >
                    Read More
                  </Typography>
                </Box>
              </Item>
            </Box>
          </Box>
        </Box>
      </Box>



    </Box>
  );
}
