<template>
    <div>
        <div class="my-app">
            <Header :logo-src="require('@/assets/images/logo.png')" />
            <PageHeader page-title="Sign In"/>
            <section class="section authentication pb-0">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-10 col-xl-6">
                            <div class="authentication__inner wow fadeInUp" data-wow-duration="600ms"
                                data-wow-delay="300ms">
                                <div class="section__header text-start">
                                    <h2 class="h3">Welcome Back</h2>
                                </div>
                                <form action="#" method="post">
                                    <div class="input-single">
                                        <input type="email" name="author-Email" id="authorEmail"
                                            placeholder="email address" required>
                                    </div>
                                    <div class="input-single">
                                        <input type="password" name="author-Password" id="authorPassword"
                                            placeholder="enter password" required>
                                    </div>
                                    <div class="divide">
                                        <p>OR</p>
                                    </div>
                                    <div class="authentic">
                                        <button type="submit" class="btn btn--nonary">
                                            <img src="assets/images/google.png" alt="Image">
                                            continue with google
                                        </button>
                                        <button type="submit" class="btn btn--nonary">
                                            <img src="assets/images/facebook.png" alt="Image">
                                            continue with facebook
                                        </button>
                                    </div>
                                    <div class="group-radio">
                                        <input type="checkbox" name="create-in-check" id="createInCheck">
                                        <label for="createInCheck">
                                            i accept your terms & conditions
                                        </label>
                                    </div>
                                    <div class="form-cta">
                                        <button type="submit" aria-label="post comment" class="btn btn--ocotonary">
                                            sign in
                                        </button>
                                        <p>
                                            Don't Have an account?
                                            <router-link to="/sign-up">Register Now</router-link>
                                        </p>
                                    </div>
                                </form>
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
        name: "Signin",
        components: {
            Header,
            PageHeader,
            Footer,
            BackToTop
        },
    };
</script>