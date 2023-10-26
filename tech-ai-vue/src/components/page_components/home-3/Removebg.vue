<template>
    <section class="section remove-bg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section__header wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <h2 class="h2">How to Remove Background from tech AI</h2>
                    </div>
                </div>
            </div>
            <div class="row items-gap-two">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="remove-bg-single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="200ms">
                        <div class="thumb">
                            <img :src="require('@/assets/images/remove/one.png')" alt="Image">
                        </div>
                        <h5 class="h5">Upload Your Image</h5>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="remove-bg-single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="400ms">
                        <div class="thumb">
                            <img :src="require('@/assets/images/remove/two.png')" alt="Image">
                        </div>
                        <h5 class="h5">Auto Remove Background</h5>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="remove-bg-single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                        <div class="thumb">
                            <img :src="require('@/assets/images/remove/three.png')" alt="Image">
                        </div>
                        <h5 class="h5">Download PNG Image</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Removebg",
    }
</script>