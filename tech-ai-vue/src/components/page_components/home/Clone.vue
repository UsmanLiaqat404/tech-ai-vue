<template>
    <section class="section clone pt-0">
        <div class="container">
            <div class="row items-gap align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="clone__thumb wow fadeInUp" data-wow-duration="600ms">
                        <div class="clone__thumb-single">
                            <i class="fa-solid fa-signal"></i>
                            <div class="thumb">
                                <img :src="require('@/assets/images/clone-thumb.png')" alt="Image">
                            </div>
                            <div class="content">
                                <p>The Upstairs</p>
                                <p>Matraman</p>
                            </div>
                            <div class="voice__slider-single-content-play">
                                <button aria-label="play audio" class="play-track">
                                    <i class="fa-solid fa-play"></i>
                                </button>
                                <audio class="player"
                                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                            </div>
                            <span class="tag">Original voice</span>
                        </div>
                        <div class="text-end">
                            <div class="clone__thumb-single">
                                <i class="fa-solid fa-signal"></i>
                                <div class="thumb">
                                    <img :src="require('@/assets/images/clone-thumb.png')" alt="Image">
                                </div>
                                <div class="content">
                                    <p>The Upstairs</p>
                                    <p>Matraman</p>
                                </div>
                                <div class="voice__slider-single-content-play">
                                    <button aria-label="play audio" class="play-track">
                                        <i class="fa-solid fa-play"></i>
                                    </button>
                                    <audio class="player"
                                        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                </div>
                                <span class="tag">Original voice</span>
                            </div>
                        </div>
                        <div class="anime">
                            <img :src="require('@/assets/images/anime-one.png')" alt="Image" class="anime-one">
                            <img :src="require('@/assets/images/anime-two.png')" alt="Image" class="anime-two">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="clone__content section__content">
                        <h2 class="h2 wow fadeInUp" data-wow-duration="600ms">
                            Pitch Perfect Voice Clones
                        </h2>
                        <div class="paragraph wow fadeInUp" data-wow-duration="600ms">
                            <p class="fw-5 text-lg">
                                Resemble's AI voice generator lets you create realistic
                                human-like voiceovers in seconds.
                            </p>
                            <p>
                                Create a spot-on match of the voice you like with Murf.
                                Customize the voice by adjusting pitch, tone, speed, and
                                more to produce life-like narration for your content. Make
                                modifications to your script anytime during the creative
                            </p>
                        </div>
                        <ul class="wow fadeInUp" data-wow-duration="600ms">
                            <li>
                                <i class="fa-solid fa-check"></i>
                                Emotions
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                Speech-To-Speech
                            </li>
                            <li>
                                <i class="fa-solid fa-check"></i>
                                Localize
                            </li>
                        </ul>
                        <div class="section__content-cta wow fadeInUp" data-wow-duration="600ms">
                            <router-link to="/contact-us" class="btn btn--primary">
                                request A Demo
                            </router-link>
                            <router-link to="/about" class="btn btn--quaternary">
                                About Us
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
        name: "Clone",
        mounted() {
            const cloneThumbs = document.querySelectorAll('.clone__thumb-single');
            cloneThumbs.forEach(thumb => {
                const playerClone = thumb.querySelector('.player'); // Get the audio player element

                thumb.querySelector('.play-track').addEventListener('click', function () {
                    if (playerClone.paused) {
                        playerClone.play(); // Play the audio
                        this.querySelector('i').classList.remove('fa-play');
                        this.querySelector('i').classList.add('fa-pause'); // Toggle the play/pause icon
                    } else {
                        playerClone.pause(); // Pause the audio
                        this.querySelector('i').classList.remove('fa-pause');
                        this.querySelector('i').classList.add('fa-play'); // Toggle the play/pause icon
                    }
                });
            });
        }
    };
</script>