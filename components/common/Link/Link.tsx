import Link from 'next/link'
import { ReactElement } from 'react'

interface Props {
    children: ReactElement
    link: string
    styles: string
}

function Index(props: Props) {
    const { children, link, styles } = props
    return (
        <div className={styles}>
            <Link href={link}>{children}</Link>
        </div>
    )
}

export default Index
