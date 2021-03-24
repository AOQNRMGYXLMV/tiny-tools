import React from 'react'
import FetchCover from './fetch_cover'
import ImgCompress from './img_compress'

export default function (props) {
    const { toolKey } = props
    if (toolKey === 'fetch_cover') {
        return FetchCover()
    } else if (toolKey === 'img_compress') {
        return ImgCompress()
    }
    return 'To be implemented.'
}
