<template>
	<div>
		<div class="my-app home-light">
			<Header :logo-src="require('@/assets/images/logo.png')"/>
			<Banner />
			<Overview />
			<Voice />
			<Clone />
			<Sponsor />
			<Tour />
			<Case />
			<Broadcast />
			<FAQ class="faq-light" />
			<Language />
			<Review class="review-light"/>
			<CTA />
			<Footer class="footer-light"/>
		</div>
		<BackToTop />
	</div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import Banner from '../components/page_components/home/Banner.vue'
import Overview from '../components/page_components/home/Overview.vue'
import Voice from '../components/page_components/home/Voice.vue'
import Clone from '../components/page_components/home/Clone.vue'
import Sponsor from '../components/page_components/home/Sponsor.vue'
import Tour from '../components/page_components/home/Tour.vue'
import Case from '../components/page_components/home/Case.vue'
import Broadcast from '../components/page_components/home/Broadcast.vue'
import FAQ from '../components/page_components/home/FAQ.vue'
import Language from '../components/page_components/home/Language.vue'
import Review from '../components/page_components/home/Review.vue'
import CTA from '../components/page_components/home/CTA.vue'
import Footer from '../components/layout/Footer.vue'
import BackToTop from '../components/common/BackToTop.vue'
	export default {
		name: "HomeLight",
		components: {
			Header,
			Banner,
			Overview,
			Voice,
			Clone,
			Sponsor,
			Tour,
			Case,
			Broadcast,
			FAQ,
			Language,
			Review,
			CTA,
			Footer,
			BackToTop
		},
	};
</script>
