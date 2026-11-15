import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const app = document.querySelector('#app')

app.innerHTML = `
<div class="team-bar">Created by Yatharth Singh &amp; Aditya Pratap Singh</div>
<header class="navbar">
  <div class="logo">🌙 DESCENDRA</div>
  <nav>
    <a href="#moon">Moon</a>
    <a href="#science">Science</a>
    <a href="#predictor">Predictor</a>
    <a href="#comparison">Comparison</a>

    <a href="#tools">Rover</a>
    <a href="#shadow">Shadow</a>
    <a href="#comms">Comms</a>
  </nav>
</header>

<section class="hero">
  <p class="tag">LUNAR EXPLORATION • LANDING INTELLIGENCE</p>
  <h1>DESCENDRA <span>Lunar Landing Navigator</span></h1>
  <p class="subtitle">
    Explore the Moon, evaluate landing zones and plan safer lunar rover missions
    with interactive mission tools.
  </p>
  <a href="#moon" class="primary-btn">Explore Mission Tools →</a>
</section>

<section class="navigator" id="moon">
  <p class="tag">01 / LUNAR EXPLORATION</p>
  <h2>3D Moon Viewer</h2>
  <p class="section-description">
    Rotate and zoom the Moon to explore its lunar surface. The glowing marker
    shows the Shiv Shakti Point landing site of Chandrayaan-3.
  </p>
  <div id="moon-container"></div>
  <div class="moon-controls">
    <button id="reset-moon">Reset View</button>
    <button id="goto-site">Go to Shiv Shakti Point</button>
    <button id="toggle-spin">Pause Rotation</button>
    <span>Drag to rotate • Scroll or pinch to zoom</span>
  </div>
</section>
<section class="navigator" id="science">
  <p class="tag">02 / SCIENTIFIC SITE REPORT</p>
  <h2>Actual Shiv Shakti Point — Scientific Details</h2>
  <p class="section-description">
    Scientific overview of the Chandrayaan-3 landing location,
    based on published research and ISRO mission observations.
  </p>

  <div class="site-grid">

    <div class="site-card">
      <h3>📍 Location & Geography</h3>
      <p><strong>Latitude:</strong> 69.373° South</p>
      <p><strong>Longitude:</strong> 32.319° East</p>
      <p><strong>Region:</strong> Lunar South Polar highlands</p>
      <p><strong>Nearby craters:</strong> Manzinus C and Simpelius N</p>
      <p><strong>Distance from South Pole:</strong> Approximately 632 km</p>
    </div>

    <div class="site-card">
      <h3>⛰️ Slope Analysis</h3>
      <p><strong>Landing area:</strong> About 78% has slopes below 4°.</p>
      <p><strong>Local lander slope:</strong> Approximately 6° near the ChaSTE probe.</p>
      <p><strong>Site selection:</strong> Low-slope terrain was preferred for safe landing.</p>
      <p><strong>Steeper areas:</strong> Mainly crater walls and ejecta deposits.</p>
    </div>

    <div class="site-card">
      <h3>☀️ Sunlight Analysis</h3>
      <p><strong>Site selection criterion:</strong> At least 11–12 Earth days of sunlight.</p>
      <p><strong>Solar environment:</strong> Low-angle sunlight is important in this high-latitude region.</p>
      <p><strong>Mission importance:</strong> Illumination supports lander operations and solar power.</p>
      <p><strong>Note:</strong> 11–12 days is a site-selection criterion, not a claim of continuous measured sunlight at every point.</p>
    </div>

    <div class="site-card">
      <h3>🪨 Terrain & Surface Analysis</h3>
      <p><strong>Terrain:</strong> Relatively smooth and gently sloping highland plains.</p>
      <p><strong>Geology:</strong> Nectarian-age terrain.</p>
      <p><strong>Surface features:</strong> Craters, boulders and ejecta deposits.</p>
      <p><strong>Regional geology:</strong> Material associated with Manzinus and Boguslawsky secondary craters.</p>
      <p><strong>Landing area studied:</strong> Approximately 4 km × 2.4 km.</p>
    </div>

    <div class="site-card">
      <h3>🌡️ Temperature Analysis</h3>
      <p><strong>Peak surface temperature:</strong> 355 K (±0.5 K), measured by ChaSTE.</p>
      <p><strong>Nearby flat surface:</strong> 332 K (±1 K), measured about one metre away.</p>
      <p><strong>Earlier orbital estimate:</strong> Approximately 330 K.</p>
      <p><strong>Temperature instrument:</strong> ChaSTE on Vikram lander.</p>
      <p><strong>Measurement depth:</strong> Regolith temperature profiles up to 10 cm below the surface.</p>
    </div>

    <div class="site-card">
      <h3>🧪 Soil & Composition</h3>
      <p><strong>Instrument:</strong> APXS aboard Pragyan rover.</p>
      <p><strong>Elements detected:</strong> Sulphur, aluminium, calcium, iron, titanium, chromium, silicon and oxygen, among others.</p>
      <p><strong>Scientific purpose:</strong> Understand lunar soil composition and the Moon's geological history.</p>
    </div>

    <div class="site-card">
      <h3>🚀 Chandrayaan-3 Mission</h3>
      <p><strong>Landing date:</strong> 23 August 2023.</p>
      <p><strong>Lander:</strong> Vikram.</p>
      <p><strong>Rover:</strong> Pragyan.</p>
      <p><strong>Rover travel:</strong> Approximately 103 metres.</p>
      <p><strong>Mission achievement:</strong> Successful soft landing in the lunar southern high-latitude region.</p>
    </div>

    <div class="site-card">
      <h3>📡 Communication & Mission Science</h3>
      <p><strong>Communication:</strong> Earth visibility depends on local terrain and lunar geometry.</p>
      <p><strong>Mission experiments:</strong> ChaSTE, APXS, LIBS, ILSA and RAMBHA-LP.</p>
      <p><strong>Scientific goals:</strong> Study lunar temperature, soil composition, seismic activity and plasma environment.</p>
    </div>

  </div>

  <div class="panel" style="margin-top:24px">
    <h3>Scientific Sources & References</h3>
    <p><a href="https://www.isro.gov.in/ISRO_EN/India_Bags_Credit_First-Ever_In-Situ_Measurement.html" target="_blank" rel="noopener">ISRO — ChaSTE temperature observations</a></p>
    <p><a href="https://academic.oup.com/mnrasl/article/526/1/L116/7236874" target="_blank" rel="noopener">Research — Landing site geomorphology and slope analysis</a></p>
    <p><a href="https://academic.oup.com/mnras/article/538/4/2330/8052793" target="_blank" rel="noopener">Research — Lunar regolith temperature profiles</a></p>
    <p><a href="https://www.isro.gov.in/Ch3_Alpha_Particle_X-ray_Spectrometer.html" target="_blank" rel="noopener">ISRO — APXS soil composition study</a></p>
  </div>

  <p class="section-description" style="margin-top:18px">
    Data note: Published scientific observations, site-selection criteria
    and regional geological interpretations are identified separately.
    These values are not live sensor readings.
  </p>
</section>

<section class="navigator" id="predictor">
  <p class="tag">02 / LANDING INTELLIGENCE</p>
  <h2>Landing Safety Predictor</h2>
  <p class="section-description">
    Evaluate a potential landing zone using five parameters.
  </p>

  <div class="panel">
    <label for="slope">Surface Slope (degrees)</label>
    <input id="slope" type="number" min="0" max="90" step="any" value="5.2">

    <label for="hazard">Distance from Hazards (metres)</label>
    <input id="hazard" type="number" min="0" max="5000" step="any" value="850">

    <label for="roughness">Surface Roughness</label>
    <select id="roughness">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <label for="sunlight">Sunlight Availability (%)</label>
    <input id="sunlight" type="number" min="0" max="100" step="any" value="85">

    <label for="psr">Permanently Shadowed Region (PSR)?</label>
    <select id="psr">
      <option value="no">Outside PSR</option>
      <option value="yes">Inside PSR</option>
    </select>

    <p id="form-error" role="alert" style="color:#ff8b75;margin-top:16px;min-height:1.2em"></p>

    <button id="calculate">Calculate Landing Safety</button>
    <div id="result" aria-live="polite">
      <p>Enter your landing site parameters and calculate the safety score.</p>
    </div>
  </div>
</section>

<section class="comparison" id="comparison">
  <p class="tag">03 / MISSION VALIDATION</p>
  <h2>Chandrayaan-3 Comparison</h2>
  <p class="section-description">
    Compare your selected landing conditions with an illustrative
    Shiv Shakti Point reference profile.
  </p>

  <div class="site-grid">
    <div class="site-card">
      <h3>Shiv Shakti Point</h3>
      <p>Reference slope: 5.2°</p>
      <p>Hazard distance: 850 m</p>
      <p>Roughness: Low</p>
      <p>Sunlight: 85%</p>
      <p>PSR: Outside</p>
      <p><strong id="reference-score">Illustrative score: --/100</strong></p>
    </div>

    <div class="site-card">
      <h3>Your Landing Site</h3>
      <p id="comparison-score">Calculate a landing site to compare.</p>
      <p id="comparison-status">Waiting for assessment...</p>
    </div>

    <div class="site-card">
      <h3>Mission Validation</h3>
      <p>Compare slope, surface hazards, roughness and sunlight conditions.</p>
      <p id="comparison-message">No assessment available yet.</p>
    </div>
  </div>

  <p class="section-description" style="margin-top:20px">
    Note: Shiv Shakti Point values shown here are illustrative demonstration
    inputs, not official ISRO measurements or a verified landing-site score.
  </p>
</section>

<section class="navigator" id="tools">
  <p class="tag">04 / ROVER NAVIGATION</p>
  <h2>Rover Path Planner</h2>
  <p class="section-description">
    Generate a safe route around simulated surface obstacles. Create new terrain to
    test different layouts.
  </p>
  <div class="panel">
    <canvas id="rover-canvas" width="600" height="320"
      style="width:100%;height:auto;background:#080f1e;border-radius:8px">
    </canvas>
    <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap">
      <button id="plan-route" style="flex:1;min-width:160px">Generate Safe Route</button>
      <button id="new-terrain" style="flex:1;min-width:160px">New Terrain</button>
    </div>
    <p id="route-status" style="margin-top:15px;color:#9baec5">
      Ready to plan a rover route.
    </p>
  </div>
</section>

<section class="navigator" id="shadow">
  <p class="tag">05 / LUNAR ENVIRONMENT</p>
  <h2>Shadow Simulator</h2>
  <p class="section-description">
    Explore how changing the Sun elevation affects surface illumination.
  </p>
  <div class="panel">
    <label for="sun-angle">Sun Elevation: <span id="sun-value">20</span>°</label>
    <input id="sun-angle" type="range" min="0" max="90" value="20">
    <div id="shadow-visual"
      style="height:150px;background:#080f1e;border-radius:10px;position:relative;overflow:hidden;margin-top:20px">
      <div id="shadow-ground"
        style="position:absolute;bottom:0;width:100%;height:35%;background:#7b8490">
      </div>
      <div id="shadow-rock"
        style="position:absolute;bottom:35%;left:45%;width:65px;height:55px;background:#4b5666;clip-path:polygon(50% 0,100% 100%,0 100%)">
      </div>
      <div id="shadow-shade"
        style="position:absolute;bottom:35%;left:52%;width:35%;height:25px;background:#030711;transform-origin:left bottom">
      </div>
      <div id="sun-indicator"
        style="position:absolute;top:15px;right:25px;font-size:30px">
        ☀️
      </div>
    </div>
    <p id="shadow-status" style="margin-top:20px;color:#9baec5">
      Adjust the Sun elevation to simulate illumination.
    </p>
  </div>
</section>

<section class="navigator" id="comms">
  <p class="tag">06 / MISSION COMMUNICATION</p>
  <h2>Communication Tool</h2>
  <p class="section-description">
    Estimate Earth–Moon communication visibility using a simplified
    horizon visibility model.
  </p>
  <div class="panel">
    <label for="comm-elevation">
      Antenna Elevation: <span id="comm-value">30</span>°
    </label>
    <input id="comm-elevation" type="range" min="-10" max="90" value="30">
    <div id="comm-result" aria-live="polite" style="margin-top:25px;padding:20px;background:#081323;border-radius:8px"></div>
  </div>
  <p class="section-description" style="margin-top:20px">
    This is a simplified educational model. Real lunar communication also
    depends on terrain obstruction, antenna orientation and relay coverage.
  </p>
</section>

<footer>
  <p style="color:#72d9ff;font-weight:700;margin-bottom:12px">
    DESCENDRA — LUNAR LANDING NAVIGATOR
  </p>
  <p>Project Partners</p>
  <p style="margin-top:10px;color:white">
    Yatharth Singh &nbsp; | &nbsp; Aditya Pratap Singh
  </p>
</footer>
`

