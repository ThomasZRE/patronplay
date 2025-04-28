<script>

</script>

<div class="slider">
    <div class='slide-holder'>
        <div class='slide'><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rLG4pu7gkoIPlHgLa2zJ1wHaEo%26pid%3DApi&sp=1745781794T712e25b1b6738f0a806b5ce6f9eb1c371770b1a1f1a7270255ce267b1fd418f0" alt=""></div>
        <div class='slide'><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.bb0tLTZ-53FhOU7C1RNdqwHaEK%26pid%3DApi&sp=1745781794Tf5b00048477a4424ff3d11b56f362808c725e99aaf84a24d6834175ef8510d88" alt=""></div>
        <div class='slide'><img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.explore.com%2Fimg%2Fgallery%2Fthe-50-most-incredible-landscapes-in-the-whole-entire-world%2Fl-intro-1672072042.jpg&sp=1745781794Tc8ef6690b00b6947b4503ed64ebabce8fe17336597b58e53145d525ca89e76b4" alt=""></div>
    </div>
</div>

<style>
    /*
    $slide-width: 400px;
    $slide-height: 300px;
    */

    .slider {
        width: 800px;
        height: auto;
        overflow: hidden;
        border-radius: 1px;
        margin: 0 auto;
    }

    .slide {
        width: 400px;
        float: left;
        position: relative;
    }

    .slide-holder {
        width: 400%;
        position: relative;
        left: 0;
        animation: scroller 10s infinite;
    }

    @keyframes scroller {
        0% { transform: translateX(0); }
        33% { transform: translateX(-400px); }
        66% { transform: translateX(-400px*2); }
        100% { transform: translateX(0); }
    }
</style>