<template>
    <section class="section use-case-about pb-0">
        <div class="container">
            <div class="row items-gap align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="use-case-about__content section__content wow fadeInUp" data-wow-duration="600ms"
                        data-wow-delay="300ms">
                        <h2 class="h2">
                            #1 AI Writer That Writes Long- Form Content In Seconds
                        </h2>
                        <div class="paragraph">
                            <p>
                                analyses the speaker's face and gaze during a video
                                conversation to maintain eye contact before changing the
                                camera position. io at a later time. Clear, consistent, and
                                professional voices for marketing, explainer, product, and
                                YouTube videos.
                            </p>
                            <p>
                                Spend less time in copywriting and research with Writesonic
                                AI writer. Our AI article writer helps with 2000+ words
                                SEO-optimized content in one go.
                            </p>
                        </div>
                        <div class="section__content-cta">
                            <router-link to="/sign-up" class="btn btn--primary">
                                get started - its free
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="use-case-about__thumb text-start text-lg-end">
                        <img :src="require('@/assets/images/use-case/thumb.png')" alt="Image" class="wow fadeInRight"
                            data-wow-duration="600ms" data-wow-delay="300ms">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About",
    }
</script>