// Additional styling (all new styles live here, so style.css needs no changes)
const extraStyle = document.createElement('style')
extraStyle.textContent = `
html { scroll-behavior: smooth; }
section[id] { scroll-margin-top: 80px; }

.team-bar {
  padding: 8px 5%;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #72d9ff;
  background: #050914;
  border-bottom: 1px solid #202b42;
  letter-spacing: 0.5px;
}

#moon-container {
  width:100%;
  height:430px;
  border:1px solid #263b59;
  border-radius:14px;
  overflow:hidden;
  background:radial-gradient(circle,#172b43,#050914);
}
#moon-container canvas { display:block; }
.moon-controls {
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  margin-top:15px;
  color:#9baec5;
  font-size:13px;
  flex-wrap:wrap;
}
.moon-controls button,
#plan-route,
#new-terrain {
  background:#37b8e8;
  color:#06101c;
  border:0;
  border-radius:6px;
  padding:12px 20px;
  font-weight:700;
  cursor:pointer;
}
#goto-site { background:#ffd166 !important; }
#new-terrain { background:#1d3552; color:#cfe9fb; }
button:focus-visible,
input:focus-visible,
select:focus-visible,
a:focus-visible { outline:2px solid #72d9ff; outline-offset:2px; }
#calculate {
  margin-top:12px;
  width:100%;
}
.panel input[type="range"] { padding:0; cursor:pointer; }
#result strong { color:#72d9ff; }
#result .score-number {
  font-size:38px;
  font-weight:800;
  color:#72d9ff;
}
#result p { color:#b9cbe0; }
#result .score-status { font-size:20px; font-weight:700; }

/* Colourful score bars: blue = score, red = remaining */
.bar-row { margin: 14px 0; }
.bar-head {
  display: flex;
  justify-content: space-between;
  color: #b9cbe0;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 6px;
}
.bar-head span:last-child { color: #ffffff; font-weight: 700; }
.bar-track {
  height: 10px;
  background: #e5484d;
  border-radius: 999px;
  overflow: hidden;
}
.bar-fill {
  height: 100%;
  background: #37b8e8;
  border-radius: 999px;
  transition: width 0.5s ease;
}

@media(max-width:650px) {
  #moon-container { height:300px; }
  .moon-controls { flex-direction:column; align-items:flex-start; }
  .navbar { height:auto; padding:12px 5%; flex-direction:column; gap:10px; }
  nav { flex-wrap:wrap; justify-content:center; gap:8px 14px; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .bar-fill { transition: none; }
}
`
document.head.appendChild(extraStyle)


