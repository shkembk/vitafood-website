import React from 'react';
import { Package, Factory, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const pillars = [
        {
            icon: <Package size={40} />,
            title: "Branded Products (2U)",
            description: "We develop and produce ready-to-market healthy foods through our consumer brand, 2U — offering cereals, bars, snacks, and superfoods designed for today’s health-conscious market."
        },
        {
            icon: <Factory size={40} />,
            title: "Private Label Manufacturing",
            description: "From concept to final product, we support private label projects with flexible MOQs, adaptable recipes, packaging solutions, and full regulatory assistance."
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "Quality & Compliance",
            description: "Our production follows internationally recognized food safety, quality, and ethical standards — ensuring reliability, consistency, and trust across global markets."
        }
    ];

    return (
        <section id="what-we-do" className="section what-we-do-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What We Do</h2>
                    <p className="section-intro">
                        Vitafood is a modern food manufacturer delivering safe, scalable, and market-ready products for brands, retailers, and distributors worldwide.
                    </p>
                </div>

                <div className="pillars-grid">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            className="pillar-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="pillar-icon">
                                {pillar.icon}
                            </div>
                            <h3 className="pillar-title">{pillar.title}</h3>
                            <p className="pillar-text">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
