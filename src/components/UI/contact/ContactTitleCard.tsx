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

const ContactTitleCard: React.FC = () => {
  const classes = useStyles();

  const { FloatingButton, target } = useScrollToTop();

  return (
    <CardLayout>
      <CardHeader
        title="How to contact to CoinMarketCap.Jp"
        subheader="Just contact to us if you have any question."
        titleTypographyProps={{ variant: "h5" }}
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
        <CardHeader subheader="Social Media Channel" />
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Facebook</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twitter</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Discord</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prinrest</div>
        <CardHeader subheader="Email: support@coinmarketcap.jp" />
        <CardHeader subheader="Address: 〒105-0011 Tokyo, Minato City, Shibakoen, 2 Chome−3−9" />
        <CardHeader subheader=" © 2022 CoinMarketCap.Jp. All rights reserved " />
      </List>
      <FloatingButton size="medium" color="secondary" />
    </CardLayout>
  );
};

export default ContactTitleCard;