// =====================================
// 1. 3D MOON VIEWER
// =====================================

const moonContainer = document.querySelector('#moon-container')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const scene = new THREE.Scene()
scene.background = new THREE.Color('#080e1b')

const camera = new THREE.PerspectiveCamera(
  45,
  moonContainer.clientWidth / moonContainer.clientHeight,
  0.1,
  100
)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(moonContainer.clientWidth, moonContainer.clientHeight)
moonContainer.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.minDistance = 1.8
controls.maxDistance = 6
controls.autoRotate = !reducedMotion
controls.autoRotateSpeed = 0.5

// Seeded random so the Moon looks the same on every load
function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const rand = mulberry32(1969)

const moonCanvas = document.createElement('canvas')
moonCanvas.width = 2048
moonCanvas.height = 1024

const ctx = moonCanvas.getContext('2d')
ctx.fillStyle = '#858585'
ctx.fillRect(0, 0, 2048, 1024)

// Large dark maria patches
for (let i = 0; i < 14; i++) {
  const x = rand() * 2048
  const y = 200 + rand() * 624
  const r = 60 + rand() * 140
  const g = ctx.createRadialGradient(x, y, 0, x, y, r)
  g.addColorStop(0, 'rgba(60,60,64,0.55)')
  g.addColorStop(1, 'rgba(60,60,64,0)')
  ctx.fillStyle = g
  ctx.fillRect(x - r, y - r, r * 2, r * 2)
}

