<template>
    <div>
        <div class="my-app">
            <Header :logo-src="require('@/assets/images/logo.png')" />
            <PageHeader page-title="Latest Blog" />
            <section class="section blog-main pb-0">
                <div class="container">
                    <div class="row items-gap">
                        <div class="col-12 col-xl-8">
                            <div class="blog-main__content">
                                <div class="blog-main__single">
                                    <div class="thumb">
                                        <div class="thumb-link wow fadeInUp" data-wow-duration="600ms"
                                            data-wow-delay="600ms">
                                            <router-link to="/blog-details">
                                                <img :src="require('@/assets/images/news/eight.png')" alt="Image">
                                            </router-link>
                                        </div>
                                        <div class="meta">
                                            <div class="meta__left">
                                                <p>
                                                    <strong>Written by:</strong>
                                                    Marry biden
                                                </p>
                                                <span></span>
                                                <p>10/01/2023</p>
                                            </div>
                                            <div class="meta__right">
                                                <router-link to="/blog-two">Nature</router-link>
                                                <router-link to="/blog-two">Health</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="900ms">
                                        <h4 class="h4">
                                            <router-link to="/blog-details">
                                                Guide dog shortage: The blind people who train their
                                            </router-link>
                                        </h4>
                                        <p>
                                            Daily Star News published on Feb 2nd, 2022, Sangbad
                                            Protidin dated January 31st, 2022 and HRCBM's
                                            investigation. Bangladesh again witnessing uptick in
                                            violence against minorities in the country.
                                        </p>
                                        <div class="cta">
                                            <router-link to="/blog-details">
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-main__single">
                                    <div class="thumb">
                                        <div class="thumb-link wow fadeInUp" data-wow-duration="600ms"
                                            data-wow-delay="600ms">
                                            <router-link to="/blog-details">
                                                <img :src="require('@/assets/images/news/nine.png')" alt="Image">
                                            </router-link>
                                            <div class="video-wrap">
                                                <a href="javascript:void(0)" @click="showModal = true"
                                                    class="video-btn">
                                                    <i class="fa-solid fa-play"></i>
                                                </a>
                                            </div>
                                            <div class="modal-overlay" v-if="showModal">
                                                <iframe width="100%" height="100%"
                                                    src="https://www.youtube.com/embed/RvreULjnzFo"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen>
                                                </iframe>
                                                <button @click="showModal=false">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                        <div class="meta">
                                            <div class="meta__left">
                                                <p>
                                                    <strong>Written by:</strong>
                                                    Marry biden
                                                </p>
                                                <span></span>
                                                <p>10/01/2023</p>
                                            </div>
                                            <div class="meta__right">
                                                <router-link to="/blog-two">Nature</router-link>
                                                <router-link to="/blog-two">Health</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="900ms">
                                        <h4 class="h4">
                                            <router-link to="/blog-details">
                                                A team of scientists from NASA's Jet Propulsion
                                            </router-link>
                                        </h4>
                                        <p>
                                            Daily Star News published on Feb 2nd, 2022, Sangbad
                                            Protidin dated January 31st, 2022 and HRCBM's
                                            investigation. Bangladesh again witnessing uptick in
                                            violence against minorities in the country.
                                        </p>
                                        <div class="cta">
                                            <router-link to="/blog-details">
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-main__single">
                                    <div class="thumb">
                                        <div class="thumb-radio wow fadeInUp" data-wow-duration="600ms"
                                            data-wow-delay="600ms">
                                            <h4 class="h4">Insert Audio Title Here</h4>
                                            <div class="radio">
                                                <div class="audio-player">
                                                    <audio controls>
                                                        <source
                                                            src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
                                                            type="audio/mp3">
                                                    </audio>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="meta">
                                            <div class="meta__left">
                                                <p>
                                                    <strong>Written by:</strong>
                                                    Marry biden
                                                </p>
                                                <span></span>
                                                <p>10/01/2023</p>
                                            </div>
                                            <div class="meta__right">
                                                <router-link to="/blog-two">Nature</router-link>
                                                <router-link to="/blog-two">Health</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                                        <h4 class="h4">
                                            <router-link to="/blog-details">
                                                There are also natural sources of methane - from
                                            </router-link>
                                        </h4>
                                        <p>
                                            Daily Star News published on Feb 2nd, 2022, Sangbad
                                            Protidin dated January 31st, 2022 and HRCBM's
                                            investigation. Bangladesh again witnessing uptick in
                                            violence against minorities in the country.
                                        </p>
                                        <div class="cta">
                                            <router-link to="/blog-details">
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="pagination-wrapper">
                                    <ul class="pagination">
                                        <li>
                                            <router-link to="/blog-two">01</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/blog-two" class="active">02</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/blog-two">03</router-link>
                                        </li>
                                        <li>
                                            <button>
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-4">
                            <div class="blog-main__sidebar">
                                <div class="widget wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                                    <div class="widget__head">
                                        <h5 class="h5">Search</h5>
                                    </div>
                                    <div class="widget-search">
                                        <form action="#" method="post">
                                            <div class="form-group-input">
                                                <input type="search" name="blog-search" id="blogSearch"
                                                    placeholder="Search here. . .">
                                                <button type="submit">
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="widget wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                                    <div class="widget__head">
                                        <h5 class="h5">Categories</h5>
                                    </div>
                                    <div class="widget__list">
                                        <ul>
                                            <li>
                                                <router-link to="/blog-two">Business</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">Job Market</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">Marketing</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">News</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">Social Media</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">Trends</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">Writing</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget">
                                    <div class="widget__head">
                                        <h5 class="h5">Recent Posts</h5>
                                    </div>
                                    <div class="widget__latest">
                                        <div class="latest-single wow fadeInUp" data-wow-duration="600ms"
                                            data-wow-delay="600ms">
                                            <div class="latest-thumb">
                                                <router-link to="/blog-details">
                                                    <img :src="require('@/assets/images/news/ten.png')" alt="Image">
                                                </router-link>
                                            </div>
                                            <div class="latest-content">
                                                <p>10/01/2023</p>
                                                <p>
                                                    <router-link to="/blog-details">
                                                        Guide dog shortage: The blind peo ple who train
                                                        their own guide
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="latest-single wow fadeInUp" data-wow-duration="600ms"
                                            data-wow-delay="900ms">
                                            <div class="latest-thumb">
                                                <router-link to="/blog-details">
                                                    <img :src="require('@/assets/images/news/eleven.png')" alt="Image">
                                                </router-link>
                                            </div>
                                            <div class="latest-content">
                                                <p>10/01/2023</p>
                                                <p>
                                                    <router-link to="/blog-details">
                                                        Guide dog shortage: The blind peo ple who train
                                                        their own guide
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="latest-single wow fadeInUp" data-wow-duration="600ms"
                                            data-wow-delay="1200ms">
                                            <div class="latest-thumb">
                                                <router-link to="/blog-details">
                                                    <img :src="require('@/assets/images/news/twelve.png')" alt="Image">
                                                </router-link>
                                            </div>
                                            <div class="latest-content">
                                                <p>10/01/2023</p>
                                                <p>
                                                    <router-link to="/blog-details">
                                                        Guide dog shortage: The blind peo ple who train
                                                        their own guide
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="latest-single wow fadeInUp" data-wow-duration="600ms"
                                            data-wow-delay="1500ms">
                                            <div class="latest-thumb">
                                                <router-link to="/blog-details">
                                                    <img :src="require('@/assets/images/news/thirteen.png')"
                                                        alt="Image">
                                                </router-link>
                                            </div>
                                            <div class="latest-content">
                                                <p>10/01/2023</p>
                                                <p>
                                                    <router-link to="/blog-details">
                                                        Guide dog shortage: The blind peo ple who train
                                                        their own guide
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget wow fadeInUp" data-wow-duration="600ms" data-wow-delay="600ms">
                                    <div class="widget__head">
                                        <h5 class="h5">Tags</h5>
                                    </div>
                                    <div class="widget__tags">
                                        <ul>
                                            <li>
                                                <router-link to="/blog-two">nature</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">health</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">galaxy</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">creative</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">art</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">business</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">space</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">biology</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/blog-two">environemnt</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget widget-big wow fadeInUp" data-wow-duration="600ms"
                                    data-wow-delay="600ms">
                                    <router-link to="/blog-two">
                                        <img :src="require('@/assets/images/news/fourteen.png')" alt="Image">
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer class="footer-light" />
        </div>
        <BackToTop />
        <!-- modal overlay -->

    </div>
</template>

<script>
    import Header from '../components/layout/Header.vue'
    import PageHeader from '../components/layout/PageHeader.vue'
    import Footer from '../components/layout/Footer.vue'
    import BackToTop from '../components/common/BackToTop.vue'
    export default {
        name: "Blog",
        components: {
            Header,
            PageHeader,
            Footer,
            BackToTop
        },
        data() {
            return {
                showModal: false,
            };
        },
    };
</script>

<style scoped>
    .modal-overlay {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 998;
        width: 100%;
        height: 100%;
        background: #000000;
        cursor: pointer;
    }

    .modal-overlay button {
        position: absolute;
        bottom: 8px;
        right: 0;
        z-index: 1000;
        background: rgba(23, 23, 23, .8);
        border: none;
        color: white;
        font-size: 16px;
        padding: 8px 30px;
    }
</style>