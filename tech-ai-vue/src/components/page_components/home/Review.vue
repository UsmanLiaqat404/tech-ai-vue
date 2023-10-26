<template>
    <section class="section review">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-8">
                    <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h2">our Customer Reviews</h2>
                    </div>
                </div>
            </div>
            <div class="row items-gap">
                <div class="col-12 col-lg-6">
                    <div class="review__single wow fadeInUp" data-wow-duration="600ms">
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
                                content briefs and write 50-100 unique SEO-driven pieces per
                                month. With tech.ai, we now craft briefs, outlines, and full
                                first.
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
                </div>
                <div class="col-12 col-lg-6">
                    <div class="review__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="200ms">
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
                                content briefs and write 50-100 unique SEO-driven pieces per
                                month. With tech.ai, we now craft briefs, outlines, and full
                                first.
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
                </div>
                <div class="col-12 col-lg-6">
                    <div class="review__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="400ms">
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
                                content briefs and write 50-100 unique SEO-driven pieces per
                                month. With tech.ai, we now craft briefs, outlines, and full
                                first.
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
                </div>
                <div class="col-12 col-lg-6">
                    <div class="review__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
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
                                content briefs and write 50-100 unique SEO-driven pieces per
                                month. With tech.ai, we now craft briefs, outlines, and full
                                first.
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
    </section>
</template>

<script>
    export default {
        name: "Review",
    }
</script>