import React, { useState } from "react"
import { Container, Button } from 'react-bootstrap'

const PrivacyContent = () => {
    const [page, setPage] = useState(1)

    const goNextPage = () => {
        if(page === 10) return;
        setPage((page) => page + 1)
    }

    const goPrevPage = () => {
        if(page === 1) return;
        setPage((page) => page - 1)
    }
    return(
        <>
            <section className="privacy">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <Container className="privacy__container">
                    <h1 className="text-center text-white" data-aos="fade-up" data-aos-duration="3000">Privacy Policy</h1>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        {page === 1 && <PolicyStatement />}
                        {page === 2 && <ScopeAndConsent />}
                        {page === 3 && <RightsPreferences />}
                        {page === 4 && <Information />}
                        {page === 5 && <Information1 />}
                        {page === 6 && <PersonalData />}
                        {page === 7 && <ShareInfo />}
                        {page === 8 && <StoreSecure />}
                        {page === 9 && <ThirdParty />}
                        {page === 10 && <PrivacyNotice />}
                        <p className="text-center text-white">Page {page} of 10</p>
                    </div>
                    <div className='d-flex justify-content-end' data-aos="fade-up" data-aos-duration="3000">
                        <Button className="privacy__btn" variant="success" onClick={goPrevPage}>Previous</Button>
                        <Button className="privacy__btn" variant="success" onClick={goNextPage}>Next</Button>
                    </div>
                </Container>
            </section>
        </>
    )
}

const PolicyStatement = () => {
    return(
        <>
            <div>
                <h4 className="privacy__h4">Policy Statement</h4>
                <p className="privacy__p">The company values your interest, patronage, and privacy. We have, therefore, implemented policies that govern the personal data, collection, use, storage, and security practices of the company. guided by the requirements of the Data Privacy Act of 2012 (“Data Privacy Act”).</p>
                <p className="privacy__p">This Privacy Notice summarizes the company’s privacy policies and practices, and applies to all services and websites owned or directly operated by the company. Club members are also covered by the terms governing their membership as defined in our Terms and Conditions.</p>
                <p className="privacy__p">The Philippines’ privacy protection law may differ with other countries. As such, we endeavor to adjust our policies and practices to achieve the best practices in data privacy security and protection. Otherwise, we make no representations that our privacy policies and practices are compliant with the requirements of foreign jurisdictions.</p>
            </div>
        </>
    )
}

const ScopeAndConsent = () => {
    return(
        <>
            <div>
                <h4 className="privacy__h4">Scope and Consent</h4>
                <p className="privacy__p">This Privacy Notice and our data privacy policies applies to all personal data, physical and/or digital, processed manually and/or through the company’s automated systems. By using the company’s services and/or signing up/registering with us, you are accepting the terms of this Privacy Notice, and you are consenting to the company’s collection, use, disclosure, retention, and protection of your personal data as described in this Privacy Notice.</p>
                <p className="privacy__p">If you submit any personal information or sensitive personal information in behalf of another person, you represent that you have the authority to provide such information and to permit us to use said personal information in accordance with this Privacy Notice.</p>
                <p className="privacy__p">If you do not wish to provide your personal data to us, the company may not be able to provide you with products and services you request, or to tell you about the products and services we offer.</p>
            </div>
        </>
    )
}

const RightsPreferences = () => {
    return(
        <>
            <div>
                <h4 className="privacy__h4">Your Rights and Your Preferences</h4>
                <h5 className="privacy__h5">Under the Data Privacy Act, you have the following rights the company is obligated to protect:</h5>
                <p className="privacy__p">1. You have the right to be informed the purpose for which your personal data is collected. We can provide you with general facts relating to how your personal data is processed, provided that such requested information does not amount to details which are deemed confidential or proprietary by the company</p>
                <p className="privacy__p">2. You have the right to access your personal data with us, and you have the right to rectify should you find that the personal information we have on you needs update and/or correction. We respect the exercise of said rights provided that the accompanying request is not vexatious or unreasonable.</p>
                <p className="privacy__p">3. You have the right to object to processing your personal data or withhold consent previously given. Likewise, you have the right to erasure or blocking of your personal data. Should you exercise these rights, the company shall be constrained to limit your access to its facilities and/or services, or decline transaction when processing your personal data is necessary to render a complete and quality service.</p>
                <p className="privacy__p">4. Should you feel that your rights under the Data Privacy Act was disregarded, you are granted the right to file a complaint, and the right to seek indemnity for damages sustained, if any.</p>
            </div>
        </>
    )
}

const Information = () => {
    return(
        <>
            <div>
                <h4 className="privacy__h4">How We Collect Your Information</h4>
                <p className="privacy__p">In compliance with the Regulation 17 of the Philippine Amusement and Gaming Corporation (PAGCOR) Gaming Site and Regulatory Manual (GSRM) – Bingo Games requirements and in order to better anticipate your needs and to provide you with better services, we collect information from you in a variety of ways, through our website, call center hotline, or on-site with our company team members, such as:</p>
                <h5 className="privacy__h5">Identification and Contact Information</h5>
                <p className="privacy__p">In order to better communicate with you, and to help verify your identity, we may request for your identification and contact information during inquiries, registration/sign-ups, table reservations, ticket purchases, and payment transactions. This includes, but is not limited to, your name, date of birth, contact address, contact e-mail, and contact number.</p>
                <h5 className="privacy__h5">Purchase, Transactional & Financial Information</h5>
                <p className="privacy__p">We may collect transactional information that you provide us with from the online reservations, inquiries, and purchases you make. This includes credit or debit card details, financial account number, valid government-provided ID number, or similar identification information, details of your transaction history, in order to address your business and/or concern.</p>
            </div>
        </>
    )
}

