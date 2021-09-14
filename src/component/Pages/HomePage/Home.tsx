import React from 'react'

import { InfoSection } from '../../../component'
import { homeObjOne, homeObjTwo } from './Data'

export const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
        </>
    )
}
