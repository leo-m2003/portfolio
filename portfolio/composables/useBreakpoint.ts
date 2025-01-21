import { useBreakpoints } from '@vueuse/core'

export default function () {
    const breakpoints = useBreakpoints({
        mobile: 0, 
        tablet: 640,
        laptop: 1024,
        desktop: 1280,
      })

    return breakpoints.active()
}

