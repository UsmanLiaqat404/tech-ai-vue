<template>
    <section class="section publish">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-10">
                    <div class="publish__inner">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="section__header wow fadeInUp" data-wow-duration="600ms"
                                    data-wow-delay="300ms">
                                    <h2 class="h2">Instruct our AI, generate and publish.</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row items-gap">
                            <div class="col-12 col-sm-6 col-lg-4">
                                <div class="publish__single wow fadeInUp" data-wow-duration="600ms">
                                    <div class="thumb">
                                        <i class="fa-solid fa-square-check"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="h5">Write better content faster</h5>
                                        <p>
                                            create unique and well organized full length articles
                                            from start to finish
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                                <div class="publish__single wow fadeInUp" data-wow-duration="600ms"
                                    data-wow-delay="300ms">
                                    <div class="thumb">
                                        <i class="fa-solid fa-square-check"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="h5">Goodbye’ to the blank page</h5>
                                        <p>
                                            create unique and well organized full length articles
                                            from start to finish
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-lg-4">
                                <div class="publish__single wow fadeInUp" data-wow-duration="600ms"
                                    data-wow-delay="600ms">
                                    <div class="thumb">
                                        <i class="fa-solid fa-square-check"></i>
                                    </div>
                                    <div class="content">
                                        <h5 class="h5">90+ tools and templates</h5>
                                        <p>
                                            create unique and well organized full length articles
                                            from start to finish
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section__content-cta text-center wow fadeInUp" data-wow-duration="600ms"
                            data-wow-delay="300ms">
                            <router-link to="/contact-us" class="btn btn--senary">
                                try a free demo
                            </router-link>
                            <img :src="require('@/assets/images/frame-three.png')" alt="Image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Publish",
    }
</script>