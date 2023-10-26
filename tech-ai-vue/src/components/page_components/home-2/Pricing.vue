<template>
    <section class="section pricing-two bg-img">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-6">
                    <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h2">Ready to Get Started?</h2>
                    </div>
                </div>
            </div>
            <div class="row items-gap">
                <div class="col-12 col-md-6 col-lg-6 col-xxl-3">
                    <div class="pricing-two__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                        <h5 class="h5">Starter</h5>
                        <div class="meta">
                            <div class="content">
                                <h2 class="h2 title">$19</h2>
                                <p>paid per month</p>
                            </div>
                        </div>
                        <hr>
                        <ul>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                5 User seats
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                50,000 words per month
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                70+ AI writing tools
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                100+ Copywriting tool
                            </li>
                        </ul>
                        <hr>
                        <router-link to="/sign-up" class="btn btn--septenary">
                            Start for free
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xxl-3">
                    <div class="pricing-two__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="900ms">
                        <h5 class="h5 yel">Basic</h5>
                        <div class="meta">
                            <div class="content">
                                <h2 class="h2 title">$39</h2>
                                <p>paid per month</p>
                            </div>
                        </div>
                        <hr>
                        <ul>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                5 User seats
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                50,000 words per month
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                70+ AI writing tools
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                100+ Copywriting tool
                            </li>
                        </ul>
                        <hr>
                        <router-link to="/sign-up" class="btn btn--septenary">
                            choose a plan
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xxl-3">
                    <div class="pricing-two__single pricing-two__single--alt wow fadeInUp" data-wow-duration="600ms"
                        data-wow-delay="1200ms">
                        <h5 class="h5 pri">Pro</h5>
                        <div class="meta">
                            <div class="content">
                                <h2 class="h2 title">$59</h2>
                                <p>paid per month</p>
                            </div>
                        </div>
                        <hr>
                        <ul>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                5 User seats
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                50,000 words per month
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                70+ AI writing tools
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                100+ Copywriting tool
                            </li>
                        </ul>
                        <hr>
                        <router-link to="/sign-up" class="btn btn--septenary">
                            choose a plan
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xxl-3">
                    <div class="pricing-two__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="1500ms">
                        <h5 class="h5 tri">Elite</h5>
                        <div class="meta">
                            <div class="content">
                                <h2 class="h2 title">$79</h2>
                                <p>paid per month</p>
                            </div>
                        </div>
                        <hr>
                        <ul>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                5 User seats
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                50,000 words per month
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                70+ AI writing tools
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                100+ Copywriting tool
                            </li>
                        </ul>
                        <hr>
                        <router-link to="/sign-up" class="btn btn--septenary">
                            choose a plan
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Pricing",
    }
</script>

<style>
    .pricing-two {
        background-image: url('~@/assets/images/pricing-bg.png');
    }
</style>