const Information1 = () => {
    return(
        <>
            <div>
                <h5 className="privacy__h5">Social Media Information</h5>
                <p className="privacy__p">When using social media-integrated aspects of our website, or interacting with our social media channels when directed from our site, we may collect information such as your name, e-mail address, and other publicly accessible information on social media.</p>
                <h5 className="privacy__h5">Location, Device, Browser, and Software Information</h5>
                <p className="privacy__p">When visiting our website, we may collect information about the geographic location you are accessing from site access metrics, IP address, the device, browser, and software information from the device you are using to access our site.</p>
                <h5 className="privacy__h5">Cookies</h5>
                <p className="privacy__p">Cookies are files that are stored on your computer that collect information about you. When you access our website, cookies may be accepted by your browser if properly configured. These cookies may help us identify you, and help us generate metrics concerning your visits and interactions on our website. You may configure your browser to reject cookies, but doing so may prevent some transactions or uses of our sites.</p>
                <h5 className="privacy__h5">Information from Third Parties</h5>
                <p className="privacy__p">We may also collect information about you from other parties. We will use personal data only where you have provided your consent to the third party or where the company has a legitimate interest to use the personal data in order to provide you with our services.</p>
            </div>
        </>
    )
}

const PersonalData = () => {
    return(
        <>
            <div>
                <h4 className="privacy__h4">How We Collect Your Personal Data</h4>
                <h5 className="privacy__h5">Marketing Purposes</h5>
                <p className="privacy__p">These may include, but are not limited to, sharing special information, events, offers, and promotions via e-mail, direct mail, social media, phone, SMS, and similar methods.</p>
                <h5 className="privacy__h5">Non-marketing Purposes</h5>
                <p className="privacy__p">These may include, but are not limited to, validating identity, conducting digital demographic or performance analysis, conducting surveys, handling reservations, purchases, and related transactions, security and surveillance, and in complying with laws and regulatory guidelines.</p>
                <h5 className="privacy__h5">Communications and Opting Out</h5>
                <p className="privacy__p">We only wish to message you, primarily via e-mail, with communications and notifications that you might find useful or want to receive. These may include, but are not limited to, sharing special information, events, offers and promotions; contacting you regarding certain reservations and inquiries, bookings, or related transactions; and regular updates for special interest groups associated with our programs.</p>
                <p className="privacy__p">The emails we send include an opt-out mechanism within the message itself. By clicking on the unsubscribe link, you will be opted-out from our mailing list at no cost.</p>
            </div>
        </>
    )
}

const ShareInfo = () => {
    return(
        <>
            <div>
                <h4 className="privacy__h4">To Whom We May Share Your information</h4>
                <p className="privacy__p">We will share your personal data only if you grant us your permission to do so. Accordingly, we may share your personal data with the following recipients:</p>
                <h5 className="privacy__h5">Regulatory Bodies</h5>
                <p className="privacy__p">We may share your personal data with regulatory bodies, such as the Anti-Money Laundering Council, the PAGCOR, and other departments, bureaus, and agencies of the government, including law enforcement agencies, when we believe it is necessary for us in order to comply with a legal obligation under applicable laws.</p>
                <p className="privacy__p">We may also share your personal data in order to respond to a legal procedure, a national emergency, specific requirements of public order and safety, or fulfill a constitutional or statutory mandate of a public authority.</p>
            </div>
        </>
    )
}

const StoreSecure = () => {
    return(
        <>
            <div>
                <h4 className="privacy__h4">How We Store & Secure Your Information</h4>
                <p className="privacy__p">We store information collected through our website on secure servers, protected by industry standard security measures, designed to prevent confidentiality, integrity, or availability breaches. We are encrypting sensitive information such as credit card or debit card number, mobile number, email address, username and password stored in our databases. Only the application will be able to decrypt such information provided with high level of security of user access in which all events or activities are being logged in the secured server.</p>
                <p className="privacy__p">However, we have no control and therefore cannot enforce the same amount of security on any of the devices that you use to access our site, or to send us information via e-mail, messaging apps, or our website. We are therefore not responsible for the security and protection of information that may have been intercepted prior to our receipt of your personal data.</p>
                <p className="privacy__p">The company retains your personal data, in manual and/or electronic form, as long as it is necessary and relevant for its operations. We have also established a record management framework that serves as a guideline on when and how to dispose of your personal data.</p>
            </div>
        </>
    )
}

const ThirdParty = () => {
    return(
        <>
            <div>
                <p className="privacy__p">We are not responsible for the privacy policies and procedures of third-party sites that may link to the company’s website, or that the company may link to as part of past or present business relationships or initiatives. Please review the privacy policies of any linked sites you visit before using – or providing information to – any of those sites.</p>
            </div>
        </>
    )
}

const PrivacyNotice = () => {
    return(
        <>
            <div>
                <p className="privacy__p">The company reserves the right to revise this Privacy Notice at any time. Any changes become effective upon posting of the revised Privacy Notice in the website. Your use of the company's services following these changes means that you accept the revised Privacy Notice.</p>
                <p className="privacy__p">We will use reasonable efforts to notify you in advance and give you a reasonable period of time to object to any changes should there be any change that may materially and negatively affect the privacy of your personal information.</p>
                <p className="privacy__p">We encourage you to periodically review this Privacy Notice to stay informed about how the company collect, use, and share your personal information.</p>
            </div>
        </>
    )
}
export default PrivacyContent