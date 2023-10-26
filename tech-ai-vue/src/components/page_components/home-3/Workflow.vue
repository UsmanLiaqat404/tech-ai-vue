<template>
    <section class="section workflow">
        <div class="container">
            <div class="row items-gap align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="workflow__thumb wow fadeInUp" data-wow-duration="600ms" data-wow-delay="300ms">
                        <div class="thumb-top">
                            <img :src="require('@/assets/images/workflow/one.png')" alt="Image">
                        </div>
                        <div class="thumb-center">
                            <img :src="require('@/assets/images/workflow/two.png')" alt="Image">
                        </div>
                        <div class="thumb-transparent">
                            <img :src="require('@/assets/images/workflow/three.png')" alt="Image">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="workflow__content section__content m-0 wow fadeInUp" data-wow-duration="600ms"
                        data-wow-delay="600ms">
                        <h2 class="h2">
                            Simplify Workflow with Online Background Remover
                        </h2>
                        <div class="paragraph">
                            <p class="fw-6">
                                No matter if you want transparent cut outs for making
                                passport photo, showing e-commerce products, or more, techAI
                                can be the best choice to replace background with solid
                                colors.
                            </p>
                            <p>
                                Drop the complex brushes and layers. Use techAI to remove
                                background from image in one click. Replace busy background
                                with transparent background or solid color ones. With AI
                                background remover, you can handle tricky conditions like
                                hair and animal fur like a pro.
                            </p>
                        </div>
                        <div class="workflow-switch-wrapper">
                            <button class="workflow-switch w-one active" aria-label="switch background">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button class="workflow-switch w-two" aria-label="switch background">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button class="workflow-switch w-three" aria-label="switch background">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button class="workflow-switch w-four" aria-label="switch background">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button class="workflow-switch w-five" aria-label="switch background">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button class="workflow-switch w-six" aria-label="switch background">
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </div>
                        <div class="section__content-cta">
                            <router-link to="/sign-up" class="btn btn--quinary">
                                Start Remove Now
                            </router-link>
                            <router-link to="/contact-us" class="btn btn--tertiary">
                                Contact us
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Workflow",
        mounted() {
            if (document.querySelector(".workflow-switch-wrapper")) {
                const initialBackground = document.querySelector(".workflow-switch:first-child").style.backgroundColor;
                const thumbTransparent = document.querySelector(".thumb-transparent");
                thumbTransparent.style.backgroundColor = initialBackground;

                // Change background when clicked
                const workflowSwitches = document.querySelectorAll(".workflow-switch");

                workflowSwitches.forEach((workflowSwitch) => {
                    workflowSwitch.addEventListener("click", function () {
                        const className = workflowSwitch.classList[1];

                        switch (className) {
                            case 'w-one':
                                workflowSwitch.style.backgroundColor = '#4a017d';
                                break;
                            case 'w-two':
                                workflowSwitch.style.backgroundColor = '#0f7262';
                                break;
                            case 'w-three':
                                workflowSwitch.style.backgroundColor = '#4569e7';
                                break;
                            case 'w-four':
                                workflowSwitch.style.backgroundColor = '#ff9200';
                                break;
                            case 'w-five':
                                workflowSwitch.style.backgroundColor = '#256972';
                                break;
                            case 'w-six':
                                workflowSwitch.style.backgroundColor = '#fd6359';
                                break;
                            default:
                                break;
                        }

                        const clickedBackground = this.style.backgroundColor;
                        workflowSwitches.forEach((switchElement) => {
                            switchElement.classList.remove("active");
                        });
                        this.classList.add("active");
                        thumbTransparent.style.backgroundColor = clickedBackground;
                    });
                });
            }
        },
    }
</script>