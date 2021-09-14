import React from 'react'

import { Button } from '../../globalStyles'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput
} from './Footer.element'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membersship sample sample sample
                </FooterSubHeading>
                <FooterSubText>sample</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="email" />
                    <Button fontBig>登録する</Button>
                </Form>
            </FooterSubscription>
            
        </FooterContainer>
    )
}

export default Footer
