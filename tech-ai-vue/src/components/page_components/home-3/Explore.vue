<template>
    <section class="section explore">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section__header--secondary">
                        <div class="row align-items-center items-gap">
                            <div class="col-12 col-lg-8">
                                <h2 class="h2 wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                                    Explore More AI Products from tech AI
                                </h2>
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="cmn-pagination explore-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="explore__slider">
                        <div class="swiper-wrapper">
                            <div class="explore__slider-single swiper-slide">
                                <div class="thumb">
                                    <a href="javascript:void(0)">
                                        <img :src="require('@/assets/images/blog/one.png')" alt="Image">
                                    </a>
                                </div>
                                <div class="content">
                                    <h5 class="h5">
                                        <a href="javascript:void(0)">Free Video Customizer</a>
                                    </h5>
                                    <p>
                                        Convert videos to visually striking cartoons in only a
                                        couple of clicks. 100% Automatically and FREE! Animate
                                        your video now!
                                    </p>
                                </div>
                            </div>
                            <div class="explore__slider-single swiper-slide">
                                <div class="thumb">
                                    <a href="javascript:void(0)">
                                        <img :src="require('@/assets/images/blog/two.png')" alt="Image">
                                    </a>
                                </div>
                                <div class="content">
                                    <h5 class="h5">
                                        <a href="javascript:void(0)">AI image compressed</a>
                                    </h5>
                                    <p>
                                        Convert videos to visually striking cartoons in only a
                                        couple of clicks. 100% Automatically and FREE! Animate
                                        your video now!
                                    </p>
                                </div>
                            </div>
                            <div class="explore__slider-single swiper-slide">
                                <div class="thumb">
                                    <a href="javascript:void(0)">
                                        <img :src="require('@/assets/images/blog/three.png')" alt="Image">
                                    </a>
                                </div>
                                <div class="content">
                                    <h5 class="h5">
                                        <a href="javascript:void(0)">video object remover</a>
                                    </h5>
                                    <p>
                                        Convert videos to visually striking cartoons in only a
                                        couple of clicks. 100% Automatically and FREE! Animate
                                        your video now!
                                    </p>
                                </div>
                            </div>
                            <div class="explore__slider-single swiper-slide">
                                <div class="thumb">
                                    <a href="javascript:void(0)">
                                        <img :src="require('@/assets/images/blog/one.png')" alt="Image">
                                    </a>
                                </div>
                                <div class="content">
                                    <h5 class="h5">
                                        <a href="javascript:void(0)">Free Video Customizer</a>
                                    </h5>
                                    <p>
                                        Convert videos to visually striking cartoons in only a
                                        couple of clicks. 100% Automatically and FREE! Animate
                                        your video now!
                                    </p>
                                </div>
                            </div>
                            <div class="explore__slider-single swiper-slide">
                                <div class="thumb">
                                    <a href="javascript:void(0)">
                                        <img :src="require('@/assets/images/blog/two.png')" alt="Image">
                                    </a>
                                </div>
                                <div class="content">
                                    <h5 class="h5">
                                        <a href="javascript:void(0)">AI image compressed</a>
                                    </h5>
                                    <p>
                                        Convert videos to visually striking cartoons in only a
                                        couple of clicks. 100% Automatically and FREE! Animate
                                        your video now!
                                    </p>
                                </div>
                            </div>
                            <div class="explore__slider-single swiper-slide">
                                <div class="thumb">
                                    <a href="javascript:void(0)">
                                        <img :src="require('@/assets/images/blog/three.png')" alt="Image">
                                    </a>
                                </div>
                                <div class="content">
                                    <h5 class="h5">
                                        <a href="javascript:void(0)">video object remover</a>
                                    </h5>
                                    <p>
                                        Convert videos to visually striking cartoons in only a
                                        couple of clicks. 100% Automatically and FREE! Animate
                                        your video now!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';

    export default {
        name: "Explore",
        mounted() {
            new Swiper('.explore__slider', {
                slidesPerView: 1,
                slidesPerGroup: 2,
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                pagination: {
                    el: '.explore-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }
            });
        }
    }
</script>

<style>
    .explore__slider {
        overflow: hidden;
        user-select: none;
    }
</style>