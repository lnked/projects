import * as React from 'react'
import * as css from './styles.scss'

export interface P {
    children?: React.ReactChild;
}

export const Notification = ({ children }: P) => {
    // if (location.protocol.indexOf('https') >= 0) {
    //     Notification.requestPermission((permission) => {
    //         console.log('Результат запроса прав:', permission)

    //         const notification: any = new Notification('Ответ?',
    //             { body: 'Только ты!', dir: 'auto', icon: 'icon.jpg' }
    //         )

    //         notification.onshow = () => { console.log('onshow') }
    //         notification.onclick = () => { console.log('click') }
    //         notification.onerror = () => { console.log('onerror') }
    //     })
    // }

    return <div className={css.content}>xxx</div>
}

export default Notification
