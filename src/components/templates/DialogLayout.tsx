import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  dialogPaper: {
    borderRadius: 12,
  },
  title: {
    maxWidth: "calc(100% - 48px)",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

interface Props {
  open: boolean;
  toggleClose: () => void;
  title: string;
  subheader?: string;
  contentText?: JSX.Element | string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  referralLink?: string;
}

const DialogLayout: React.FC<Props> = ({
  children,
  open,
  toggleClose,
  title,
  subheader,
  contentText,
  maxWidth = "sm",
  referralLink,
  ...other
}) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      open={open}
      onClose={toggleClose}
      maxWidth={maxWidth}
      fullWidth={true}
    >
      <DialogTitle disableTypography>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {subheader && (
          <Typography variant="caption" color="textSecondary">
            {subheader}
          </Typography>
        )}
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={toggleClose}
        >
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent {...other}>
        {contentText && <DialogContentText>{contentText}</DialogContentText>}
        {children}
      </DialogContent>
      <Divider />
      <Button
        onClick={() => window.open(referralLink, "_blank")}
        size="large"
        color="secondary"
        children="Trading Now"
        endIcon=">>>"
      />
    </Dialog>
  );
};

export default DialogLayout;
