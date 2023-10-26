<template>
    <section class="banner-three">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="banner-three__inner bg-img" data-background="assets/images/banner/banner-three-bg.png">
                        <div class="banner-three-slider">
                            <div class="swiper-wrapper">
                                <div class="banner-three__single swiper-slide">
                                    <div class="row items-gap align-items-center">
                                        <div class="col-12 col-xl-6">
                                            <div class="banner-three__content">
                                                <p>Fully automatic, then go far beyond the AI.</p>
                                                <h1 class="h2-light">
                                                    Remove Background From Image Using Artificial
                                                    Intelligence
                                                </h1>
                                                <div class="section__content-cta">
                                                    <router-link to="/sign-in" class="btn btn--ocotonary">
                                                        start remove now
                                                    </router-link>
                                                    <router-link to="/use-case" class="try-this">
                                                        <span class="thumb">
                                                            <img :src="require('@/assets/images/banner/one.png')"
                                                                alt="Image">
                                                            <img :src="require('@/assets/images/banner/two.png')"
                                                                alt="Image">
                                                            <img :src="require('@/assets/images/banner/three.png')"
                                                                alt="Image">
                                                        </span>
                                                        <span class="content">
                                                            <span> No image?</span>
                                                            <span> Try one of these</span>
                                                        </span>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <div class="banner-three__thumb">
                                                <img :src="require('@/assets/images/banner/banner-three-thumb.png')"
                                                    alt="Image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner-three__single swiper-slide">
                                    <div class="row items-gap align-items-center">
                                        <div class="col-12 col-xl-6">
                                            <div class="banner-three__content">
                                                <p>Fully automatic, then go far beyond the AI.</p>
                                                <h1 class="h2-light">
                                                    Remove Background From Image Using Artificial
                                                    Intelligence
                                                </h1>
                                                <div class="section__content-cta">
                                                    <router-link to="/sign-in" class="btn btn--ocotonary">
                                                        start remove now
                                                    </router-link>
                                                    <router-link to="/use-case" class="try-this">
                                                        <span class="thumb">
                                                            <img :src="require('@/assets/images/banner/one.png')"
                                                                alt="Image">
                                                            <img :src="require('@/assets/images/banner/two.png')"
                                                                alt="Image">
                                                            <img :src="require('@/assets/images/banner/three.png')"
                                                                alt="Image">
                                                        </span>
                                                        <span class="content">
                                                            <span> No image?</span>
                                                            <span> Try one of these</span>
                                                        </span>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <div class="banner-three__thumb">
                                                <img :src="require('@/assets/images/banner/banner-three-thumb.png')"
                                                    alt="Image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner-three__single swiper-slide">
                                    <div class="row items-gap align-items-center">
                                        <div class="col-12 col-xl-6">
                                            <div class="banner-three__content">
                                                <p>Fully automatic, then go far beyond the AI.</p>
                                                <h1 class="h2-light">
                                                    Remove Background From Image Using Artificial
                                                    Intelligence
                                                </h1>
                                                <div class="section__content-cta">
                                                    <router-link to="/sign-in" class="btn btn--ocotonary">
                                                        start remove now
                                                    </router-link>
                                                    <router-link to="/use-case" class="try-this">
                                                        <span class="thumb">
                                                            <img :src="require('@/assets/images/banner/one.png')"
                                                                alt="Image">
                                                            <img :src="require('@/assets/images/banner/two.png')"
                                                                alt="Image">
                                                            <img :src="require('@/assets/images/banner/three.png')"
                                                                alt="Image">
                                                        </span>
                                                        <span class="content">
                                                            <span> No image?</span>
                                                            <span> Try one of these</span>
                                                        </span>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <div class="banner-three__thumb">
                                                <img :src="require('@/assets/images/banner/banner-three-thumb.png')"
                                                    alt="Image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cmn-pagination banner-three-pagination"></div>
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
        name: "Banner3",
        mounted() {
            new Swiper('.banner-three-slider', {
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                roundLengths: true,
                speed: 1200,
                spaceBetween: 30,
                speed: 1000,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: '.banner-three-pagination',
                    clickable: true,
                },
            });
        }
    };
</script>

<style>
    .banner-three__inner {
        background-image: url('~@/assets/images/banner/banner-three-bg.png');
    }

    .banner-three-slider {
        overflow: hidden;
        user-select: none;
    }

    .banner-three .cmn-pagination {
        flex-direction: column;
    }
</style>