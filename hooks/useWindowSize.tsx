import { useEffect, useState } from 'react'

interface StateProps {
    width: number
    height: number
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<StateProps>({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        // remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export default useWindowSize
