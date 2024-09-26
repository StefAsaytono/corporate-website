import React, { useState } from "react"
import { Container, Button } from 'react-bootstrap'

const PrivacyContent = () => {
    const [page, setPage] = useState(1)

    const goNextPage = () => {
        if(page === 9) return;
        setPage((page) => page + 1)
    }

    const goPrevPage = () => {
        if(page === 1) return;
        setPage((page) => page - 1)
    }
    return(
        <>
            <section className="responsible__gaming">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <Container className="responsible__gaming__container">
                    <h1 className="text-center text-white" data-aos="fade-up" data-aos-duration="3000">Responsible Gaming</h1>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        {page === 1 && <CommunityResponsibility />}
                        {page === 2 && <NonQualifiedPlayers />}
                        {page === 3 && <ControllingCompulsiveGambling />}
                        {page === 4 && <Accountability />}
                        {page === 5 && <Payouts />}
                        {page === 6 && <Commitment />}
                        {page === 7 && <GamblingLimitations />}
                        {page === 8 && <StrategiesOnGaming />}
                        {page === 9 && <StrategiesOnGaming1 />}
                        <p className="text-center text-white">Page {page} of 9</p>
                    </div>
                    <div className='d-flex justify-content-end' data-aos="fade-up" data-aos-duration="3000">
                        <Button className="responsible__gaming__btn" variant="success" onClick={goPrevPage}>Previous</Button>
                        <Button className="responsible__gaming__btn" variant="success" onClick={goNextPage}>Next</Button>
                    </div>
                </Container>
            </section>
        </>
    )
}
const CommunityResponsibility = () => {
    return(
        <>
            <div>
                <h4 className="responsible__gaming__h4">Community Responsibility</h4>
                <p className="responsible__gaming__p">Fastwin is committed to responsible gambling. Remote gambling is a legitimate form of entertainment that is experienced by millions of players worldwide. For most players remote gambling is an enjoyable experience, however, the reality must be accepted that a small percentage of players engaging in remote gambling might have a problem with gambling taking over their life and finances. Being a socially responsible company means taking caring of our players, means having a proactive approach about the problems that affect the community. This is why Fastwin has adopted and is fully committed to the strictest application and enforcement of the following policies:</p>
            </div>
        </>
    )
}

const NonQualifiedPlayers = () => {
    return(
        <>
            <div>
                <h4 className="responsible__gaming__h4">Restricting Access by Minors or Non-qualified Players</h4>
                <p className="responsible__gaming__p">Fastwin requires new players to go through a KYC process to verify that they are of lawful age in their respective jurisdiction and at least 21 years old and qualified as a remote gaming player. Should we have a suspicion of a false declaration or minors attempting to use our services we will further pursue reasonable measures to verify this. In this respect, if we have a suspicion to this extent, we reserve the right to suspend an account and request proof of identity and age from the player to verify compliance with this policy.</p>
                <p className="responsible__gaming__p">We also ensure that our advertising, sponsorship and promotional activity are not targeted at minors or any non-qualified players.</p>
                <p className="responsible__gaming__p">Fastwin does not allow anybody under the age of 21 or non-qualified players to use our services. This policy is in full compliance and exceeds the requirements of the rules and regulations of the remote gambling authority that oversees and licenses our operation; Philippine Amusement and Gaming Corporation (PAGCOR), Philippines.</p>
                <p className="responsible__gaming__p">We pledge to do all we can but we need your help also to:</p>
                <p className="responsible__gaming__p">1. Use child protection software to block remote gambling sites from computers minors might have access to.</p>
                <p className="responsible__gaming__p">2. Do not leave the computer/mobile devices unattended when you are logged on to our site.</p>
                <p className="responsible__gaming__p">3. Do not leave the "Save Password" option enabled on any Fastwin login screen.</p>
                <p className="responsible__gaming__p">4. Create separate profiles for minors on computers/mobile devices so that when they log in they cannot access your information.</p>
                <p className="responsible__gaming__p">5. If you suspect someone under the age of 21 is registered with us as a player, please contact us immediately.</p>
            </div>
        </>
    )
}

