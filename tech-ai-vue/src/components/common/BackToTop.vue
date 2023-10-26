<template>
    <div class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
</template>

<script>
    export default {
        name: "BackToTop",
        mounted() {
            const progressPath = document.querySelector('.progress-wrap path');
            let pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

            const updateProgress = () => {
                const scroll = window.pageYOffset || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - window.innerHeight;
                const progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };

            updateProgress();
            window.addEventListener('scroll', updateProgress);

            const offset = 50;
            const duration = 550;

            window.addEventListener('scroll', function () {
                if (window.pageYOffset > offset) {
                    document.querySelector('.progress-wrap').classList.add('active-progress');
                } else {
                    document.querySelector('.progress-wrap').classList.remove('active-progress');
                }
            });

            document.querySelector('.progress-wrap').addEventListener('click', function (event) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return false;
            });
        },
        beforeUnmount() {
            window.removeEventListener('scroll', updateProgress);
        },
    }
</script>