// Craters: mix of many small and few large
for (let i = 0; i < 9000; i++) {
  const x = rand() * 2048
  const y = rand() * 1024
  const big = rand() > 0.985
  const radius = big ? rand() * 30 + 14 : rand() * 7 + 1
  const shade = Math.floor(rand() * 80 + 90)

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.fillStyle = `rgb(${shade},${shade},${shade})`
  ctx.fill()

  // Lit rim on one side, shadow on the other
  ctx.beginPath()
  ctx.arc(x - radius * 0.2, y - radius * 0.2, radius * 0.7, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(30,30,30,0.3)'
  ctx.lineWidth = big ? 2 : 1
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(x + radius * 0.15, y + radius * 0.15, radius * 0.85, 0, Math.PI * 2)
  ctx.strokeStyle = 'rgba(210,210,210,0.18)'
  ctx.lineWidth = 1
  ctx.stroke()
}

const moonTexture = new THREE.CanvasTexture(moonCanvas)
moonTexture.colorSpace = THREE.SRGBColorSpace
moonTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(1, 96, 96),
  new THREE.MeshStandardMaterial({ map: moonTexture, roughness: 1 })
)
scene.add(moon)

// ---- Shiv Shakti Point marker (Chandrayaan-3 landing site, about 69.37°S, 32.32°E) ----
const SITE_LAT = -69.373
const SITE_LON = 32.319

