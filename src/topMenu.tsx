export default function topMenu () {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2">
  <a class="navbar-brand" href="#">Point of Vue</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <a class="navbar-brand" href="#">
  {/* <img src="Assets/visibility.svg" alt="Point of Vue" /> */}
  <svg width="24" height="24" xmlns="Assets/visibility.svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.67 3.955l-2.825-2.202.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.884-2.247h-4.11c-3.896-.048-5.784-3.369-7.461-6.858-1.687 3.51-3.592 6.842-7.539 6.858h-2.623v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023h-2.621v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z"/></svg>
  </a>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#mid">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#team">Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://devtools.vuejs.org/">Vue DevTools</a>
      </li>
    </ul>
    
  </div>
  <div class='row justify-content-around'>
    <div class='col'>
    <button class="btn btn-outline-success" type="button" onclick="window.location.href='https://github.com/oslabs-beta/point-of-vue';">Github</button>
    </div>
    <div class='col'>
    <button class="btn btn-outline-secondary" type="button">Download</button>
    </div>
  
    
  </div>
    
</nav>

  )
}