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

const PrivacyTitleCard: React.FC = () => {
  const classes = useStyles();

  const { FloatingButton, target } = useScrollToTop();

  return (
    <CardLayout>
      <CardHeader
        title="Privacy Policy"
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
        <CardHeader subheader=" We not provide Trading service in our platform" />
        <CardHeader subheader=" This Privacy Policy (“Privacy Policy”) covers your access and use of this Website, coinmarketcap.com (the “Website”), as well as associated content, software, and mobile applications (collectively, the “Service”).  This Privacy Policy explains when and why and how we collect and use personal information about people who visit our Website or use our Services, the conditions under which we may disclose your personal information to others, and how we keep your personal information secure.  We may change this Privacy Policy from time to time so please check this page occasionally to ensure that you are happy with any changes. By using our Website or our Services, you are agreeing to be bound by this Privacy Policy.  " />
        <h2>What Information Do We Collect?</h2>
        <CardHeader subheader=" CoinMarketCap.Jp (“CoinMarketCap.Jp”, “we” or “us”) collects " />
        <CardHeader subheader=" (a) the e-mail addresses of those who communicate with us via email;" />
        <CardHeader subheader=" (b) aggregate information concerning what pages users access or visit" />
        <CardHeader subheader=" (c) information given by the user (such as survey information and/or site registrations)" />
        <CardHeader subheader=" (d) information related to your use of the Website and/or the mobile application, including IP address, Device ID, geographic location, and date and time of your request" />
        <CardHeader subheader=" (e) any other information that you might provide voluntarily. We might also collect your email address and your Wallet ID if you decide to participate to one of our campaigns." />
        <h2>How Do We Use the Information?</h2>
        <CardHeader subheader="To fulfill a contract or take steps linked to a contract such as processing your registration on our Website or sending you information about changes to our terms or policies" />
        <CardHeader subheader="Where it is necessary for purposes which are in CoinMarketCap’s legitimate interests such as (a) to provide the information or content you have requested; (b) to contact you about our programs, products, features or services; (c) to improve our services and for internal business purposes such as identification and authentication or customer service, portfolio tracking and user preference syncing between devices; (d) to ensure the security of our Website, by trying to prevent unauthorized or malicious activities; (e) to enforce compliance with our Terms of Use and other policies; (f) to help other organizations (such as copyright owners) to enforce their rights; and (g) to tailor content, advertisements, and offers for you or for other purposes disclosed at the time of collection." />
        <CardHeader
          subheader="If you do not wish to receive marketing information about our programs, products, features or services, you can opt-out of marketing communications.
Where you give us consent, such as (a) where you ask us to send marketing information to you via a medium where we need your consent, including alerts via mobile push notifications; (b) where you give us consent to place cookies and to use similar technologies; and (c) on other occasions where we ask you for consent, for any other purpose that might arise."
        />
        <CardHeader subheader="Where we are legally required to do so. We may also provide access to your personally identifiable information when legally required to do so, to cooperate with police investigations or other legal proceedings, to protect against misuse or unauthorized use of our Website, to limit our legal liability and protect our rights, or to protect the rights, property or safety of visitors of the Website or the public. In those instances, the information is provided only for that purpose." />
        <h2>Retention of Your Personal Information</h2>
        <CardHeader subheader="We retain information as long as it is necessary to provide the Services requested by you and others, subject to any legal obligations to further retain such information. Information associated with your account will generally be kept until it is no longer necessary to provide the Services or until you ask us to delete it or your account is deleted, whichever comes first. Additionally, we may retain information from deleted accounts to comply with the law, prevent fraud, resolve disputes, troubleshoot problems, assist with investigations, enforce the Terms of Use, and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy." />
        <h2>Questions</h2>
        <CardHeader subheader="Any questions about this Privacy Policy should be addressed to this e-mail address: legal@coinmarketcap.jp." />
        <CardHeader subheader=" © 2022 CoinMarketCap.Jp. All rights reserved " />
      </List>
      <FloatingButton size="medium" color="secondary" />
    </CardLayout>
  );
};

export default PrivacyTitleCard;
