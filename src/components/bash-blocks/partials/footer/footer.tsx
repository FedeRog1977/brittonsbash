import styles from './footer.module.scss';
import { Spacing, Grid, Typography, Stack } from '../../basics';
import { FC } from 'react';
import { SpacingTemp } from '../../basics/spacing-temp';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <SpacingTemp padding="xl">
      <Stack direction="vertical" alignHorizontal="center" spacing="md">
        <Grid
          alignColumns="auto auto"
          columnGap={15}
          justifyContent="center"
          alignItems="center"
        >
          <Grid columnItem={[1, 2]}>
            {/* TODO: make image component */}
            <img
              src="https://lewisbritton.com/images/logo/bash-logo.png"
              alt="logo"
              style={{ height: '48px' }}
            />
          </Grid>
          <Grid columnItem={[2, 2]}>
            <Grid alignRows="auto auto" justifyItems="start">
              <div className={styles.footerLogo}>BrittonsBashRC</div>
              <Typography variant="body" element="code" color="lightGrey">
                brittonsbash.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          alignColumns="auto auto"
          columnGap={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid columnItem={[1, 2]}>
            {/* TODO: make image component */}
            <img
              src="https://lewisbritton.com/images/monero/xmr.svg"
              alt="xmr"
              style={{ height: '15px' }}
            />
          </Grid>
          <Grid columnItem={[2, 2]}>
            <Typography variant="body" color="lightGrey">
              Monero Donations
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="footnote" element="code" color="lightGrey">
          <>
            4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5RPcM8KF6hDWGhj7
            <br />
            f37dfqwzGCqq1Vug13vmBkxoQARfNnrbNEcqsj
            <br />
            ZMTJSSkB46V
          </>
        </Typography>

        {/* TODO: make image component */}
        <img
          src="https://lewisbritton.com/images/monero/xmr-code.png"
          alt="xmr-code"
          style={{ height: '100px' }}
        />

        <Typography variant="body" color="lightGrey">
          <>&#169; Lewis Britton 2020&mdash;2024</>
        </Typography>
      </Stack>
    </SpacingTemp>
  </footer>
);
