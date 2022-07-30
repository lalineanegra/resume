/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { Card, Divider, Typography, Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import TranslateIcon from "@mui/icons-material/Translate";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

// Local imports
import Me from "../common/me.jpg";
import { CONTENT } from "../data/content";

const headerStyle = css({
  minHeight: 600,
  alignItems: "stretch",
});
const cardStyle = css({
  paddingTop: 300,
  paddingBottom: 120,
  display: "flex",
  border: "none",
  boxShadow: "none",
  background: grey[50],
  // [theme.breakpoints.down("sm")]: {
  //   paddingTop: 80,
  // },
});

const photoStyle = css({
  webkitFilter: "grayscale(100%)",
  filter: "grayscale(100%)",
  borderRadius: "50%",
  padding: "20%",
});

const titles = css({
  paddingTop: 190,
  // [theme.breakpoints.down("sm")]: {
  //   paddingTop: 30,
  // },
});
const titleOne = css({
  paddingBottom: 0,
  marginBottom: 0,
  fontWeight: 100,
  color: "grey",
  marginLeft: 50,
  // [theme.breakpoints.down("sm")]: {
  //   margin: 10,
  // },
});
const titleTwo = css({
  paddingTop: 0,
  marginTop: 0,
  fontWeight: "bold",
  marginLeft: 50,
  // [theme.breakpoints.down("sm")]: {
  //   margin: 10,
  // },
});

const titleThree = css({
  marginLeft: 50,
  // [theme.breakpoints.down("sm")]: {
  //   margin: 10,
  // },
});

const contentStyle = css({
  paddingLeft: 50,
  paddingTop: 20,
  // [theme.breakpoints.down("sm")]: {
  //   padding: 10,
  // },
});

const dividerInset = css({
  margin: "0px 0 0 ${theme.spacing(5)}px",
  // [theme.breakpoints.down("sm")]: {
  //   margin: "0 auto",
  // },
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLang = () => {};

  return (
    <Grid container css={headerStyle}>
      <Grid item xs={12} md={4}>
        <Card css={cardStyle} sx={{ justifyContent: "center" }}>
          <Image
            src={Me}
            alt="Rodrigo Alonso"
            width="250"
            height="250"
            css={photoStyle}
          />
        </Card>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleLang}>
            <Typography textAlign="center">English</Typography>
          </MenuItem>
          <MenuItem onClick={handleLang}>
            <Typography textAlign="center">Español</Typography>
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid
          item
          md={12}
          sx={{ textAlign: "right", paddingTop: "10em", paddingBottom: 0 }}
        >
          <Button variant="text" onClick={handleOpenUserMenu}>
            <TranslateIcon />
            <span>
              <Typography variant="body1">English</Typography>
            </span>
          </Button>
        </Grid>
        <Grid item xs={12} css={titles}>
          <Typography
            variant="h2"
            paragraph
            css={titleOne}
            color="textSecondary"
          >
            {CONTENT.firstName.toLowerCase()}
          </Typography>
          <Typography variant="h2" paragraph color="primary" css={titleTwo}>
            {CONTENT.lastName.toUpperCase()}
          </Typography>
          <Typography variant="h5" paragraph css={titleThree}>
            {CONTENT.title}
          </Typography>
        </Grid>
        <Divider css={dividerInset} />
        <Grid container>
          <Grid item xs={12} md={3} css={contentStyle}>
            <Typography variant="subtitle1">Location</Typography>
            <Typography variant="subtitle1">
              {`${CONTENT.detailsSummary.city}, ${CONTENT.detailsSummary.country}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} css={contentStyle}>
            <Typography variant="subtitle1">Email</Typography>
            <Typography variant="subtitle1">
              {CONTENT.detailsSummary.email}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} css={contentStyle}>
            <Typography variant="subtitle1">Phone</Typography>
            <Typography variant="subtitle1">
              {/*CONTENT.detailsSummary.phone */}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} css={contentStyle}>
            <Typography variant="subtitle1">Web</Typography>
            <Typography variant="subtitle1">
              {CONTENT.detailsSummary.web}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