function latLonToVector(lat, lon, radius) {
  const phi = THREE.MathUtils.degToRad(90 - lat)
  const theta = THREE.MathUtils.degToRad(lon + 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

const siteDirection = latLonToVector(SITE_LAT, SITE_LON, 1).normalize()

// Glowing dot on the surface
const siteDot = new THREE.Mesh(
  new THREE.SphereGeometry(0.035, 24, 24),
  new THREE.MeshBasicMaterial({ color: 0xffd166 })
)
siteDot.position.copy(siteDirection).multiplyScalar(1.01)
moon.add(siteDot)

// Pulsing ring around the dot
const siteRing = new THREE.Mesh(
  new THREE.RingGeometry(0.055, 0.07, 48),
  new THREE.MeshBasicMaterial({
    color: 0xffd166,
    transparent: true,
    opacity: 0.9,
    side: THREE.DoubleSide
  })
)
siteRing.position.copy(siteDirection).multiplyScalar(1.006)
siteRing.lookAt(siteDirection.clone().multiplyScalar(3))
moon.add(siteRing)

// Text label: "Shiv Shakti Point"
function makeLabelSprite(text) {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 128
  const g = c.getContext('2d')

  g.fillStyle = 'rgba(5, 9, 20, 0.85)'
  g.strokeStyle = '#ffd166'
  g.lineWidth = 4
  g.beginPath()
  g.roundRect(6, 20, 500, 88, 18)
  g.fill()
  g.stroke()

  g.fillStyle = '#ffffff'
  g.font = '700 44px Arial, sans-serif'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText(text, 256, 66)

  const texture = new THREE.CanvasTexture(c)
  texture.colorSpace = THREE.SRGBColorSpace

  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true })
  )
  sprite.scale.set(1.0, 0.25, 1)
  sprite.renderOrder = 10
  return sprite
}

const siteLabel = makeLabelSprite('Shiv Shakti Point')
siteLabel.position.copy(siteDirection).multiplyScalar(1.28)
moon.add(siteLabel)

// Thin line joining the marker to its label
const siteLine = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([
    siteDirection.clone().multiplyScalar(1.02),
    siteDirection.clone().multiplyScalar(1.2)
  ]),
  new THREE.LineBasicMaterial({ color: 0xffd166 })
)
moon.add(siteLine)

// Simple starfield
const starCount = 700
const starPositions = new Float32Array(starCount * 3)
for (let i = 0; i < starCount; i++) {
  const r = 30 + rand() * 20
  const theta = rand() * Math.PI * 2
  const phi = Math.acos(2 * rand() - 1)
  starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
  starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
  starPositions[i * 3 + 2] = r * Math.cos(phi)
}
const starGeometry = new THREE.BufferGeometry()
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
scene.add(
  new THREE.Points(
    starGeometry,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.12, sizeAttenuation: true })
  )
)

