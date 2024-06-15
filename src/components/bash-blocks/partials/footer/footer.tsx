import styles from './footer.module.scss';
import { Typography, Stack } from '../../basics';
import { FC } from 'react';
import { Spacing } from '../../basics/spacing';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <Spacing padding="xl">
      <Stack direction="vertical" alignHorizontal="center" spacing="md">
        <Stack direction="horizontal" alignVertical="center" spacing="sm">
          {/* TODO: make image component */}
          <img
            src="https://lewisbritton.com/images/logo/bash-logo.png"
            alt="logo"
            style={{ height: '48px' }}
          />

          <Stack direction="vertical" alignHorizontal="left">
            <div className={styles.footerLogo}>BrittonsBashRC</div>

            <Typography variant="body" element="code" color="lightGrey">
              brittonsbash.com
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="horizontal" alignVertical="center" spacing="sm">
          {/* TODO: make image component */}
          <img
            src="https://lewisbritton.com/images/monero/xmr.svg"
            alt="xmr"
            style={{ height: '15px' }}
          />

          <Typography variant="body" color="lightGrey">
            Monero Donations
          </Typography>
        </Stack>

        <Typography variant="footnote" element="code" color="lightGrey">
          <>
            4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5R
            <br />
            PcM8KF6hDWGhj7f37dfqwzGCqq1Vug13vm
            <br />
            BkxoQARfNnrbNEcqsjZMTJSSkB46V
            <br />
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
    </Spacing>
  </footer>
);
