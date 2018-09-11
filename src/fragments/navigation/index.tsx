import * as React from 'react'
import * as css from './styles.scss'

import { NavLink } from 'react-router-dom'

// import { isActive } from 'helpers/predicts'

export interface S {
    isOpened: boolean;
}

export class Navigation extends React.Component<{}, S> {
    state = {
        isOpened: false,
    }

    handleOpenMenu = () =>
        this.setState((state: S) => {
            return {
                isOpened: !state.isOpened,
            }
        })

    render () {
        return (
            <nav className={css.navigation}>
                <div className={css.group}>
                    <NavLink to="/" exact className={css.link} activeClassName={css.active}>
                        Main page
                    </NavLink>

                    <NavLink to="/ru/example" className={css.link} activeClassName={css.active}>
                        Example page
                    </NavLink>

                    <NavLink to="/ru/panels" className={css.link} activeClassName={css.active}>
                        Panels page
                    </NavLink>
                </div>

                <a
                    href="https://github.com/lnked/react-starter"
                    target="_blank"
                    className={css.codeLink}
                    rel="noopener noreferrer"
                >
                    Source Code
                </a>
            </nav>
        )
    }
}
