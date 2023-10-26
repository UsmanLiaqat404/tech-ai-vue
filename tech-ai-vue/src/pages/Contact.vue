<template>
    <div>
        <div class="my-app">
            <Header :logo-src="require('@/assets/images/logo.png')" />
            <PageHeader page-title="Contact Us" />
            <section class="section contact-main">
                <div class="container">
                    <div class="row items-gap align-items-center">
                        <div class="col-12 col-lg-6 col-xxl-5">
                            <div class="contact-main__content wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <h2 class="h3">
                                    Have something in mind?
                                    <span>Let's talk.</span>
                                </h2>
                                <p>
                                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim.
                                </p>
                                <div class="arrow">
                                    <img :src="require('@/assets/images/arrow-contact.png')" alt="Image">
                                </div>
                                <div class="cta-contact">
                                    <a href="tel:223-087-9756">
                                        Schedule a call
                                        <i class="fa-solid fa-angle-right">
                                        </i>
                                    </a>
                                    <span>OR</span>
                                    <a href="mailto:support@techai.com">
                                        Request a feature
                                        <i class="fa-solid fa-angle-right">
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xxl-6 offset-xxl-1">
                            <div class="contact-main__form wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <form action="#" method="post">
                                    <div class="group-input wow fadeInUp" data-wow-duration="600ms"
                                        data-wow-delay="600ms">
                                        <input type="text" name="contact-name" id="contactName"
                                            placeholder="enter full name">
                                    </div>
                                    <div class="group-input wow fadeInUp" data-wow-duration="600ms"
                                        data-wow-delay="900ms">
                                        <input type="email" name="contact-email" id="contactEmail"
                                            placeholder="enter Your Email">
                                    </div>
                                    <div class="group-input wow fadeInUp" data-wow-duration="600ms"
                                        data-wow-delay="1200ms">
                                        <input type="text" name="contact-name" id="subject"
                                            placeholder="subject">
                                    </div>
                                    <div class="group-input wow fadeInUp" data-wow-duration="600ms"
                                        data-wow-delay="1500ms">
                                        <textarea name="contact-message" id="contactMessage"
                                            placeholder="Write a message"></textarea>
                                    </div>
                                    <div class="group-radio">
                                        <input type="checkbox" name="contact-check" id="contactCheck">
                                        <label for="contactCheck">
                                            I accept your terms & conditions
                                        </label>
                                    </div>
                                    <div class="form-cta justify-content-start">
                                        <button type="submit" class="btn btn--nonary">
                                            Send Message
                                            <i class="fa-solid fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <UpdateCTA class="bg-black" />
            <Footer class="footer-light" />
        </div>
        <BackToTop />
    </div>
</template>

<script>
    import Header from '../components/layout/Header.vue'
    import PageHeader from '../components/layout/PageHeader.vue'
    import UpdateCTA from '../components/layout/UpdateCTA.vue'
    import Footer from '../components/layout/Footer.vue'
    import BackToTop from '../components/common/BackToTop.vue'

    export default {
        name: "Contact",
        components: {
            Header,
            PageHeader,
            UpdateCTA,
            Footer,
            BackToTop,
        },
    };
</script>

<style scoped>
    .contact-main .subject:focus-visible {
        outline: none;
    }

    .update-cta {
        padding-bottom: 140px !important;
    }
</style>