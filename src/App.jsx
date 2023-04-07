import React from 'react';
import styles from './style'
import { Navbar, Testimonials, Stats, Hero, GetStarted, Footer, FeedbackCard, Clients, CardDeal, CTA, Button, Business, Billing } from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden" style={{backgroundColor: "rgb(20, 4, 15)"}}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`} style={{backgroundColor: "rgb(20, 4, 15)"}}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`} style={{backgroundColor: "rgb(20, 4, 15)"}}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App