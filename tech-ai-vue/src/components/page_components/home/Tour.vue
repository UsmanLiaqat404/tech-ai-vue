<template>
    <section class="section tour">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-6">
                    <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h2">Take a quick tour of techAI</h2>
                        <p class="max-5">
                            Watch this video to learn all about our AI voice technology
                            and how to use it in your products
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tour__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <video muted loop autoplay controls>
                            <source :src="require('@/assets/images/video/video.mp4')" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tour__content-cta wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="trust">
                            <div class="review">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="fw-7">Rated Excellent on Trustpilot</p>
                        </div>
                        <div class="action">
                            <router-link to="/sign-up" class="btn btn--primary">
                                start free now
                            </router-link>
                        </div>
                        <img :src="require('@/assets/images/frame-two.png')" alt="Image" class="frame">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Tour",
    };
</script>