import React from 'react';

const About = () => {
    return (
        <div>
            <form action="http://localhost:4242/create-checkout-session" method="POST">
                <button type="submit">Checkout</button>
            </form>
        </div>
    );
};

export default About;