<template>
    <div class="overview">
        <div class="container">
            <div class="row items-gap">
                <div class="col-12 col-sm-6 col-xl-3">
                    <div class="overview__single wow fadeInUp" data-wow-duration="600ms">
                        <img :src="require('@/assets/images/icons/overview-one.png')" alt="Image">
                        <p class="h6">Text-to-Speech</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-3">
                    <div class="overview__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="200ms">
                        <img :src="require('@/assets/images/icons/overview-two.png')" alt="Image">
                        <p class="h6">Speech-to-Speech</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-3">
                    <div class="overview__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="400ms">
                        <img :src="require('@/assets/images/icons/overview-three.png')" alt="Image">
                        <p class="h6">Neural Editing</p>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-xl-3">
                    <div class="overview__single wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                        <img :src="require('@/assets/images/icons/overview-four.png')" alt="Image">
                        <p class="h6">Language Dubbing</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Overview",
    };
</script>