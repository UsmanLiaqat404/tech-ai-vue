<template>
    <section class="section cta-two pb-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cta-two__inner bg-img wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                            <h2 class="h2">Ready to expedite your writing?</h2>
                            <p>
                                Generate unique article drafts from headlines and keywords,
                                now
                            </p>
                        </div>
                        <ul>
                            <li>FULL ARTICLE DRAFT IN MINUTES</li>
                            <li>SEO FRIENDLY CONTENT</li>
                            <li>LIST OF CITATIONS FOR VERIFICATION</li>
                            <li>UNIQUE & RELEVANT ORIGINAL CONTENT</li>
                        </ul>
                        <div class="section__content-cta text-center">
                            <router-link to="/sign-up" class="btn btn--senary">
                                start writing free
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="anime anime--dark">
            <img :src="require('@/assets/images/anime-new-two.png')" alt="Image" class="one">
            <img :src="require('@/assets/images/anime-new-three.png')" alt="Image" class="two">
        </div>
        <div class="anime anime--light">
            <img :src="require('@/assets/images/anime-new.png')" alt="Image" class="one">
            <img :src="require('@/assets/images/anime-new.png')" alt="Image" class="two">
        </div>
    </section>
</template>

<script>
    export default {
        name: "CTA",
    }
</script>

<style scoped>
    .cta-two__inner {
        background-image: url('~@/assets/images/cta-two-bg.png');
    }
</style>