const ControllingCompulsiveGambling = () => {
    return(
        <>
            <div>
                <h4 className="responsible__gaming__h4">Controlling Compulsive Gambling</h4>
                <p className="responsible__gaming__p">Compulsive gambling does not benefit Fastwin. We strive to have a safe, fun environment on our site. Compulsive gamblers are a problem for their families, friends and their lives, creating an unstable, unsafe environment.</p>
                <p className="responsible__gaming__p">Fastwin is committed to detecting and reducing compulsive gambling. We have a system to track player's activities, and we are constantly working to design and enforce controls designed to limit gambling patterns that are out of control.</p>
                <p className="responsible__gaming__p">While the majority of people do gamble within their means, for some, it can spiral out of control. We strive not only to identify compulsive gamblers, but also help them address their problem and prevent other players from becoming compulsive gamblers.</p>
                <p className="responsible__gaming__p">In order to help you keep control, we would like you to remember the following:</p>
                <p className="responsible__gaming__p">1. Gambling should be seen as entertainment, address it as if you are paying for entertainment so do not over pay for your entertainment.</p>
                <p className="responsible__gaming__p">2. Gambling should NOT be seen as a genuine way of making money.</p>
                <p className="responsible__gaming__p">3. Avoid chasing losses.</p>
                <p className="responsible__gaming__p">4. Only gamble what you can afford to lose.</p>
                <p className="responsible__gaming__p">Keep track of the time and amount of money you spend gambling.</p>
                <p className="responsible__gaming__p">If you need to take a break from gambling, please send an email at keepitfun@pagcor.ph or visit PAGCOR website at https://pagcor.ph/regulatory</p>
            </div>
        </>
    )
}

const Accountability = () => {
    return(
        <>
            <div>
                <h4 className="responsible__gaming__h4">Accountability and Integrity</h4>
                <p className="responsible__gaming__p">We believe that we are only as good as our player’s perception of us. Therefore, the highest level of integrity is the only standard by which Fastwin can operate to have our players have that perception of us.</p>
            </div>
        </>
    )
}

const Payouts = () => {
    return(
        <>
            <div>
                <h4 className="responsible__gaming__h4">Payouts</h4>
                <p className="responsible__gaming__p">Fastwin is committed to prompt payment of customer cash out requests.</p>
            </div>
        </>
    )
}

const Commitment = () => {
    return(
        <>
            <div>
                <h4 className="responsible__gaming__h4">Commitment to Customer Service</h4>
                <p className="responsible__gaming__p">At Fastwin, our highest priority is customer satisfaction. That's why you can contact us in a various number of ways through our Customer Service Support Team is available 24 hours a day, seven days a week to offer technical support, aid in dispute resolution, and answer your questions.</p>
            </div>
        </>
    )
}

const GamblingLimitations = () => {
    return(
        <>
            <div>
                <h4 className="responsible__gaming__h4">Gaming Limitations</h4>
                <p className="responsible__gaming__p">Pursuant to Presidential Decree 1869, as amended by Republic Act 9487, persons under 21 years of age or students of any school, college or university in the Philippines are not allowed to play in this gaming establishment.</p>
                <p className="responsible__gaming__p">Pursuant to Malacañang Memorandum Circular No. 8, the following are not allowed to enter, stay and/or play in this gaming establishment:</p>
                <p className="responsible__gaming__p">1. Government officials and employees connected directly with the operation of the government or any of its agencies; and</p>
                <p className="responsible__gaming__p">2. Active employees of the Philippine National Police (PNP) and Armed Forces of the Philippines (AFP).</p>
                <p className="responsible__gaming__p">3. In accordance with the recent policy pronouncement of the President of the Philippines, immediate relatives (i.e. spouse, children and parents) of government officials are not allowed to play.</p>
                <p className="responsible__gaming__p">4. Fastwin Players shall not play in open venues such as streets, parks, malls, restaurants, churches or places of worship, markets, and other venues which are in direct and full view of the public.</p>
            </div>
        </>
    )
}

const StrategiesOnGaming = () => {
    return(
        <>
            <div>
                <h4 className="responsible__gaming__h4">Strategies on Gaming</h4>
                <p className="responsible__gaming__p">Here are some strategies you can use to play safe and have fun.</p>
                <p className="responsible__gaming__p">1. Don’t gamble when you’re upset or stressed.</p>
                <p className="responsible__gaming__p">2. Limit your alcohol intake while gambling.</p>
                <p className="responsible__gaming__p">3. Know how the games work before you wager.</p>
                <p className="responsible__gaming__p">4. Set budget and time limits – there are tools available on many slot machines, mobile and internet gambling sites to help you monitor your play.</p>
                <p className="responsible__gaming__p">5. Take frequent breaks – move around, get some fresh air, have something to eat or a coffee.</p>
            </div>
        </>
    )
}

const StrategiesOnGaming1 = () => {
    return(
        <>
            <div>
                <p className="responsible__gaming__p">6. Only gamble with money you have – never borrow money or use money intended for necessities, like rent or food.</p>
                <p className="responsible__gaming__p">7. Don’t try to win back what you’ve lost.</p>
                <p className="responsible__gaming__p">8. Gambling is not a way to make money so don’t think of it as a chance to win money for a trip, to pay bills or to pay off debt.</p>
                <p className="responsible__gaming__p">9. Stick to your budget by leaving your credit and debit cards at home.</p>
                <p className="responsible__gaming__p">10. Balance gambling with other recreational activities.</p>
                <p className="responsible__gaming__p">11. If you’re no longer having fun, stop playing.</p>
                <p className="responsible__gaming__p">12. Don’t depend on “good luck” strategies – they don’t increase your chances of winning</p>
            </div>
        </>
    )
}

export default PrivacyContent