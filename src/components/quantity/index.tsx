import * as React from 'react'
import * as css from './styles.scss'

export interface P {
    name: string;
    min: number;
    max: number;
    step: number;
    count?: number;
    type?: string;
    item?: string | number;
    handleChange?: (count: number) => void | boolean;
}

export interface S {
    count: number;
}

export class Quantity extends React.Component<P, S> {
    static defaultProps = {
        type: 'number',
        min: 1,
        max: 9999,
        step: 1,
        count: 1,
        handleChange: false,
    }

    state = {
        count: 0,
    }

    static getDerivedStateFromProps (props: P, state: S) {
        if (state.count !== props.count) {
            return {
                ...state,
                ...props,
            }
        }

        return null
    }

    // shouldComponentUpdate (nextProps) {
    //     console.log(nextProps.count, this.state.count)
    //     return nextProps.count !== this.state.count
    // }

    changeValue = (count: number) => {
        const { min, max } = this.props

        if (count > max || count < min) {
            count = max
        }

        this.setState({ count })

        // this.props.handleChange(this.props.item, count)
    }

    changeCount = (input: number) => () => {
        const { count } = this.state
        const { min, max, step } = this.props

        if ((input < 0 && count > min) || (input > 0 && count < max)) {
            this.changeValue(count + input * step)
        }
    }

    handleChange = (e: SyntheticEvent) => {
        const re = /^\d+$/

        if (re.test(e.target.value)) {
            this.changeValue(parseInt(e.target.value, 10))
        }
    }

    render () {
        const { count } = this.state
        const { min, max, name, type } = this.props

        const decreaseClass = [css.control, css.decrease].join(' ')
        const increaseClass = [css.control, css.increase].join(' ')

        return (
            <div className={css.quantity}>
                <button type="button" onClick={this.changeCount(-1)} className={decreaseClass}>
                    -
                </button>
                <input
                    type={type}
                    name={name}
                    min={min}
                    max={max}
                    value={count}
                    autoComplete="off"
                    className={css.count}
                    onChange={this.handleChange}
                />
                <button type="button" onClick={this.changeCount(1)} className={increaseClass}>
                    +
                </button>
            </div>
        )
    }
}
