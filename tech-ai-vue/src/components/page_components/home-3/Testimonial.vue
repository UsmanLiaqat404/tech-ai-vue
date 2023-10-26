<template>
    <section class="section testimonial-three review">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h2">our Customer Reviews</h2>
                    </div>
                </div>
            </div>
            <div class="row items-gap align-items-center testimonial-three__slider-container">
                <div class="col-12 col-lg-6">
                    <div class="testimonial-three__slider swiper-container">
                        <div class="swiper-wrapper">
                            <div class="review__single swiper-slide wow fadeInUp" data-wow-duration="600ms">
                                <div class="review-head">
                                    <div class="review__icons">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <img :src="require('@/assets/images/review/icon-one.png')" alt="Image">
                                </div>
                                <div class="review-content">
                                    <p class="fw-7">
                                        tech ai saves us thousands of dollars a week. We create
                                        content briefs and write 50-100 unique SEO-driven pieces
                                        per month. With tech.ai, we now craft briefs, outlines,
                                        and full first.
                                    </p>
                                </div>
                                <div class="review-meta">
                                    <div class="thumb">
                                        <img :src="require('@/assets/images/review/one.png')" alt="Image">
                                    </div>
                                    <div class="content">
                                        <p class="h6">Rex A. Munoz</p>
                                        <p>CEO, uSERP</p>
                                    </div>
                                </div>
                            </div>
                            <div class="review__single swiper-slide wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="200ms">
                                <div class="review-head">
                                    <div class="review__icons">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <img :src="require('@/assets/images/review/icon-two.png')" alt="Image">
                                </div>
                                <div class="review-content">
                                    <p class="fw-7">
                                        tech ai saves us thousands of dollars a week. We create
                                        content briefs and write 50-100 unique SEO-driven pieces
                                        per month. With tech.ai, we now craft briefs, outlines,
                                        and full first.
                                    </p>
                                </div>
                                <div class="review-meta">
                                    <div class="thumb">
                                        <img :src="require('@/assets/images/review/two.png')" alt="Image">
                                    </div>
                                    <div class="content">
                                        <p class="h6">Nicholas Natteau</p>
                                        <p>CEO, uSERP</p>
                                    </div>
                                </div>
                            </div>
                            <div class="review__single swiper-slide wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="400ms">
                                <div class="review-head">
                                    <div class="review__icons">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <img :src="require('@/assets/images/review/icon-three.png')" alt="Image">
                                </div>
                                <div class="review-content">
                                    <p class="fw-7">
                                        tech ai saves us thousands of dollars a week. We create
                                        content briefs and write 50-100 unique SEO-driven pieces
                                        per month. With tech.ai, we now craft briefs, outlines,
                                        and full first.
                                    </p>
                                </div>
                                <div class="review-meta">
                                    <div class="thumb">
                                        <img :src="require('@/assets/images/review/two.png')" alt="Image">
                                    </div>
                                    <div class="content">
                                        <p class="h6">Jeremy Moser</p>
                                        <p>CEO, uSERP</p>
                                    </div>
                                </div>
                            </div>
                            <div class="review__single swiper-slide wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="600ms">
                                <div class="review-head">
                                    <div class="review__icons">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <img :src="require('@/assets/images/review/icon-one.png')" alt="Image">
                                </div>
                                <div class="review-content">
                                    <p class="fw-7">
                                        tech ai saves us thousands of dollars a week. We create
                                        content briefs and write 50-100 unique SEO-driven pieces
                                        per month. With tech.ai, we now craft briefs, outlines,
                                        and full first.
                                    </p>
                                </div>
                                <div class="review-meta">
                                    <div class="thumb">
                                        <img :src="require('@/assets/images/review/three.png')" alt="Image">
                                    </div>
                                    <div class="content">
                                        <p class="h6">Angela R. Nolan</p>
                                        <p>CEO, uSERP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="testimonial-three-thumb">
                        <img :src="require('@/assets/images/review/thumb.png')" alt="Image">
                        <div class="testimonial-switch">
                            <button class="prev-testimonial-three" aria-label="previous slider">
                                <i class="fa-solid fa-angle-up"></i>
                            </button>
                            <button class="next-testimonial-three" aria-label="next slider">
                                <i class="fa-solid fa-angle-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Swiper, { Navigation, Pagination } from 'swiper';
    import 'swiper/swiper-bundle.css';

    Swiper.use([Navigation, Pagination]);
    export default {
        name: "Testimonial",
        mounted() {
            new Swiper('.swiper-container', {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                loop: true,
                speed: 1000,
                direction: 'horizontal',
                autoplay: {
                    delay: 4000,
                },
                navigation: {
                    nextEl: '.next-testimonial-three',
                    prevEl: '.prev-testimonial-three',
                },
                breakpoints: {
                    1400: {
                        slidesPerView: 2,
                        direction: 'vertical',
                    },
                    992: {
                        direction: 'vertical',
                    }
                }
            });
        }
    }
</script>

<style scoped>
    .testimonial-three__slider {
        overflow: hidden;
        user-select: none;
    }

    @media screen and (min-width: 992px) {
        .testimonial-three__slider {
            height: 713px;
        }
    }
</style>