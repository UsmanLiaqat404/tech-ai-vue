<template>
	<div>
		<div class="my-app home-two-light">
			<Header2 class="header--light"/>
			<Banner />
			<Testimonials />
			<Generate />
			<Tour />
			<Publish />
			<hr id="horizon-break">
			<Features />
			<Pricing />
			<FAQ class="faq-light"/>
			<CTA />
			<Tools />
			<Footer2 />
		</div>
		<BackToTop />
	</div>
</template>

<script>
import Header2 from '../components/layout/Header2.vue'
import Banner from '../components/page_components/home-2/Banner.vue'
import Testimonials from '../components/page_components/home-2/Testimonials.vue'
import Generate from '../components/page_components/home-2/Generate.vue'
import Tour from '../components/page_components/home-2/Tour.vue'
import Publish from '../components/page_components/home-2/Publish.vue'
import Features from '../components/page_components/home-2/Features.vue'
import Pricing from '../components/page_components/home-2/Pricing.vue'
import FAQ from '../components/page_components/home-2/FAQ.vue'
import CTA from '../components/page_components/home-2/CTA.vue'
import Tools from '../components/page_components/home-2/Tools.vue'
import Footer2 from '../components/layout/Footer2.vue'
import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "Home",
		components: {
			Header2,
			Banner,
			Testimonials,
			Generate,
			Tour,
			Publish,
			Features,
			Pricing,
			FAQ,
			CTA,
			Tools,
            Footer2,
			BackToTop
		},
	};
</script>

<style>
	.home-two-dark .anime--light {
        display: none;
    }
    .home-two-light .anime--dark {
        display: none;
    }
</style>
