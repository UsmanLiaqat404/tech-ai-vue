<template>
    <section class="section cta bg-img ctaa">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-6">
                    <div class="section__header m-0 text-center wow fadeInUp" data-wow-duration="600ms"
                        data-wow-delay="300ms">
                        <h2 class="h2">
                            Start creating a custom voice for your brand today
                        </h2>
                        <div class="form-cta">
                            <router-link to="/sign-up" class="btn btn--quinary">
                                create free AI voice Over
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "CTA",
    }
</script>

<style scoped>
    .cta {
        background-image: url('~@/assets/images/cta-bg.png');
    }
</style>