import { HomeObj } from '../../../types/homeObj'
import Top from '../../../images/top.svg'
import Two from '../../../images/top2.svg'

export const homeObjOne: HomeObj = {
    lightBg: false,
    imgStart: false,
    primary: true,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    start: true,
    buttonLabel: '始めましょう',
    description: 'あなたのビジネスを手助けします',
    headline: 'Lead Generation Specialist for Online',
    topLine: 'マーケティングエージェント',
    src: Top,
    alt: 'hi, i am takumi'
}

export const homeObjTwo: HomeObj = {
    lightBg: true,
    imgStart: true,
    primary: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    start: true,
    buttonLabel: '始めましょう',
    description: 'あなたのビジネスを手助けします',
    headline: 'Lead Generation Specialist for Online',
    topLine: 'マーケティングエージェント',
    src: Two,
    alt: 'hi, i am takumi'
}
