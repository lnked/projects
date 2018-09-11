import * as React from 'react'
import * as css from './styles.scss'

import { classes } from 'helpers'

export interface P {
    symbol: string;
    hidden?: boolean;
    className?: string;
}

const cx = classes.bind(css)

export class Icon extends React.PureComponent<P, {}> {
    static defaultProps = {
        symbol: '',
        hidden: false,
        className: '',
    }

    baseUrl: string = ''

    componentDidMount () {
        this.baseUrl = window.location.href.replace(window.location.hash, '')
    }

    render () {
        const { symbol, hidden, className } = this.props

        return (
            <svg key={`ico_${symbol}`} role="presentation" aria-hidden={hidden} className={cx(css.icon, className)}>
                <use xlinkHref={`${this.baseUrl}#${symbol}`} />
            </svg>
        )
    }
}
