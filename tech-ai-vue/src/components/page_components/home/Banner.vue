<template>
    <div>
        <section class="section banner-one bg-img">
            <div class="container">
                <div class="row items-gap align-items-center">
                    <div class="col-12 col-md-10 col-lg-6">
                        <div class="banner-one__content">
                            <p class="h6">
                                <span>AI Voice</span>
                                Generator and Text to Speech
                            </p>
                            <h1 class="h1">Your Complete Generative Voice AI Toolkit</h1>
                            <div class="section__content-cta">
                                <router-link to="/sign-up" class="btn btn--primary">
                                    start free now
                                </router-link>
                                <router-link to="/contact-us" class="btn btn--quaternary">
                                    request A Demo
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="banner-one__thumb text-start text-lg-end">
                            <img :src="require('@/assets/images/banner/banner-one-thumb.png')" alt="Image"
                                class="wow fadeInUp">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Banner",
    };
</script>

<style scoped>
.home-light .banner-one {
    background-image: url('~@/assets/images/banner/banner-one-bg-light.png');
}
.home-dark .banner-one {
    background-image: url('~@/assets/images/banner/banner-one-bg.png');
}
</style>