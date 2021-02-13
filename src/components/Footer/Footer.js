import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';



function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          
        <FooterLinkItems>
            <FooterLinkTitle>Address</FooterLinkTitle>
            Harmu Housing Colony,<br></br>
             Argora, Ranchi,<br></br>
              Jharkhand - 834002 <br></br>
            <FooterLink to='/sign-up'>View Map</FooterLink>
        </FooterLinkItems>

        <FooterLinkItems>
          <FooterLinkTitle>Members</FooterLinkTitle>
              <FooterLink to='/'>Join Us</FooterLink>
              <FooterLink to='/'>Log In</FooterLink>
              <FooterLink to='/'>Register</FooterLink>
              <FooterLink to='/'>FC Lounge</FooterLink>
            </FooterLinkItems>

        </FooterLinksWrapper>
        
        
        <FooterLinksWrapper>
        
            <FooterLinkItems>
                <FooterLinkTitle>Call Us :</FooterLinkTitle>
                
                  +91-7870359130 <br></br>
                  +91-7520295282  <br></br> <br></br>
                  <FooterLink to='/'>Request Call Back</FooterLink>
                  
                  
            </FooterLinkItems>
         

                      <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        
                        

                        <a 
                        style={{color: 'inherit', textDecoration: 'inherit'}}            
                        href='https://instagram.com/fitness_center_ranchi?igshid=10r1ajgnrivwh'>Instagram</a>
                        <a 
                        style={{color: 'inherit', textDecoration: 'inherit'}}
                        href='https://www.facebook.com/fitnesscenterranchi'>Facebook</a>
                        <a 
                        style={{color: 'inherit', textDecoration: 'inherit'}}
                        href='https://www.youtube.com/channel/UCsWNeWARwB5Du4QIKLLvVyQ'>Youtube</a>
                      </FooterLinkItems>
`
        </FooterLinksWrapper>

      </FooterLinksContainer>

      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            Fitness Center
          </SocialLogo>
          <WebsiteRights>Anushka © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/fitnesscenterranchi' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://instagram.com/fitness_center_ranchi?igshid=10r1ajgnrivwh' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/channel/UCsWNeWARwB5Du4QIKLLvVyQ'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
