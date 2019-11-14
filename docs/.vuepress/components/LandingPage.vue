<template>
  <div class="landing-page">
    <p>
      Collaborative virtual reality tools for nanoscale design. Nanome is
      available for Windows and the Oculus Quest (closed beta). Please contact
      us at
      <a href="mailto:support@nanome.ai">support@nanome.ai</a> to be added to
      the Quest beta.
    </p>

    <div class="text-center">
      <a class="btn" href="https://home.nanome.ai/setup" target="_blank">
        Download Nanome
      </a>
    </div>

    <div class="requirements">
      <div>
        <h3>Minimum Requirements</h3>
        <div><b>Operating System:</b> Windows 10</div>
        <div><b>Processor:</b> i5-4590</div>
        <div><b>Memory:</b> 4 GB RAM</div>
        <div><b>Graphics:</b> NVIDIA GTX 780 (or AMD R9 290)</div>
        <div><b>Storage:</b> 104 MB</div>
      </div>

      <div>
        <h3>Recommended Requirements</h3>
        <div><b>Operating System:</b> Windows 10</div>
        <div><b>Processor:</b> Intel i7</div>
        <div><b>Memory:</b> 8 GB RAM</div>
        <div><b>Graphics:</b> NVIDIA GTX 1070 (or AMD RX Vega 56)</div>
        <div><b>Storage:</b> 256 GB SSD</div>
      </div>
    </div>

    <div id="home-video">
      <iframe
        width="900"
        height="500"
        src="https://www.youtube.com/embed/gCNbuH9Y6hU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style>
.landing-page .requirements {
  margin: 0 auto;
  margin-bottom: 2em;
}

.landing-page .requirements > div {
  display: inline-block;
  padding: 1em;
}

.landing-page .btn {
  font-size: 1.5rem;
}
</style>
