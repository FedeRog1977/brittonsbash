import styles from './footer.module.scss'
import { Spacing, Grid, Typography } from '../../basics'

export const Footer = () => (
    <footer className={styles.footer}>
        <Spacing pY={60}>
            <Grid alignRows="auto auto auto auto auto" rowGap={20}>
                <Grid rowItem={[1, 5]}>
                    <Grid
                        alignColumns="auto auto"
                        columnGap={15}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid columnItem={[1, 2]}>
                            <img
                                src="https://lewisbritton.com/images/logo/bash-logo.png"
                                alt="logo"
                                style={{ height: '48px' }}
                            />
                        </Grid>
                        <Grid columnItem={[2, 2]}>
                            <Grid alignRows="auto auto" justifyItems="start">
                                <div className={styles.footerLogo}>
                                    BrittonsBashRC
                                </div>
                                <Typography
                                    type="body"
                                    content={<code>brittonsbash.com</code>}
                                    color="lightGrey"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid rowItem={[2, 5]}>
                    <Grid
                        alignColumns="auto auto"
                        columnGap={10}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid columnItem={[1, 2]}>
                            <img
                                src="https://lewisbritton.com/images/monero/xmr.svg"
                                alt="xmr"
                                style={{ height: '15px' }}
                            />
                        </Grid>
                        <Grid columnItem={[2, 2]}>
                            <Typography
                                type="body"
                                content="Monero Donations"
                                color="lightGrey"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid rowItem={[3, 5]}>
                    <Typography
                        type="footnote"
                        content={
                            <code>
                                4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5RPcM8KF6hDWGhj7
                                <br />
                                f37dfqwzGCqq1Vug13vmBkxoQARfNnrbNEcqsj
                                <br />
                                ZMTJSSkB46V
                            </code>
                        }
                        color="lightGrey"
                    />
                </Grid>
                <Grid rowItem={[4, 5]}>
                    <img
                        src="https://lewisbritton.com/images/monero/xmr-code.png"
                        alt="xmr-code"
                        style={{ height: '100px' }}
                    />
                </Grid>
                <Grid rowItem={[5, 5]}>
                    <Typography
                        type="body"
                        content={<>&#169; Lewis Britton 2020&mdash;2024</>}
                        color="lightGrey"
                    />
                </Grid>
            </Grid>
        </Spacing>
    </footer>
)
