<template>
    <div class="section tour tour-two pb-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="tour__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <video muted loop autoplay controls>
                            <source :src="require('@/assets/images/video/video.mp4')" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class="anime anime--dark">
            <img :src="require('@/assets/images/generate/anime.png')" alt="Image">
        </div>
        <div class="anime anime--light">
            <img :src="require('@/assets/images/anime-five.png')" alt="Image">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tour",
    };
</script>