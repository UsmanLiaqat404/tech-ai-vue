<template>
	<header :class="{ 'header-active': scrollPosition >= 100, }" class="header header-two">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<nav class="nav">
						<div class="nav__content">
							<div class="nav__logo">
								<router-link to="/">
									<img :src="require('@/assets/images/logo-three.png')" alt="Logo" />
								</router-link>
							</div>
							<div class="nav__menu">
								<div class="nav__menu-logo d-flex d-xl-none">
									<router-link to="/" class="text-center hide-nav">
										<img :src="require('@/assets/images/logo-three.png')" alt="Logo" />
									</router-link>
									<button aria-label="close the menu" class="nav__menu-close">
										<i class="fa-solid fa-xmark"></i>
									</button>
								</div>
								<ul class="nav__menu-items">
									<li class="nav__menu-item nav__menu-item--dropdown">
										<a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
											Home
										</a>
										<div class="nav__dropdown nav__dropdown--alt">
											<ul>
												<li>
													<router-link to="/" class="nav__dropdown-item hide-nav">
														Home 01
													</router-link>
												</li>
												<li>
													<router-link to="/home-2" class="nav__dropdown-item hide-nav">
														Home 02
													</router-link>
												</li>
												<li>
													<router-link to="/home-3" class="nav__dropdown-item hide-nav">
														Home 03
													</router-link>
												</li>
											</ul>
											<ul>
												<li>
													<router-link to="/home-light" class="nav__dropdown-item hide-nav">
														Home
														01
														Light
													</router-link>
												</li>
												<li>
													<router-link to="/home-2-light" class="nav__dropdown-item hide-nav">
														Home
														02
														Light
													</router-link>
												</li>
												<li>
													<router-link to="/home-3-light" class="nav__dropdown-item hide-nav">
														Home
														03
														Light
													</router-link>
												</li>
											</ul>
										</div>
									</li>
									<li class="nav__menu-item">
										<router-link to="/about" class="nav__menu-link hide-nav">About
											Us</router-link>
									</li>
									<li class="nav__menu-item nav__menu-item--dropdown">
										<a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
											Use
											Case
										</a>
										<ul class="nav__dropdown">
											<li>
												<router-link class="nav__dropdown-item hide-nav" to="/use-case">
													Use
													Case
												</router-link>
											</li>
											<li>
												<router-link class="nav__dropdown-item hide-nav" to="/use-case-details">
													Use
													Case
													Details
												</router-link>
											</li>
										</ul>
									</li>
									<li class="nav__menu-item nav__menu-item--dropdown">
										<a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
											Pages
										</a>
										<ul class="nav__dropdown">
											<li>
												<router-link to="/404" class="nav__dropdown-item hide-nav">Error</router-link>
											</li>
											<li>
												<router-link to="/sign-up" class="nav__dropdown-item hide-nav">
													Sign
													Up
												</router-link>
											</li>
											<li>
												<router-link to="/sign-in" class="nav__dropdown-item hide-nav">
													Sign
													In
												</router-link>
											</li>
											<li>
												<router-link to="/teams" class="nav__dropdown-item hide-nav">
													Our
													Teams
												</router-link>
											</li>
											<li>
												<router-link to="/about" class="nav__dropdown-item hide-nav">
													About
													Us
												</router-link>
											</li>
											<li>
												<router-link to="/contact-us" class="nav__dropdown-item hide-nav">
													Contact
													Us
												</router-link>
											</li>
										</ul>
									</li>
									<li class="nav__menu-item nav__menu-item--dropdown">
										<a href="javascript:void(0)" class="nav__menu-link nav__menu-link--dropdown">
											Blog
										</a>
										<ul class="nav__dropdown">
											<li>
												<router-link to="/blog" class="nav__dropdown-item hide-nav">
													Blog
													Layout
													One
												</router-link>
											</li>
											<li>
												<router-link to="/blog-two" class="nav__dropdown-item hide-nav">
													Blog
													Layout
													Two
												</router-link>
											</li>
											<li>
												<router-link to="blog-details" class="nav__dropdown-item hide-nav">
													Blog
													Single
												</router-link>
											</li>
										</ul>
									</li>
									<li class="nav__menu-item">
										<router-link to="/contact-us" class="nav__menu-link hide-nav">Contact
											Us</router-link>
									</li>
									<li class="nav__menu-item d-block d-md-none">
										<router-link to="/sign-up" class="btn btn--septenary">
											Sign
											Up
										</router-link>
									</li>
								</ul>
								<div class="social">
									<a href="https://www.facebook.com" aria-label="social media">
										<i class="fa-brands fa-facebook-f"></i>
									</a>
									<a href="https://www.twitter.com" aria-label="social media">
										<i class="fa-brands fa-twitter"></i>
									</a>
									<a href="https://www.linkedin.com" aria-label="social media">
										<i class="fa-brands fa-linkedin-in"></i>
									</a>
									<a href="https://www.instagram.com" aria-label="social media">
										<i class="fa-brands fa-instagram"></i>
									</a>
								</div>
							</div>
							<div class="nav__uncollapsed">
								<div class="nav__uncollapsed-item d-none d-md-flex">
									<router-link to="/sign-up" class="btn btn--septenary">Sign
										Up</router-link>
								</div>
								<button class="nav__bar d-block d-xl-none">
									<span class="icon-bar top-bar"></span>
									<span class="icon-bar middle-bar"></span>
									<span class="icon-bar bottom-bar"></span>
								</button>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
		<div class="backdrop"></div>
	</header>
