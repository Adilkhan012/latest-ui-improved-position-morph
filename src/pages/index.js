import React from "react";
import Slider from "react-slick";
import { Row, Col } from 'react-bootstrap';


//import * as THREE from 'three'
//import {gsap, ScrollTrigger} from 'gsap'
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


const Home = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return(
        <>

<div id="character3d"></div>


            <section className="banner-section">
                <div className="banner-container">
                    <div className="head-icon">
                        <img src="images/logo-icon.webp" alt="icon" />
                    </div>
                    <div  className="banner-cartoon-img">
                    
                        {/* <img src="images/carton-img1.webp" alt="image" /> */}
                    </div>
                    <div className="banner-content">
                        <div className="banner-logo">
                            <a href="#">
                                <img src="images/morph-logo.webp" alt="logo" />
                            </a>
                        </div>
                        <div className="content-detail">
                            <div className="banner-title">
                                <img src="images/banner-text-bg.webp" alt="image" />
                                <h1> a Web3 phigital brand</h1>
                            </div>
                            <div className="content-discriptions">
                                <p>morph is an NFT collection of 1000 charming creatures. <br /> Clumsy, Endearing and adorable each of them has their own personality.</p>
                                <p>Bridging the doors between virtual and physical worlds, morph is a community-driven Web3 brand centered around collaborations.</p>
                                <p>Created in The Lab, the morph’s are here <br /> to bring back magic into your life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-enter-text">
                        <div className="text-hand-title">
                            <img src="images/text-1.webp" alt="image" />
                        </div>
                        <div className="text-hand-image">
                            <img src="images/hand-img.webp" alt="image" />
                        </div>
                    </div>
                    <div className="morph-section">
                        <div className="morph-title">
                            <img src="images/text-2.webp" alt="image" />
                        </div>
                        <div className="morph-circle">
                            <img src="images/icon1.webp" alt="images" />
                        </div>
                        <div className="morph-cards">
                            <div className="morph-card-holder">
                                <div className="card-image">
                                    <img src="images/cartoon-card1.webp" alt="image" />
                                </div>
                                <div className="card-content">
                                    <div className="card-discriptions">
                                        <p>Owning a morph is the unique way that gives you life-time membership access to The Lab. Being part of it allows you to access exclusive phygital NFT drops in partnership with famous artistic directors.</p>
                                    </div>
                                    <div className="card-discriptions">
                                        <p>Lab members will get exclusive claims & WL on all drops. Combining virtual and physical versions ​​through a burn system, each piece of art is a unique limited-edition. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="morph-card-holder">
                                <div className="card-image">
                                    <img src="images/cartoon-card2.webp" alt="image" />
                                </div>
                                <div className="card-content">
                                    <div className="card-discriptions">
                                        <p>The Lab : Owning a morph is the unique way that give you membership access to The Lab. Being part of The Lab allows you to access exclusive NFT drops with luxury & streetwear famous artistic directors, much more that will be revealed over time.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="morph-card-holder">
                                <div className="card-image">
                                    <img src="images/cartoon-card3.webp" alt="image" />
                                </div>
                                <div className="card-content">
                                    <div className="card-discriptions">
                                        <p>As you, the morph’s love to party! That’s why crazy live parties/events that you'll remember all your life will be organized… The lucky ones who will be physically present will not only have fun (lot of fun) and meet people (lot of people)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-bg-cartoon">
                            <img src="images/carton-img2.webp" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="morph-collection">
                <div className="collection-container">
                    <div className="morph-collection-bgimg">
                        <img src="images/carton-img3.webp" alt="images" />
                    </div>
                    <div className="morph-collection-detail">
                        <div className="morph-collection-card">
                            <img src="images/ticket-img.webp" alt="image" />
                        </div>
                        <div className="morph-collection-circle">
                            <img src="images/circle-img.webp" alt="image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="dimond-section">
                <div className="container">
                    <div className="dimond-video">
                        <div className="dimond-video-title">
                            <img src="images/text-4.webp" alt="image" />
                        </div>
                        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                    </div>
                    <div className="edouard-section">
                        <div className="edouard-title">
                            <img src="images/edouard-title.webp" alt="image" />
                        </div>
                        <div className="edouard-content-slider">
                            <Row>
                                <Col lg={6} md={6}>
                                    <div className="edouard-content">
                                        <div className="edouard-content-dis">
                                            <p> <b>The first morph collab</b> created inside The Lab is a unique phygital necklace. Made of real white-gold & diamonds, this piece of art is only made for real Web3 passionates.</p>
                                            <p>Thanks to the diamondneck you’ll be able to show-off you’ll best nft.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6}>
                                    <div className="edouard-slider">
                                        <Slider {...settings}>
                                            <div className="slider-image">
                                                <img src="images/slider-img1.webp" alt="image" />
                                            </div>
                                            <div className="slider-image">
                                                <img src="images/slider-img2.webp" alt="image" />
                                            </div>
                                            <div className="slider-image">
                                                <img src="images/slider-img1.webp" alt="image" />
                                            </div>
                                            <div className="slider-image">
                                                <img src="images/slider-img2.webp" alt="image" />
                                            </div>
                                            <div className="slider-image">
                                                <img src="images/slider-img1.webp" alt="image" />
                                            </div>
                                        </Slider>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="collab-section">
                        <div className="collab-title">
                            <img src="images/collab-img.webp" alt="image" />
                        </div>
                        <div className="collab-image">
                            <img src="images/img1.webp" alt="image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="toundery-section">
                <div className="container">
                    <div className="toundery-title">
                        <img src="images/morph-logo.webp" alt="logo" />
                        <div className="toundery-heading">
                            <img src="images/text-5.webp" alt="image" />
                        </div>
                        <div className="toundery-content">
                            <p>The morph have been created into The Lab by a collectif of scientist, some of them are already public.. some of them will be announced over time :</p>
                        </div>
                    </div>
                    <div className="toundery-list">
                        <ul>
                            <li>
                                <div className="list-detail">
                                    <div className="list-img">
                                        <img src="images/toy-img1.webp" alt="image" />
                                    </div>
                                    <div className="list-content">
                                        <p>Discord expert, in charge of our discord strategy and the recruitment of the moderation team. Creator and owner of several discord servers. Global discord users 1 000 000+ He provides 24/7 support to ensure flawless security! </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list-detail">
                                    <div className="list-img">
                                        <img src="images/toy-img2.webp" alt="image" />
                                    </div>
                                    <div className="list-content">
                                        <p>Discord expert, in charge of our discord strategy and the recruitment of the moderation team. Creator and owner of several discord servers. Global discord users 1 000 000+ He provides 24/7 support to ensure flawless security! </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list-detail">
                                    <div className="list-img">
                                        <img src="images/toy-img3.webp" alt="image" />
                                    </div>
                                    <div className="list-content">
                                        <p>Discord expert, in charge of our discord strategy and the recruitment of the moderation team. Creator and owner of several discord servers. Global discord users 1 000 000+ He provides 24/7 support to ensure flawless security! </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-cartoon-img-one">
                        <img src="images/carton-img4.webp" alt="image" />
                    </div>
                    <div className="container">
                        <div className="faq-title">
                            <img src="images/text-6.webp" alt="images" />
                        </div>
                        <div className="faq-content">
                            <div className="faq-content-detail">
                                <h3>What is a morph ?</h3>
                                <p>How many NFTs are in the morph collection 1000</p>
                            </div>
                            <div className="faq-content-detail">
                                <h3>How many NFTs are in the morph collection</h3>
                                <p>1000 morph NFTs will be there to be adopted!</p>
                            </div>
                            <div className="faq-content-detail">
                                <h3>What blockchaine home the morph collection ?</h3>
                                <p>Morphs love Vitalik Buterin, so they just slide in the Ethereum blockchain</p>
                            </div>
                            <div className="faq-content-detail">
                                <h3>Where can I buy a Morph NFT?</h3>
                                <p>XXXXXXX</p>
                            </div>
                            <div className="faq-content-detail">
                                <h3>When can I buy it?</h3>
                                <p>How can buy the diamond-neckless or other merch? <br /> To be able to access to our merch, you have to adopt a morph. Once you have one, you will have the privilege to access to The Lab and to The Closet.</p>
                            </div>
                            <div className="faq-content-detail">
                                <h3>What do you mean by “phygital”?</h3>
                                <p>Donner reponse courte. Dire que c’est une collection NFT dans laquelle chaque owner pourra avoir accès à des drops & évents exclusifs à la fois physiques et digitaux.</p>
                            </div>
                            <div className="faq-content-detail">
                                <h3>How do I contact support?</h3>
                                <p>S’inspirer de la réponse donnée par Boki, qui est très très bien.</p>
                            </div>
                        </div>
                    </div>
                    <div className="faq-cartoon-img-two">
                        <img src="images/carton-img5.webp" alt="image" />
                    </div>
                    <div className="footer-content">
                        <div className="footer-icon">
                            <img src="images/footer-logo.webp" alt="image" />
                        </div>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src="images/twitter-icon.webp" alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="images/instagram-icon.webp" alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
        </>
    )
};

export default Home;