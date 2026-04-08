import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProductCategories.css';

import barsImage from "../assets/images/bars.png";
import cerealsImage from "../assets/images/cereals.png";
import snacksImage from "../assets/images/snacks.png";
import superfoodsImage from "../assets/images/superfoods.png";


const ProductCategories = () => {
    const categories = [
        {
            id: 1,
            title: "Cereals & Breakfast",
            description: "Oat flakes, muesli, instant oatmeal, breakfast cereals, and rice cakes — nutritious, versatile, and easy to prepare.",
            image: cerealsImage
        },
        {
            id: 2,
            title: "Bars",
            description: "Protein bars, raw bars, nut bars, yogurt bars, and fruit & nut combinations crafted for taste and performance.",
            image: barsImage
        },
        {
            id: 3,
            title: "Snacks & Nuts",
            description: "Peanuts, nuts, seeds, popcorn, and cocktail mixes — carefully selected, processed, and packed for freshness.",
            image: snacksImage
        },
        {
            id: 4,
            title: "Superfoods & Seeds",
            description: "Chia, flax, quinoa, pumpkin seeds, sunflower seeds, and more — rich in nutrients and ideal for modern diets.",
            image: superfoodsImage
        }
    ];

    return (
        <section id="products" className="section products-section">
            <div className="container">
                <h2 className="section-title text-center">Our Product Categories</h2>

                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="category-card"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="category-image">
                                <img src={category.image} alt={category.title} />
                            </div>
                            <div className="category-content">
                                <h3 className="category-title">{category.title}</h3>
                                <p className="category-desc">{category.description}</p>
                                <button className="btn-link">
                                    View Category <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
