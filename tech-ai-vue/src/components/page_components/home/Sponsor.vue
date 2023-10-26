<template>
    <div class="sponsor">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="sponsor__inner wow fadeInUp" data-wow-duration="600ms">
                        <div class="section__header">
                            <h4 class="h4">Trusted by users and teams of all sizes</h4>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="sponsor__slider swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/bose.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/amazon.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/microsoft.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/netflix.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/samsung.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/toyota.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/bose.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/amazon.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/microsoft.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/netflix.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/samsung.png')" alt="Image">
                                        </div>
                                        <div class="sponsor__slider-item swiper-slide">
                                            <img :src="require('@/assets/images/sponsor/toyota.png')" alt="Image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';
    
    export default {
        name: "Sponsor",
        mounted() {
            new Swiper('.swiper-container', {
                slidesPerView: 2,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 4000,
                },
                breakpoints: {
                    1400: {
                        slidesPerView: 6,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    425: {
                        slidesPerView: 3,
                    },
                }
            });
        },
    };
</script>
