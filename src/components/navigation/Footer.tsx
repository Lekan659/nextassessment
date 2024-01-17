"use client";
import { Dictionary } from "@/types/lang";
import { Box, FormControl, Stack, TextField, Typography } from "@mui/material";
import SectionContainer from "../styled-component/containers/SectionContainer";
import CustomBtn from "../styled-component/custom/CustomBtn";
import CustomNextLink from "../styled-component/custom/CustomNextLink";
import FooterGrid from "../styled-component/grids/FooterGrid";

type TFooterItem = {
  key: string;
  text: string;
  href: string;
};

interface FooterItemProps {
  key: string;
  title: string;
  content: TFooterItem[];
}

interface FooterProps {
  footerLang: Dictionary["footer"];
}

export default function Footer({ footerLang }: FooterProps) {
  const footerItems: FooterItemProps[] = footerLang.items.map(
    ({ key, title, content }) => ({
      key,
      title,
      content: content.map(({ key: linkKey, text }) => ({
        key: linkKey,
        text,
        href: `/${key}/${linkKey}`,
      })),
    })
  );
  return (
    <footer>
      <SectionContainer
        sx={{
          padding: {
            xs: "70px 45px",
            lg: "50px 195px",
          },
        }}
      >
        <FooterGrid>
          {footerItems.map(({ key, title, content }) => (
            <FooterItem key={key} title={title} content={content} />
          ))}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 2",
              },
            }}
          >
            <Stack
              direction="column"
              alignItems="flex-start"
              sx={{ gap: "20px" }}
            >
              <Typography variant="h5">{footerLang.getInTouch}</Typography>
              <FormControl>
                <Stack>
                  <TextField
                    placeholder={footerLang.yourEmail}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        border: "1px solid",
                        borderRight: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        borderColor: "background.gray1",
                        "&.Mui-focused fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                      "& .MuiInputBase-input": {
                        backgroundColor: "background.gray2",
                      },
                    }}
                  />
                  <CustomBtn
                    variant="contained"
                    disableElevation
                    sx={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      color: "text.light",
                      padding: {
                        xs: "15px 25px",
                      },
                    }}
                  >
                    {footerLang.subscribe}
                  </CustomBtn>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "12px", color: "text.secondary" }}
                >
                  {footerLang.inputTip}
                </Typography>
              </FormControl>
            </Stack>
          </Box>
        </FooterGrid>
      </SectionContainer>
      <SectionContainer
        sx={{
          padding: {
            xs: "25px 45px",
            lg: "25px 195px",
          },
          backgroundColor: "background.lightGray",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
            color: "text.secondary",
          }}
        >
          {footerLang.copyright}
        </Typography>
      </SectionContainer>
    </footer>
  );
}
function FooterItem({ title, content }: FooterItemProps) {
  return (
    <footer>
      <Stack direction="column" alignItems="flex-start" sx={{ gap: "20px" }}>
        <Typography variant="h5">{title}</Typography>
        <Stack direction="column" alignItems="flex-start" sx={{ gap: "10px" }}>
          {content.map(({ key, text }) => (
            <CustomNextLink
              key={key}
              href="/"
              sx={{
                color: "text.secondary",
                fontWeight: 700,
                "&:hover ": { color: "primary.main" },
              }}
            >
              {text}
            </CustomNextLink>
          ))}
        </Stack>
      </Stack>
    </footer>
  );
}
