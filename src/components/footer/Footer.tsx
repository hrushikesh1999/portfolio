import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import siteConfig from "../../configs/siteConfig";
import "./footer.css";

const Footer = () => {
  return (
    <Grid container className="footer">
      <Grid item className="footer-author">
        <Typography color="text.secondary"> | A Hrushikesh </Typography>
      </Grid>
      <Grid item>
        <Stack direction="row" spacing={2}>
          {siteConfig.author.accounts.map((account, i) => (
            <IconButton
              size="large"
              LinkComponent={Link}
              key={i}
              href={account.url}
              target="_blank"
              aria-label={account.label}
              color="primary"
            >
              <FontAwesomeIcon icon={account.icon} size="xs" />
            </IconButton>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
