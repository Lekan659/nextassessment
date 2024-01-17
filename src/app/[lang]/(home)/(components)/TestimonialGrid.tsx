import { Box } from "@mui/material";
import Image from "next/image";

const testimonials = [
  "/images/testimonials/testimonials-1.png",
  "/images/testimonials/testimonials-2.png",
  "/images/testimonials/testimonials-3.png",
  "/images/testimonials/testimonials-4.png",
  "/images/testimonials/testimonials-5.png",
  "/images/testimonials/testimonials-6.png",
  "/images/testimonials/testimonials-7.png",
  "/images/testimonials/testimonials-8.png",
  "/images/testimonials/testimonials-9.png",
];
export default function TestimonialGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "17px 16px",
      }}
    >
      {testimonials.map((imgSrc, index) => (
        <Box
          key={`testimonial-${index}`}
          sx={{
            aspectRatio: "1/1",
            "&:hover :where(img)": {
              cursor: "pointer",
              filter: "brightness(50%)",
            },
          }}
          position="relative"
          width="100%"
          height={{ xs: "85px", sm: "95px", md: "143px" }}
        >
          <Image
            alt={`testimonial-${index}`}
            src={imgSrc}
            fill
            sizes="(max-width: 900px) 85px, (max-width: 1200px) 100px, 80px"
          />
        </Box>
      ))}
    </Box>
  );
}
