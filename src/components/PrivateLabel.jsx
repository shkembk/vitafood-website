import React from 'react';
import { ArrowRight } from 'lucide-react';
import './PrivateLabel.css';

const PrivateLabel = () => {
    const steps = [
        { number: "01", title: "Product Concept", desc: "Development" },
        { number: "02", title: "Recipe Formulation", desc: "& Optimization" },
        { number: "03", title: "Packaging", desc: "& Labeling Solutions" },
        { number: "04", title: "Regulatory Compliance", desc: "& Documentation" },
        { number: "05", title: "Scalable Production", desc: "& Delivery" }
    ];

    return (
        <section id="private-label" className="section pl-section">
            <div className="container">
                <div className="pl-header">
                    <div>
                        <h2 className="section-title">Private Label Solutions</h2>
                        <p className="pl-intro">
                            We help brands bring food products to market efficiently and safely — whether you are launching a new line or expanding an existing one.
                        </p>
                    </div>
                    <a href="#contact" className="btn btn-primary">
                        Start Your Project <ArrowRight size={16} />
                    </a>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PrivateLabel;
