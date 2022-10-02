/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { Card, Divider, Typography, Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import Image from "next/image";
import { grey } from "@mui/material/colors";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

// Local imports
import Me from "../../common/me.jpg";
import {
  MainDetails,
  DetailsSummaryType,
  HeaderFields,
} from "../../../types/interfaces";
import themeContext from "../../../contexts/themeContext";

interface Props {
  mainDetails: MainDetails;
  detailsSummary: DetailsSummaryType;
  updateLang: any;
  locale: any;
  headerFileds: HeaderFields;
}

const Header: React.FC<Props> = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = (loc: string) => {
    console.log(loc);
    setAnchorEl(null);
    if (loc) props.updateLang(loc);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(anchorEl);
    setAnchorEl(event.currentTarget);
  };

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
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid item css={langStyle}>
          <Button
            id="language-button"
            aria-controls={open ? "select-language" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            value={props.locale}
            onClick={handleClick}
          >
            <TranslateIcon />
            <span>
              <Typography variant="body2">
                {props.locale === "en" ? "English" : "Español"}
              </Typography>
            </span>
          </Button>
          <span>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose("en")}
              MenuListProps={{
                "aria-labelledby": "language-button",
              }}
            >
              <MenuItem onClick={() => handleClose("en")}>English</MenuItem>
              <MenuItem onClick={() => handleClose("sp")}>Español</MenuItem>
            </Menu>
          </span>
        </Grid>
        <Grid item xs={12} css={titles}>
          <Typography
            variant="h2"
            paragraph
            css={titleOne}
            color="textSecondary"
          >
            {props.mainDetails.firstName.toLowerCase()}
          </Typography>
          <Typography variant="h2" paragraph color="primary" css={titleTwo}>
            {props.mainDetails.lastName.toUpperCase()}
          </Typography>
          <Typography variant="h5" paragraph css={titleThree}>
            {props.mainDetails.title}
          </Typography>
        </Grid>
        <Divider css={dividerInset} />
        <Grid container>
          <Grid item xs={12} md={3} css={contentStyle}>
            <Typography variant="subtitle1">
              {props.headerFileds.locationField}
            </Typography>
            <Typography variant="subtitle1">
              {`${props.detailsSummary.city}, ${props.detailsSummary.country}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} css={contentStyle}>
            <Typography variant="subtitle1">
              {props.headerFileds.emailField}
            </Typography>
            <Typography variant="subtitle1">
              {props.detailsSummary.email}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} css={contentStyle}>
            <Typography variant="subtitle1">
              {props.headerFileds.phoneField}
            </Typography>
            <Typography variant="subtitle1">
              {/*CONTENT.detailsSummary.phone */}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} css={contentStyle}>
            <Typography variant="subtitle1">
              {props.headerFileds.webField}
            </Typography>
            <Typography variant="subtitle1">
              {props.detailsSummary.web}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const headerStyle = css({
  minHeight: 600,
  alignItems: "stretch",
});

const langStyle = css({
  textAlign: "right",
  paddingTop: "10em",
  paddingBottom: 0,
  [themeContext.breakpoints.down("md")]: {
    paddingTop: "1em",
  },
  [themeContext.breakpoints.down("sm")]: {
    textAlign: "center",
  },
});

const cardStyle = css({
  paddingTop: 300,
  paddingBottom: 120,
  display: "flex",
  border: "none",
  boxShadow: "none",
  background: grey[50],
  [themeContext.breakpoints.down("md")]: {
    paddingTop: 60,
  },
});

const photoStyle = css({
  webkitFilter: "grayscale(100%)",
  filter: "grayscale(100%)",
  borderRadius: "50%",
  padding: "20%",
});

const titles = css({
  paddingTop: 190,
  [themeContext.breakpoints.down("md")]: {
    paddingTop: 30,
  },
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

export default Header;
