"use client";

import SectionContainer from "@/components/styled-component/containers/SectionContainer";
import { Box } from "@mui/material";
import Image from "next/image";

export default function ClientsSection() {
  return (
    <SectionContainer
      sx={{
        padding: { xs: "110px 0 111px", sm: "50px 45px", lg: "50px 195px" },
        backgroundColor: "background.lightGray",
      }}
    >
      <Box
        sx={{
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            md: "repeat(6, minmax(0, 1fr))",
          },
          gap: { xs: "60px", md: "30px" },
        }}
      >
        <Image src="/svgs/hooli.svg" alt="hooli" height={34} width={103} />
        <Image src="/svgs/lyft.svg" alt="lyft" height={59} width={83} />
        <Image
          src="/svgs/robinhood.svg"
          alt="robinhood"
          height={75}
          width={102}
        />
        <Image src="/svgs/stripe.svg" alt="stripe" height={42} width={103} />
        <Image src="/svgs/aws.svg" alt="aws" height={62} width={103} />
        <Image src="/svgs/reddit.svg" alt="reddit" height={72} width={76} />
      </Box>
    </SectionContainer>
  );
}
