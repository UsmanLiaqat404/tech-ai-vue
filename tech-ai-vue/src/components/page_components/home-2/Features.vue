<template>
    <section class="section features">
        <div class="feature-wrapper">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="features__slider wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                            <div class="swiper-wrapper">
                                <div class="features__slider-single swiper-slide">
                                    <div class="row items-gap align-items-center">
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <div class="features__single-item">
                                                <span class="tag"> features 01</span>
                                                <div class="content">
                                                    <h2 class="h2">Write Factual Trending Content</h2>
                                                    <p>
                                                        tech AI is trained and powered by 'Google Search'
                                                        to chat with you on current events and trending
                                                    </p>
                                                    <router-link to="/sign-in">
                                                        get started free
                                                        <i class="tech-arrow-top"></i>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl-4 d-none d-xl-block">
                                            <div class="feature__thumb text-center">
                                                <img :src="require('@/assets/images/feature-thumb.png')" alt="Image">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <div class="features__single-item">
                                                <span class="tag"> features 02</span>
                                                <div class="content">
                                                    <h2 class="h2">Write anywhere and everywhere</h2>
                                                    <p>
                                                        tech AI is trained and powered by 'Google Search'
                                                        to chat with you on current events and trending
                                                    </p>
                                                    <router-link to="/sign-in">
                                                        Request A Demo
                                                        <i class="tech-arrow-top"></i>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="features__slider-single swiper-slide">
                                    <div class="row items-gap align-items-center">
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <div class="features__single-item">
                                                <span class="tag"> features 03</span>
                                                <div class="content">
                                                    <h2 class="h2">Write Factual Trending Content</h2>
                                                    <p>
                                                        tech AI is trained and powered by 'Google Search'
                                                        to chat with you on current events and trending
                                                    </p>
                                                    <router-link to="/sign-in">
                                                        get started free
                                                        <i class="tech-arrow-top"></i>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl-4 d-none d-xl-block">
                                            <div class="feature__thumb text-center">
                                                <img :src="require('@/assets/images/feature-thumb.png')" alt="Image">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <div class="features__single-item">
                                                <span class="tag"> features 04</span>
                                                <div class="content">
                                                    <h2 class="h2">Write anywhere and everywhere</h2>
                                                    <p>
                                                        tech AI is trained and powered by 'Google Search'
                                                        to chat with you on current events and trending
                                                    </p>
                                                    <router-link to="/sign-in">
                                                        Request A Demo
                                                        <i class="tech-arrow-top"></i>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="features__slider-single swiper-slide">
                                    <div class="row items-gap align-items-center">
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <div class="features__single-item">
                                                <span class="tag"> features 05</span>
                                                <div class="content">
                                                    <h2 class="h2">Write Factual Trending Content</h2>
                                                    <p>
                                                        tech AI is trained and powered by 'Google Search'
                                                        to chat with you on current events and trending
                                                    </p>
                                                    <router-link to="/sign-in">
                                                        get started free
                                                        <i class="tech-arrow-top"></i>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl-4 d-none d-xl-block">
                                            <div class="feature__thumb text-center">
                                                <img :src="require('@/assets/images/feature-thumb.png')" alt="Image">
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 col-xl-4">
                                            <div class="features__single-item">
                                                <span class="tag"> features 06</span>
                                                <div class="content">
                                                    <h2 class="h2">Write anywhere and everywhere</h2>
                                                    <p>
                                                        tech AI is trained and powered by 'Google Search'
                                                        to chat with you on current events and trending
                                                    </p>
                                                    <router-link to="/sign-in">
                                                        Request A Demo
                                                        <i class="tech-arrow-top"></i>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="feature__arrows">
                            <button aria-label="previous slide" class="slide-btn prev-feature">
                                <i class="tech-left-angle"></i>
                            </button>
                            <button aria-label="next slide" class="slide-btn next-feature">
                                <i class="tech-right-angle"></i>
                            </button>
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
        name: "Features",
        mounted() {
            new Swiper('.features__slider', {
                slidesPerView: 'auto',
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 4000,
                },
                navigation: {
                    nextEl: '.next-feature',
                    prevEl: '.prev-feature',
                },
            });
        }
    }
</script>

<style>
    .features__slider {
        overflow: hidden;
    }
</style>