scene.add(new THREE.AmbientLight(0xffffff, 0.65))
const sunLight = new THREE.DirectionalLight(0xffffff, 2.2)
sunLight.position.set(4, 2, 3)
scene.add(sunLight)

// Camera views
function showSite() {
  const distance = 3.0
  const offset = siteDirection.clone().multiplyScalar(distance)
  // tilt slightly up so the point sits in view, not on the edge
  offset.y += 0.5
  camera.position.copy(offset)
  controls.target.set(0, 0, 0)
  controls.update()
}

function showDefault() {
  camera.position.set(0, 0, 3.2)
  controls.target.set(0, 0, 0)
  controls.update()
}

showSite() // start by looking at the marker

// Only render while the viewer is on screen
let moonVisible = true
new IntersectionObserver(([entry]) => {
  moonVisible = entry.isIntersecting
}).observe(moonContainer)

const clock = new THREE.Clock()

function animateMoon() {
  requestAnimationFrame(animateMoon)
  if (!moonVisible) return

  // Pulse the ring
  const t = clock.getElapsedTime()
  const pulse = 1 + 0.35 * Math.sin(t * 3)
  siteRing.scale.set(pulse, pulse, pulse)
  siteRing.material.opacity = 0.9 - 0.4 * Math.abs(Math.sin(t * 1.5))

  controls.update()
  renderer.render(scene, camera)
}
animateMoon()

function resizeMoon() {
  const width = moonContainer.clientWidth
  const height = moonContainer.clientHeight
  if (!width || !height) return
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
new ResizeObserver(resizeMoon).observe(moonContainer)

const spinBtn = document.querySelector('#toggle-spin')
function updateSpinLabel() {
  spinBtn.textContent = controls.autoRotate ? 'Pause Rotation' : 'Resume Rotation'
}
updateSpinLabel()

spinBtn.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate
  updateSpinLabel()
})

document.querySelector('#reset-moon').addEventListener('click', showDefault)
document.querySelector('#goto-site').addEventListener('click', showSite)


// =====================================
// 2. LANDING SAFETY PREDICTOR
// =====================================

const HAZARD_FULL_SCORE_METRES = 1000

function computeScore({ slope, hazard, roughness, sunlight, psr }) {
  const slopeScore = Math.max(0, 30 * (1 - slope / 30))
  const hazardScore = Math.min(25, (hazard / HAZARD_FULL_SCORE_METRES) * 25)
  const roughnessScore = { low: 20, medium: 12, high: 4 }[roughness]
  const sunlightScore = sunlight * 0.15
  const psrScore = psr === 'yes' ? 0 : 10

  const score = Math.round(
    slopeScore + hazardScore + roughnessScore + sunlightScore + psrScore
  )

  return { score, slopeScore, hazardScore, roughnessScore, sunlightScore, psrScore }
}

function getStatus(score) {
  if (score >= 90) return 'Excellent'
  if (score >= 70) return 'Good'
  if (score >= 50) return 'Risky'
  return 'Avoid'
}

// Reference profile is calculated with the same model, so it always matches
const REFERENCE_INPUTS = {
  slope: 5.2,
  hazard: 850,
  roughness: 'low',
  sunlight: 85,
  psr: 'no'
}
const REFERENCE_SCORE = computeScore(REFERENCE_INPUTS).score
document.querySelector('#reference-score').textContent =
  `Illustrative score: ${REFERENCE_SCORE}/100`

const formError = document.querySelector('#form-error')

function readNumber(selector) {
  const raw = document.querySelector(selector).value.trim()
  return raw === '' ? NaN : Number(raw)
}

// One coloured bar: blue = earned points, red = remaining points
function scoreBar(label, value, max) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  const shown = Number.isInteger(value) ? value : value.toFixed(1)
  return `
    <div class="bar-row">
      <div class="bar-head">
        <span>${label}</span>
        <span>${shown}/${max}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${pct}%"></div>
      </div>
    </div>
  `
}

