import React, { useEffect } from "react";
import { Theme, makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCompanies, selectCompanies } from "../../features/companiesSlice";
import CompaniesCard from "../../components/UI/updates/organisms/CompaniesCard";
import PrivacyTitleCard from "../../components/UI/privacy/PrivacyTitleCard";

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100%",
    "& > .MuiGrid-item": {
      height: "100%",
    },
  },
  innerWrapper: {
    height: "100%",
    "& > .MuiGrid-item:not(:last-child)": {
      marginBottom: theme.spacing(3),
    },
  },
}));

const Privacy: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompanies);

  useEffect(() => {
    document.title = "CoinMarketCap | Privacy Policy";
    if (!companies.value && companies.status === "IDLE") {
      dispatch(fetchCompanies());
    }
  }, [dispatch, companies.value, companies.status]);

  return (
    <Grid
      container
      className={classes.wrapper}
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item xs={12} lg={8} xl={9}>
        <PrivacyTitleCard />
      </Grid>
      <Hidden mdDown>
        <Grid item lg={4} xl={3}>
          <Grid container className={classes.innerWrapper} spacing={0}>
            <Grid
              item
              xs={12}
              style={{ height: `calc(50% - ${theme.spacing(3) / 2}px)` }}
            >
              <CompaniesCard coinId="bitcoin" />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ height: `calc(50% - ${theme.spacing(3) / 2}px)` }}
            >
              <CompaniesCard coinId="ethereum" />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Privacy;