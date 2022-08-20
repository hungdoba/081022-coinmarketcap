import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { CardHeader, Divider, List } from "@material-ui/core";
import CardLayout from "../../templates/CardLayout";

import FilterStatusUpdateList from "../updates/atoms/FilterStatusUpdateList";
import { useScrollToTop } from "../../../common/hooks/useScrollToTop";

const useStyles = makeStyles((theme: Theme) => ({
  statusUpdateList: {
    flex: 1,
    overflow: "scroll",
    paddingBottom: 8,
  },
}));

const AboutTitleCard: React.FC = () => {
  const classes = useStyles();

  const { FloatingButton, target } = useScrollToTop();

  return (
    <CardLayout>
      <CardHeader
        title="About CoinMarketCap.jp"
        subheader={`Last Updated: 2020/12/02`}
        titleTypographyProps={{ variant: "h6" }}
        subheaderTypographyProps={{ variant: "caption" }}
        action={<FilterStatusUpdateList />}
      />
      <Divider />
      <List
        dense
        disablePadding
        className={classes.statusUpdateList}
        ref={target}
      >
        <CardHeader
          subheader="
          CoinMarketCap.Jp is the world's most-referenced price-tracking website
          for cryptoassets in the rapidly growing cryptocurrency space.
        "
        />
        <CardHeader
          subheader="
          Its mission is to make crypto discoverable and efficient globally by
          empowering retail users with unbiased, high quality and accurate
          information for drawing their own informed conclusions.
        "
        />
        <CardHeader
          subheader="
          Its mission is to make crypto discoverable and efficient globally by
          empowering retail users with unbiased, high quality and accurate
          information for drawing their own informed conclusions.
        "
        />
        <CardHeader
          subheader="
          Founded by Kabeya Suzuki in May 2019, CoinMarketCap.Jp has quickly
          grown to become the most trusted source by users, institutions, and
          media for comparing thousands of cryptoassets and is commonly cited by
          NHK, Bloomberg, and other major news outlets. (Even the U.S.
          government uses CoinMarketCap's data for research and reports!)
        "
        />
        <CardHeader
          subheader="
          Through the acquisition, CoinMarketCap plans to tap into its parent
          company's extensive resources to acquire more in-depth data into
          projects, reduce information asymmetry in the crypto industry and
          bring higher-quality data to its hundreds of millions of users.
        "
        />
        <CardHeader
          subheader="
          This move should boost demand for CryptoCompare; a tool that helps
          individuals analyze which currencies perform particularly well or
          poorly based on market trends, financial indicators like volatility
          levels versus CPI and Bitcoin Value vs. JPY values
        "
        />
        <CardHeader subheader=" © 2022 CoinMarketCap.Jp. All rights reserved " />
      </List>
      <FloatingButton size="medium" color="secondary" />
    </CardLayout>
  );
};

export default AboutTitleCard;