document.querySelector('#calculate').addEventListener('click', () => {
  const slope = readNumber('#slope')
  const hazard = readNumber('#hazard')
  const sunlight = readNumber('#sunlight')
  const roughness = document.querySelector('#roughness').value
  const psr = document.querySelector('#psr').value

  if (
    !Number.isFinite(slope) || slope < 0 || slope > 90 ||
    !Number.isFinite(hazard) || hazard < 0 || hazard > 5000 ||
    !Number.isFinite(sunlight) || sunlight < 0 || sunlight > 100
  ) {
    formError.textContent =
      'Fill in every field: slope 0–90°, hazard distance 0–5000 m, sunlight 0–100%.'
    return
  }
  formError.textContent = ''

  const r = computeScore({ slope, hazard, roughness, sunlight, psr })
  const status = getStatus(r.score)

  document.querySelector('#result').innerHTML = `
    <h3>Landing Assessment</h3>
    <div class="score-number">${r.score}/100</div>
    <p class="score-status">${status}</p>
    ${scoreBar('Slope', r.slopeScore, 30)}
    ${scoreBar('Hazard distance', r.hazardScore, 25)}
    ${scoreBar('Roughness', r.roughnessScore, 20)}
    ${scoreBar('Sunlight', r.sunlightScore, 15)}
    ${scoreBar('PSR', r.psrScore, 10)}
    <small>This is a simplified educational scoring model, not a certified landing prediction.</small>
  `

  document.querySelector('#comparison-score').textContent =
    `Your score: ${r.score}/100`
  document.querySelector('#comparison-status').textContent =
    `Assessment: ${status}`

  const diff = r.score - REFERENCE_SCORE
  document.querySelector('#comparison-message').textContent =
    diff === 0
      ? `Your site matches the illustrative reference score of ${REFERENCE_SCORE}.`
      : diff > 0
        ? `Your site scores ${diff} point${diff === 1 ? '' : 's'} above the illustrative reference score of ${REFERENCE_SCORE}.`
        : `Your site scores ${-diff} point${diff === -1 ? '' : 's'} below the illustrative reference score of ${REFERENCE_SCORE}.`
})


// =====================================
// 3. ROVER PATH PLANNER
// =====================================

const roverCanvas = document.querySelector('#rover-canvas')
const roverCtx = roverCanvas.getContext('2d')

const rows = 8
const cols = 15

const DEFAULT_OBSTACLES = [
  [3, 0], [3, 1], [3, 2],
  [6, 3], [6, 4], [6, 5], [6, 6],
  [9, 0], [9, 1], [9, 2], [9, 3], [9, 4],
  [12, 7], [12, 6], [12, 5], [12, 4],
  [14, 6], [13, 3], [11, 2]
]

let obstacles = DEFAULT_OBSTACLES.map((o) => [...o])

function drawRoverGrid(path = []) {
  const cellW = roverCanvas.width / cols
  const cellH = roverCanvas.height / rows

  roverCtx.clearRect(0, 0, roverCanvas.width, roverCanvas.height)

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      roverCtx.fillStyle = '#17263a'
      roverCtx.fillRect(x * cellW, y * cellH, cellW - 2, cellH - 2)
    }
  }

  obstacles.forEach(([x, y]) => {
    roverCtx.fillStyle = '#a35e50'
    roverCtx.fillRect(x * cellW + 2, y * cellH + 2, cellW - 5, cellH - 5)
  })

  if (path.length > 1) {
    roverCtx.strokeStyle = '#37b8e8'
    roverCtx.lineWidth = 6
    roverCtx.lineJoin = 'round'
    roverCtx.lineCap = 'round'
    roverCtx.beginPath()
    path.forEach(([x, y], i) => {
      const px = (x + 0.5) * cellW
      const py = (y + 0.5) * cellH
      if (i === 0) roverCtx.moveTo(px, py)
      else roverCtx.lineTo(px, py)
    })
    roverCtx.stroke()
  }

  roverCtx.fillStyle = '#62ff9b'
  roverCtx.beginPath()
  roverCtx.arc(cellW / 2, cellH / 2, 10, 0, Math.PI * 2)
  roverCtx.fill()

  roverCtx.fillStyle = '#ffd166'
  roverCtx.beginPath()
  roverCtx.arc((cols - 0.5) * cellW, (rows - 0.5) * cellH, 10, 0, Math.PI * 2)
  roverCtx.fill()
}

