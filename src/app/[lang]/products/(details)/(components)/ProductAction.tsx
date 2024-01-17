import CustomAlert from "@/components/CustomAlert";
import IconBtn from "@/components/buttons/IconBtn";
import CustomBtn from "@/components/styled-component/custom/CustomBtn";
import FilledCx from "@/components/util/FilledCx";
import { svgs } from "@/components/util/SVGImages";
import { addProductToCart } from "@/providers/redux/features/cartSlice";
import { addProductToWishlist } from "@/providers/redux/features/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/providers/redux/hooks";
import { Dictionary } from "@/types/lang";
import { Product } from "@/types/product";
import { Stack, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";

interface ProductActionProps {
  product: Product;
  productLang: Dictionary["product"];
}
export default function ProductAction({
  product,
  productLang,
}: ProductActionProps) {
  const dispatch = useAppDispatch();
  const userCart = useAppSelector((state) => state.cart.userCart);
  const userWishlist = useAppSelector((state) => state.wishlist.userWishlist);
  const [open, setOpen] = useState(false);
  const [snackbarOpts, setSnackbarOpts] = useState<{
    msg: string | null;
    severity: "success" | "error";
  }>({
    msg: null,
    severity: "success",
  });
  const colorOpts = [
    "primary.main",
    "text.success",
    "text.alert",
    "text.primary",
  ];

  const handleSnackbarOpts = (msg: string, severity: "success" | "error") => {
    setSnackbarOpts({
      msg,
      severity,
    });
  };
  const iconBtns = [
    {
      key: "heart",
      label: "add to wishlist",
      onClick: () => {
        try {
          dispatch(addProductToWishlist(product));
          handleSnackbarOpts(productLang.productAddedWishlist, "success");
        } catch (error) {
          handleSnackbarOpts(productLang.productAddFailWishlist, "error");
        }
      },
      disabled:
        userWishlist.items.findIndex((item) => item.id === product.id) > -1,
    },
    {
      key: "cart",
      label: "add to cart",
      onClick: () => {
        try {
          dispatch(addProductToCart(product));
          handleSnackbarOpts(productLang.productAddedCart, "success");
        } catch (error) {
          handleSnackbarOpts(productLang.productAddFailCart, "error");
        }
      },
      disabled: userCart.items.findIndex((item) => item.id === product.id) > -1,
    },
    {
      key: "eye",
      label: "view product",
      onClick: () => {},
      disabled: false,
    },
  ];

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpts({
      msg: null,
      severity: "success",
    });
    setOpen(false);
  };

  useEffect(() => {
    if (!snackbarOpts.msg) return;
    setOpen(true);
  }, [snackbarOpts.msg]);
  return (
    <>
      <Stack sx={{ gap: "10px" }}>
        {colorOpts.map((color) => (
          <FilledCx key={color} size={30} bgColor={color} />
        ))}
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{
          marginTop: { xs: "58px", md: "auto", width: "100%" },
          gap: "10px",
        }}
      >
        <CustomBtn
          variant="contained"
          size="small"
          sx={{
            padding: "10px 20px",
          }}
        >
          <Typography variant="h6" color="text.light">
            {productLang.selectOptions}
          </Typography>
        </CustomBtn>
        <Stack sx={{ gap: "10px" }}>
          {iconBtns.map(({ key, label, onClick, disabled }) => (
            <IconBtn
              key={key}
              label={label}
              icon={svgs[key]}
              height={20}
              width={20}
              disabled={disabled}
              onClick={() => onClick?.()}
              sx={{
                padding: "10px",
                height: 40,
                width: 40,
                border: "1px solid",
                borderColor: "background.gray3",
                color: "text.primary",
              }}
            />
          ))}
        </Stack>
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <CustomAlert
          onClose={handleClose}
          severity={snackbarOpts.severity}
          sx={{ width: "100%" }}
        >
          {snackbarOpts.msg}
        </CustomAlert>
      </Snackbar>
    </>
  );
}
