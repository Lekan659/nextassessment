import { Stack } from "@mui/material";
import NavLink from "./NavLink";

interface NavLinkListProps {
  links: string[];
  hasDropdown?: string[];
}
export default function NavLinkList({ links, hasDropdown }: NavLinkListProps) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: "30px", md: "15px" }}
      width="100%"
    >
      {links.map((link) => (
        <NavLink
          text={link}
          key={link}
          link="/"
          sx={{
            gap: { xs: "30px", md: "21px" },
            fontSize: { xs: "30px", md: "14px" },
            fontWeight: { xs: 400, md: 700 },
          }}
          isDropdown={hasDropdown && hasDropdown.includes(link)}
        />
      ))}
    </Stack>
  );
}