function findRoverPath() {
  const start = [0, 0]
  const end = [cols - 1, rows - 1]
  const obstacleSet = new Set(obstacles.map(([x, y]) => `${x},${y}`))
  const visited = new Set(['0,0'])
  const cameFrom = new Map()
  const queue = [start]
  let head = 0

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  while (head < queue.length) {
    const [x, y] = queue[head++]

    if (x === end[0] && y === end[1]) {
      const path = [[x, y]]
      let key = `${x},${y}`
      while (cameFrom.has(key)) {
        const prev = cameFrom.get(key)
        path.push(prev)
        key = `${prev[0]},${prev[1]}`
      }
      return path.reverse()
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy
      const key = `${nx},${ny}`

      if (
        nx < 0 || nx >= cols ||
        ny < 0 || ny >= rows ||
        visited.has(key) ||
        obstacleSet.has(key)
      ) continue

      visited.add(key)
      cameFrom.set(key, [x, y])
      queue.push([nx, ny])
    }
  }

  return null
}

function generateTerrain() {
  const next = []
  const used = new Set()
  const count = 16 + Math.floor(Math.random() * 8)

  while (next.length < count) {
    const x = Math.floor(Math.random() * cols)
    const y = Math.floor(Math.random() * rows)
    const key = `${x},${y}`
    const isStart = x === 0 && y === 0
    const isEnd = x === cols - 1 && y === rows - 1
    if (isStart || isEnd || used.has(key)) continue
    used.add(key)
    next.push([x, y])
  }
  return next
}

const routeStatus = document.querySelector('#route-status')

document.querySelector('#plan-route').addEventListener('click', () => {
  const path = findRoverPath()

  if (path) {
    drawRoverGrid(path)
    routeStatus.textContent =
      `Safe route found: ${path.length} grid positions (${path.length - 1} moves) from start to target.`
  } else {
    drawRoverGrid()
    routeStatus.textContent =
      'No safe route exists on this terrain. Try generating new terrain.'
  }
})

document.querySelector('#new-terrain').addEventListener('click', () => {
  obstacles = generateTerrain()
  drawRoverGrid()
  routeStatus.textContent = 'New terrain generated. Ready to plan a rover route.'
})

drawRoverGrid()


// =====================================
// 4. SHADOW SIMULATOR
// =====================================

const sunSlider = document.querySelector('#sun-angle')

function updateShadow() {
  const angle = Number(sunSlider.value)

  document.querySelector('#sun-value').textContent = angle

  const shade = document.querySelector('#shadow-shade')
  const sun = document.querySelector('#sun-indicator')

  const shadowLength = Math.max(5, 80 - angle * 0.8)
  shade.style.width = `${shadowLength}%`
  shade.style.transform = `skewX(${-Math.max(5, 50 - angle * 0.4)}deg)`

  sun.style.top = `${Math.max(5, 70 - angle * 0.65)}px`

  document.querySelector('#shadow-status').textContent =
    angle <= 5
      ? 'Very low Sun elevation: long shadows and dark terrain are simulated.'
      : angle < 30
        ? 'Low Sun elevation: extended shadows may affect surface visibility.'
        : angle < 60
          ? 'Moderate Sun elevation: some terrain receives direct sunlight.'
          : 'High Sun elevation: shorter shadows and greater surface illumination.'
}

sunSlider.addEventListener('input', updateShadow)
updateShadow()


// =====================================
// 5. COMMUNICATION TOOL
// =====================================

const commSlider = document.querySelector('#comm-elevation')
const COMM_THRESHOLD_DEG = 5

function updateComm() {
  const elevation = Number(commSlider.value)

  document.querySelector('#comm-value').textContent = elevation

  const result = document.querySelector('#comm-result')

  if (elevation > COMM_THRESHOLD_DEG) {
    result.innerHTML = `
      <h3 style="color:#62ff9b">Communication Available</h3>
      <p>Estimated line of sight is available in this simplified model.</p>
      <p>Antenna elevation: ${elevation}°</p>
    `
  } else {
    result.innerHTML = `
      <h3 style="color:#ff8b75">Communication Blocked</h3>
      <p>The selected elevation is at or below the model's ${COMM_THRESHOLD_DEG}° visibility threshold.</p>
      <p>Antenna elevation: ${elevation}°</p>
    `
  }
}

commSlider.addEventListener('input', updateComm)
updateComm()

console.log('DESCENDRA Lunar Landing Navigator loaded successfully.')