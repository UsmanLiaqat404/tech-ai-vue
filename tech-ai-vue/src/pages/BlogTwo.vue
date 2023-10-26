<template>
    <div>
        <div class="my-app">
            <Header :logo-src="require('@/assets/images/logo.png')" />
            <PageHeader page-title="Blog Layout 2" />
            <section class="section pb-0 news-section">
                <div class="container">
                    <div class="row items-gap">
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/four.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            It is a long established fact that a reader will be
                                            distracted
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/five.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            There are many variations of passages of Lorem Ipsum
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/six.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            Power of a great photo backdrop — in just a few steps,
                                            you can
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/seven.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            Contrary to popular belief, Lorem Ipsum is not simply
                                            random
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/eight.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            The standard chunk of Lorem Ipsum used since the 1500s is
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/nine.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            making this the first true generat on the Internet
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/ten.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            Various versions have evolved over the years
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/eleven.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            even slightly believable. If you are going to use
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/twelve.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            written in 45 BC. This book is a treatise on the
                                            theory
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/thirteen.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            he generated Lorem Ipsum is therefore always
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/fourteen.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            Various versions have evolved over the years,
                                            sometimes
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-4">
                            <div class="news__slider-item wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="thumb">
                                    <router-link to="/blog-details">
                                        <img :src="require('@/assets/images/blog/fifteen.png')" alt="Image">
                                    </router-link>
                                    <div class="publish-date">
                                        <h4 class="h4">21</h4>
                                        <p>JAN</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <div class="tag">
                                        <router-link to="/blog">tech</router-link>
                                    </div>
                                    <h4 class="h4">
                                        <router-link to="/blog-details">
                                            will uncover many web sites still in their infancy
                                        </router-link>
                                    </h4>
                                    <div class="cta">
                                        <router-link to="/blog-details">
                                            <i class="tech-arrow-top"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer class="footer-light" />
        </div>
        <BackToTop />
    </div>
</template>

<script>
    import Header from '../components/layout/Header.vue'
    import PageHeader from '../components/layout/PageHeader.vue'
    import Footer from '../components/layout/Footer.vue'
    import BackToTop from '../components/common/BackToTop.vue'
    export default {
        name: "BlogTwo",
        components: {
            Header,
            PageHeader,
            Footer,
            BackToTop
        },
    };
</script>