import React from 'react';
import Link from 'next/link';

const CTAStyleTwo = () => {
    return (
        <div className="agency-cta-area ptb-80">
            <div className="container">
                <div className="agency-cta-content">
                    <h2>Avez-vous des projets ?
</h2>

                    <Link href="/contact">
                        <a className="btn btn-gradient">Contactez-nous</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CTAStyleTwo;