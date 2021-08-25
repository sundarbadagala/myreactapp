import React from 'react'
import Comp from './Comp'
import './styles.css'

function Index() {
    return (
        <div>
            <Comp 
                position={true} 
                color={true}
                name='EXCLUSIVE ACCESS'
                header='Unlimited Transactions with zero fees'
                details='Get access to our exclusive diamone card that allows you to send unlimited transactions without getting charged any fees'
                btn='Get Started'
                logo={<i className="fad fa-credit-card"></i>}
                btnStyle='btn--primary'
            />
            <Comp 
                position={false} 
                color={false}
                name='100% SECURE'
                header='Stay protected 24/7 anywhere anytime'
                details='We have you covered no matter where you are located Over 140 locations worldwide to ensure you have access anytime'
                btn='Learn More'
                logo={<i className="fad fa-alarm-clock"></i>}
                btnStyle='btn--outlineLite'
            />
            <Comp 
                position={true} 
                color={true}
                name='EASY SETUP'
                header='Super fast and simple onboarding process'
                details="Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go."
                btn='Start Now'
                logo={<i className="fad fa-user-tie"></i>}
            />
        </div>
    )
}

export default Index
