<template>
    <section class="section generate pb-0">
        <div class="container">
            <div class="row items-gap">
                <div class="col-12 col-lg-6 col-xl-5">
                    <div class="generate__content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="section__header text-start">
                            <h2 class="h2">
                                Generate content in seconds using
                                <span class="grd">Tech AI</span>
                            </h2>
                        </div>
                        <div>
                            <div class="generate__content-btn generate__content-btn-active">
                                <div class="thumb">
                                    <i class="tech-pen"></i>
                                </div>
                                <div class="content">
                                    <h5 class="h5">blog article</h5>
                                    <p>
                                        create unique and well organized full length articles
                                        from start to finish
                                    </p>
                                </div>
                            </div>
                            <div class="generate__content-btn">
                                <div class="thumb">
                                    <i class="tech-cart"></i>
                                </div>
                                <div class="content">
                                    <h5 class="h5">eCommerce content</h5>
                                    <p>
                                        create unique and well organized full length articles
                                        from start to finish
                                    </p>
                                </div>
                            </div>
                            <div class="generate__content-btn">
                                <div class="thumb">
                                    <i class="tech-mike"></i>
                                </div>
                                <div class="content">
                                    <h5 class="h5">paids add & social media</h5>
                                    <p>
                                        create unique and well organized full length articles
                                        from start to finish
                                    </p>
                                </div>
                            </div>
                            <div class="generate__content-btn">
                                <div class="thumb">
                                    <i class="tech-globe"></i>
                                </div>
                                <div class="content">
                                    <h5 class="h5">Website Content</h5>
                                    <p>
                                        create unique and well organized full length articles
                                        from start to finish
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-7">
                    <div class="generate__thumb wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="tab-content active">
                            <img :src="require('@/assets/images/generate/one.png')" alt="image">
                        </div>
                        <div class="tab-content">
                            <img :src="require('@/assets/images/generate/one.png')" alt="image">
                        </div>
                        <div class="tab-content">
                            <img :src="require('@/assets/images/generate/one.png')" alt="image">
                        </div>
                        <div class="tab-content">
                            <img :src="require('@/assets/images/generate/one.png')" alt="image">
                        </div>
                        <div class="anime anime--dark">
                            <img :src="require('@/assets/images/generate/anime.png')" alt="Image">
                        </div>
                        <div class="anime anime--light">
                            <img :src="require('@/assets/images/anime-four.png')" alt="Image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Generate",
        mounted() {
            const tabContents = document.querySelectorAll('.tab-content');
            const tabButtons = document.querySelectorAll('.generate__content-btn');

            // Show the first tab content and add 'active' class to the first tab button
            tabContents[0].style.display = 'block';
            tabButtons[0].classList.add('generate__content-btn-active');

            // Add click event listeners to the tab buttons
            tabButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    // Remove 'active' class from all tab buttons and hide all tab contents
                    tabButtons.forEach((btn) => btn.classList.remove('generate__content-btn-active'));
                    tabContents.forEach((content) => content.style.display = 'none');

                    // Add 'active' class to the clicked tab button
                    button.classList.add('generate__content-btn-active');

                    // Show the corresponding tab content with fade-in animation
                    tabContents[index].style.display = 'block';
                    tabContents[index].style.animation = 'fadeIn 900ms'; // Add your own fadeIn animation here
                });
            });
        }
    }
</script>

<style scoped>
    .tab-content {
        display: none;
    }
</style>