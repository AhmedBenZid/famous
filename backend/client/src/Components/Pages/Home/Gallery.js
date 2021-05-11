import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const imageData = [
    {
        src: "./portfolio/CI9A0549.jpg",
        altText: 'Slide 1',

        key: '1'
    },
    {
        src: "./portfolio/_21A6828-01.jpeg",
        altText: 'Slide 2',

        key: '2'
    },
    {
        src: "./portfolio/_I9A8777.JPG",
        altText: 'Slide 3',

        key: '3'
    },
    {
        src: "./portfolio/CI9A7670.JPG",
        altText: 'Slide 4',

        key: '4'
    },
    {
        src: "./portfolio/36229603_1985652108120368_2441483432245592064_o.jpg",
        altText: 'Slide 5',

        key: '5'
    },
    {
        src: "./portfolio/CI9A8109.JPG",
        altText: 'Slide 6',

        key: '6'
    },
];

const Gallery = () => {
    return (
        <section class="page-section" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Nos dernières réalisations</h2>
                </div>
                <div class="row">
                    {imageData.map(el => <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content">Voir Plus</div>
                                </div>
                                <img class="img-fluid" src={el.src} alt={el.altText} />
                            </a>
                        </div>
                    </div>)}
                </div>
            </div>
        </section >
    )
}

export default Gallery
