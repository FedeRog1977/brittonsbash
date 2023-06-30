import { Typography } from '../../bash-blocks'

export const WeatherSrSs = ({ sr, ss }: any) => (
    <table style={{ margin: 'auto' }}>
        <tr>
            <td style={{ columnWidth: '3.5em' }}>
                <Typography type="footnote" content="Sunrise:" boldFace />
            </td>
            <td style={{ columnWidth: '3.5em' }}>
                <Typography type="footnote" content="Sunset:" boldFace />
            </td>
        </tr>
        <tr>
            <td style={{ columnWidth: '3.5em' }}>
                <Typography
                    type="footnote"
                    content={
                        <>
                            {new Date(sr * 1000).toLocaleTimeString('en-uk', {
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
                        </>
                    }
                />
            </td>
            <td style={{ columnWidth: '3.5em' }}>
                <Typography
                    type="footnote"
                    content={
                        <>
                            {new Date(ss * 1000).toLocaleTimeString('en-uk', {
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
                        </>
                    }
                />
            </td>
        </tr>
    </table>
)
