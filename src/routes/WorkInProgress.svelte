<div class="in-progress-container">
    <p class="animated-text">
        <span>W</span><span>o</span><span>r</span><span>k</span><span> </span>
        <span>i</span><span>n</span><span> </span>
        <span>p</span><span>r</span><span>o</span><span>g</span><span>r</span><span>e</span><span>s</span><span>s</span><span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
    </p>
</div>

<style>
    .in-progress-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
    }
    
    .animated-text {
        color: #d1d5db;
        font-size: 1.5rem; /* Slightly larger for better visibility of the effect */
        font-family: sans-serif;
        font-weight: 500;
        white-space: nowrap; /* Prevent wrapping */
    }

    .animated-text span {
        display: inline-block; /* Allows individual letter animation */
        animation: wobble 0.6s ease-in-out infinite alternate; /* Define the animation */
    }

    /* Keyframes for the wobble animation */
    @keyframes wobble {
        0% { transform: translateY(0); }
        100% { transform: translateY(-8px); } /* Adjust for more or less wobble */
    }

    /* Stagger the animation of each letter */
    .animated-text span:nth-child(1) { animation-delay: 0.0s; }
    .animated-text span:nth-child(2) { animation-delay: 0.1s; }
    .animated-text span:nth-child(3) { animation-delay: 0.2s; }
    .animated-text span:nth-child(4) { animation-delay: 0.3s; }
    .animated-text span:nth-child(5) { animation-delay: 0.4s; }
    .animated-text span:nth-child(6) { animation-delay: 0.5s; }
    .animated-text span:nth-child(7) { animation-delay: 0.6s; }
    .animated-text span:nth-child(8) { animation-delay: 0.7s; }
    .animated-text span:nth-child(9) { animation-delay: 0.8s; }
    .animated-text span:nth-child(10) { animation-delay: 0.9s; }
    .animated-text span:nth-child(11) { animation-delay: 1.0s; }
    .animated-text span:nth-child(12) { animation-delay: 1.1s; }
    .animated-text span:nth-child(13) { animation-delay: 1.2s; }
    .animated-text span:nth-child(14) { animation-delay: 1.3s; }
    .animated-text span:nth-child(15) { animation-delay: 1.4s; }
    .animated-text span:nth-child(16) { animation-delay: 1.5s; }
    .animated-text span:nth-child(17) {
        animation-delay: 1.6s;
    }
    /* Add more for longer text */

    /* Styling for the dots (same as before) */
    .animated-text span.dot {
        animation-name: blink;
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }

    .animated-text span.dot:nth-child(14) { animation-delay: 0.2s; } /* Adjust delay for dots */
    .animated-text span.dot:nth-child(15) { animation-delay: 0.4s; } /* Adjust delay for dots */

</style>