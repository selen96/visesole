import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { MobileHeader } from 'containers/Header'
import { Header } from 'containers/Header'
import { Container } from 'semantic-ui-react'
import './Terms.scss'



const Terms = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}

      <Container className={isMobile ? 'terms-mobile-container' : 'terms-container'} >
        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Terms of Conditions
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          Last updated: December 5, 2020
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
          http://www.visesole.com website and the ViseSole desktop application (the "Service")
          operated by ViseSole ("us", "we", or "our").
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these
          Terms. These Terms apply to all visitors, users and others who access or use the Service.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Purchases
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          You are encouraged to familiarise yourself with your rights contained within the Sale of Goods Act 1979,
          Unfair Contract Terms Act 1977 and the Unfair Terms in Consumer Contracts Regulations 1999.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          If you wish to purchase any product or service made available through the Service ("Purchase"),
          you may be asked to supply certain information relevant to your Purchase including,
          without limitation, your credit card number, the expiration date of your credit card, your
          billing address, your email address, and your shipping information.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          You represent and warrant that: (i) you have the legal right to use any credit card(s)
          or other payment method(s) in connection with any Purchase; and that (ii) the information you
          supply to us is true, correct and complete. You expressly agree that
          ViseSole is not responsible for any loss or damage arising from the submission
          of false or inaccurate information.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          By submitting such information, you grant us the right to provide the information to third parties
          for purposes of facilitating the completion of Purchases.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          We reserve the right to refuse or cancel your order at any time for certain reasons including
          but not limited to: product or service availability, errors in the description or price of
          the product or service, error in your order or other reasons.
          You expressly agree that ViseSole cannot accept any liability
          for loss or damage arising out of such cancellation.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          We reserve the right to refuse or cancel your order if fraud or an unauthorised or illegal
          transaction is suspected.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Availability, Errors and Inaccuracies
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          We are constantly updating our offerings of products and services on the Service.
          The products or services available on our Service may be mispriced, described inaccurately,
          or unavailable, and we may experience delays in updating information on the Service and in our
          advertising on other web sites. You expressly agree that any such offer of a
          product or service does not constitute a legal offer capable of attracting legal consequences.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          We cannot and do not guarantee the accuracy or completeness of any information, including prices,
          product images, specifications, availability, and services. We reserve the right to change or
          update information and to correct errors, inaccuracies, or omissions at any time without
          prior notice. Section "Availability, Errors and Inaccuracies"
          is without prejudice to existing statutory rights.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Intellectual Property
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          The Service and its original content, features and functionality are and will remain the exclusive property
          of ViseSole and its licensors. The Service is protected by copyright, trademark, and other
          laws of both the Netherlands and foreign countries. Our trademarks and trade dress may not
          be used in connection with any product or service without the prior written consent of ViseSole.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Links To Other Web Sites
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by ViseSole.
          ViseSole has no control over, and assumes no responsibility for, the content, privacy policies,
          or practices of any third party web sites or services. You further acknowledge and agree that ViseSole
          shall not be responsible or liable, directly or indirectly, for any damage or loss caused or
          alleged to be caused by or in connection with use of or reliance on any such content, goods or
          services available on or through any such web sites or services.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Termination
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          We may terminate or suspend your access immediately, without prior notice or liability, for any
          reason whatsoever, including without limitation if you breach the Terms.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          Upon termination, your right to use the Service will immediately cease.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          All provisions of the Terms which by their nature should survive termination shall survive termination,
          including, without limitation, ownership provisions, warranty disclaimers,
          indemnity and limitations of liability.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Indemnification
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          You agree to defend, indemnify and hold harmless ViseSole and its licensee and licensors,
          and their employees, contractors, agents, officers and directors, from and against any and
          all claims, damages, obligations, losses, liabilities, costs or debt, and expenses
          (including but not limited to attorney's fees), resulting from or arising out of a) your
          use and access of the Service, or b) a breach of these Terms.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Disclaimer
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS
          AVAILABLE" basis. The Service is provided without warranties of any kind, whether
          express or implied, including, but not limited to, implied warranties of merchantability,
          fitness for a particular purpose, non-infringement or course of performance.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Changes
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
          If a revision is material we will try to provide at least 30 (change this) days'
          notice prior to any new terms taking effect. What constitutes a material change
          will be determined at our sole discretion.
        </div>
        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          By continuing to access or use our Service after those revisions become effective,
          you agree to be bound by the revised terms. If you do not agree to the
          new terms, you must stop using the service.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Privacy Policy
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          Please refer to our Privacy Policy. You agree that they constitute part of these terms.
          You must read our Privacy Policy before you use the Service.
        </div>

        <div className={isMobile ? 'terms-mobile-header' : 'terms-header'}>
          Contact Us
        </div>

        <div className={isMobile ? 'terms-mobile-content' : 'terms-content'}>
          If you have any questions about these Terms, please contact us at info@visesole.com
        </div>
      </Container>
    </>
  )
}

export default Terms
