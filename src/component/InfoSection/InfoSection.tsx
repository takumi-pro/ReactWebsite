import React, { VFC } from 'react'
import { Link } from 'react-router-dom'

import { InfoSec } from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { HomeObj } from '../../types/homeObj'
import {
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements'

const InfoSection: VFC<HomeObj> = (props) => {
    const {
        primary,
        lightBg,
        imgStart,
        lightTopLine,
        lightText,
        lightTextDesc,
        buttonLabel,
        description,
        headline,
        topLine,
        start,
        src,
        alt
    } = props

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow $imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </Subtitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={src} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
