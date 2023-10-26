<template>
    <section class="section update-cta pb-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="update-cta__inner bg-img wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="section__header">
                            <h2 class="h2">Get updates</h2>
                            <p>
                                Sign up to our newsletter to receive information about new
                                products, special offers and updates.
                            </p>
                        </div>
                        <form action="#" method="post">
                            <div class="mail-group-two">
                                <input type="email" name="subscribe-news-two" id="subscribeNewsTwo"
                                    placeholder="enter your email" required>
                                <button type="submit" aria-label="subscribe to our newsletter" class="btn btn--nonary">
                                    <span>join now</span>
                                    <i class="fa-regular fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "CTA",
    }
</script>

<style>
    .update-cta__inner {
        background-image: url('~@/assets/images/update-cta-bg.png');
    }
</style>