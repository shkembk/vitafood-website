import React from 'react';
import { Users, Globe, ShoppingBag, Store } from 'lucide-react';
import './MarketPresence.css';

const MarketPresence = () => {
    const stats = [
        { icon: <Globe size={32} />, label: "International Markets", value: "20+" },
        { icon: <Users size={32} />, label: "Partners Worldwide", value: "150+" },
        { icon: <Store size={32} />, label: "Retail Chains", value: "50+" },
        { icon: <ShoppingBag size={32} />, label: "Private Labels", value: "30+" },
    ];

    return (
        <section className="section presence-section">
            <div className="container">
                <div className="presence-header">
                    <h2 className="section-title">Market Presence & Partnerships</h2>
                    <p className="presence-text">
                        Our products and brands are actively promoted through market stands, sports sponsorships, and major events — strengthening visibility and consumer trust across multiple channels.
                    </p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketPresence;
