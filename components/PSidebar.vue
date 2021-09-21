<template>
  <div id="sticky-sidebar">
    <div class="subscribe"><p>Subscribe</p></div>
    <div class="social">
      <p>
        <a
          href="https://open.spotify.com/show/2DH4al5BKHLaVqvIM7m5FD?si=M36sDf-VRLiLJFMe2gU_sQ"
          target="_blank"
          ><i class="fa fa-spotify" aria-hidden="true"></i
        ></a>
        <a
          href="https://podcasts.apple.com/us/podcast/planet-impact/id1493651328?at=1l3vwYf"
          target="_blank"
          ><i class="fa fa-podcast" aria-hidden="true"></i
        ></a>
        <a
          href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lZDY4YTJjL3BvZGNhc3QvcnNz"
          target="_blank"
          ><i class="fa fa-google" aria-hidden="true"></i
        ></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#sticky-sidebar {
  position: fixed;
  top: 30%;
  z-index: 10000;
  background-color: #94c11f;
  -webkit-box-shadow: 18px 1px 63px -23px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 18px 1px 63px -23px rgba(0, 0, 0, 0.58);
  box-shadow: 18px 1px 63px -23px rgba(0, 0, 0, 0.58);
  width: 58px;
  height: 152px;
}

#sticky-sidebar .subscribe {
  width: 20px;
  height: 152px;
  background-color: #22486a;
}

#sticky-sidebar .subscribe p {
  text-transform: uppercase;
  transform: rotate(-90deg);
  display: inline-block;
  margin-left: -35px;
  margin-top: 63px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

#sticky-sidebar .social {
  position: absolute;
  top: 20px;
  left: 30px;
}

#sticky-sidebar .social a {
  font-size: 20px;
  color: #fff;
  display: block;
  margin-bottom: 15px;
}

#sticky-sidebar .social a:hover {
  color: #22486a;
}

@media (max-width: 600px) {
  #sticky-sidebar {
    z-index: 1000;
    -webkit-box-shadow: 18px 1px 63px -23px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 18px 1px 63px -23px rgba(0, 0, 0, 0.58);
    box-shadow: 18px 1px 63px -23px rgba(0, 0, 0, 0.58);
    @apply flex flex-col bg-primary w-screen h-auto bottom-0 top-auto fixed;
  }

  #sticky-sidebar .subscribe {
    @apply order-2 w-screen text-center h-auto bg-secondary;
  }

  #sticky-sidebar .subscribe p {
    transform: rotate(0);
    @apply m-0;
  }
  #sticky-sidebar .social {
    order: 1;
    position: static;
    height: 40px;
    text-align: center;
  }

  #sticky-sidebar .social a {
    display: inline;
    padding: 0 10%;
    font-size: 24px;
  }
}
</style>
