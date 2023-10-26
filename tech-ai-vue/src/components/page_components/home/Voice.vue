<template>
    <section class="section voice">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section__header--secondary">
                        <div class="row align-items-center items-gap">
                            <div class="col-12 col-lg-8">
                                <h2 class="h2 wow fadeInUp" data-wow-duration="600ms">
                                    There's a voice for every need
                                </h2>
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="cmn-pagination cmn-pagination-light voice-pagination">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="voice__slider">
                        <div class="voice__slider-container">
                            <div class="swiper-wrapper">
                                <div class="voice__slider-single voice-bg-one swiper-slide">
                                    <div class="voice__slider-single-thumb">
                                        <img :src="require('@/assets/images/voice/one.png')" alt="Image">
                                    </div>
                                    <div class="voice__slider-single-content">
                                        <h5 class="h5">product designer</h5>
                                        <div class="voice__slider-single-content-play">
                                            <button aria-label="play audio" class="play-track">
                                                <i class="fa-solid fa-play"></i>
                                            </button>
                                            <audio class="player"
                                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                        </div>
                                    </div>
                                </div>
                                <div class="voice__slider-single voice-bg-two swiper-slide">
                                    <div class="voice__slider-single-thumb">
                                        <img :src="require('@/assets/images/voice/two.png')" alt="Image">
                                    </div>
                                    <div class="voice__slider-single-content">
                                        <h5 class="h5">educator</h5>
                                        <div class="voice__slider-single-content-play">
                                            <button aria-label="play audio" class="play-track">
                                                <i class="fa-solid fa-play"></i>
                                            </button>
                                            <audio class="player"
                                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                        </div>
                                    </div>
                                </div>
                                <div class="voice__slider-single voice-bg-three swiper-slide">
                                    <div class="voice__slider-single-thumb">
                                        <img :src="require('@/assets/images/voice/three.png')" alt="Image">
                                    </div>
                                    <div class="voice__slider-single-content">
                                        <h5 class="h5">digital markerter</h5>
                                        <div class="voice__slider-single-content-play">
                                            <button aria-label="play audio" class="play-track">
                                                <i class="fa-solid fa-play"></i>
                                            </button>
                                            <audio class="player"
                                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                        </div>
                                    </div>
                                </div>
                                <div class="voice__slider-single voice-bg-four swiper-slide">
                                    <div class="voice__slider-single-thumb">
                                        <img :src="require('@/assets/images/voice/four.png')" alt="Image">
                                    </div>
                                    <div class="voice__slider-single-content">
                                        <h5 class="h5">corporate couch</h5>
                                        <div class="voice__slider-single-content-play">
                                            <button aria-label="play audio" class="play-track">
                                                <i class="fa-solid fa-play"></i>
                                            </button>
                                            <audio class="player"
                                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                        </div>
                                    </div>
                                </div>
                                <div class="voice__slider-single voice-bg-five swiper-slide">
                                    <div class="voice__slider-single-thumb">
                                        <img :src="require('@/assets/images/voice/five.png')" alt="Image">
                                    </div>
                                    <div class="voice__slider-single-content">
                                        <h5 class="h5">podcaster</h5>
                                        <div class="voice__slider-single-content-play">
                                            <button aria-label="play audio" class="play-track">
                                                <i class="fa-solid fa-play"></i>
                                            </button>
                                            <audio class="player"
                                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                        </div>
                                    </div>
                                </div>
                                <div class="voice__slider-single voice-bg-six swiper-slide">
                                    <div class="voice__slider-single-thumb">
                                        <img :src="require('@/assets/images/voice/six.png')" alt="Image">
                                    </div>
                                    <div class="voice__slider-single-content">
                                        <h5 class="h5">customer call</h5>
                                        <div class="voice__slider-single-content-play">
                                            <button aria-label="play audio" class="play-track">
                                                <i class="fa-solid fa-play"></i>
                                            </button>
                                            <audio class="player"
                                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                        </div>
                                    </div>
                                </div>
                                <div class="voice__slider-single voice-bg-one swiper-slide">
                                    <div class="voice__slider-single-thumb">
                                        <img :src="require('@/assets/images/voice/one.png')" alt="Image">
                                    </div>
                                    <div class="voice__slider-single-content">
                                        <h5 class="h5">product designer</h5>
                                        <div class="voice__slider-single-content-play">
                                            <button aria-label="play audio" class="play-track">
                                                <i class="fa-solid fa-play"></i>
                                            </button>
                                            <audio class="player"
                                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                        </div>
                                    </div>
                                </div>
                                <div class="voice__slider-single voice-bg-two swiper-slide">
                                    <div class="voice__slider-single-thumb">
                                        <img :src="require('@/assets/images/voice/two.png')" alt="Image">
                                    </div>
                                    <div class="voice__slider-single-content">
                                        <h5 class="h5">educator</h5>
                                        <div class="voice__slider-single-content-play">
                                            <button aria-label="play audio" class="play-track">
                                                <i class="fa-solid fa-play"></i>
                                            </button>
                                            <audio class="player"
                                                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';

    export default {
        name: "Voice",
        mounted() {
            new Swiper('.voice__slider-container', {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                pagination: {
                    el: '.voice-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                },
                breakpoints: {
                    1400: {
                        slidesPerView: 6,
                        slidesPerGroup: 2,
                    },
                    992: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    425: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }
            });

            const voiceSliders = document.querySelectorAll('.voice__slider-single');
            voiceSliders.forEach(slider => {
                const player = slider.querySelector('.player'); // Get the audio player element

                slider.querySelector('.play-track').addEventListener('click', function () {
                    if (player.paused) {
                        player.play(); // Play the audio
                        this.querySelector('i').classList.remove('fa-play');
                        this.querySelector('i').classList.add('fa-pause'); // Toggle the play/pause icon
                    } else {
                        player.pause(); // Pause the audio
                        this.querySelector('i').classList.remove('fa-pause');
                        this.querySelector('i').classList.add('fa-play'); // Toggle the play/pause icon
                    }
                });
            });
        },
    };
</script>