</template>

<script>
	export default {
		name: "Header2",
		data: function () {
			return {
				scrollPosition: null,
			};
		},
		methods: {
			updateScroll() {
				this.scrollPosition =
					window.scrollY;
			},
		},
		mounted() {
			window.addEventListener(
				"scroll",
				this.updateScroll
			);

			const navBars = document.querySelectorAll('.nav__bar');
			const navMenus = document.querySelectorAll('.nav__menu');
			const backdrops = document.querySelectorAll('.backdrop');
			const navDropdowns = document.querySelectorAll('.nav__dropdown');
			const navDropdownLinks = document.querySelectorAll('.nav__menu-link--dropdown');
			const navMenuClose = document.querySelectorAll('.nav__menu-close');
			const ticketModals = document.querySelectorAll('.ticket-modal');
			const conferenceModals = document.querySelectorAll('.conference-modal');
			const body = document.body;

			function toggleMenuActive() {
				navBars.forEach(navBar =>
					navBar.classList.toggle('nav__bar-toggle')
				);

				navMenus.forEach(navMenu =>
					navMenu.classList.toggle('nav__menu-active')
				);

				backdrops.forEach(backdrop =>
					backdrop.classList.toggle('backdrop-active')
				);

				body.classList.toggle('body-active');
			}

			navBars.forEach(navBar => {
				navBar.addEventListener('click', function () {
					toggleMenuActive();
				});
			});

			backdrops.forEach(backdrop => {
				backdrop.addEventListener('click', function () {
					toggleMenuActive();
				});
			});

			navMenuClose.forEach(menuClose => {
				menuClose.addEventListener('click', function () {
					toggleMenuActive();
				});
			});

			window.addEventListener('resize', function () {
				backdrops.forEach(backdrop =>
					backdrop.classList.remove('backdrop-active')
				);

				navBars.forEach(navBar =>
					navBar.classList.remove('nav__bar-toggle')
				);

				navMenus.forEach(navMenu =>
					navMenu.classList.remove('nav__menu-active')
				);

				navDropdowns.forEach(navDropdown =>
					navDropdown.classList.remove('nav__dropdown-active')
				);

				navDropdownLinks.forEach(navDropdownLink =>
					navDropdownLink.classList.remove('nav__menu-link--dropdown-active')
				);

				body.classList.remove('body-active');

				ticketModals.forEach(ticketModal =>
					ticketModal.style.display = 'none'
				);

				conferenceModals.forEach(conferenceModal =>
					conferenceModal.style.display = 'none'
				);
			});

			navDropdownLinks.forEach(dropdownLink => {
				dropdownLink.addEventListener('click', function () {
					const dropdown = this.nextElementSibling;
					dropdown.classList.toggle('nav__dropdown-active');
					this.classList.toggle('nav__menu-link--dropdown-active');
				});
			});
		},
	};
</script>

<style>
</style>