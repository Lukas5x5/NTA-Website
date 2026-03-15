/* ═══════════════════════════════════════════════════════════
   NTA SkyNav – Shared JavaScript
   Navigation, Starfield, Scroll Animations, FAQ, Countdown
   ═══════════════════════════════════════════════════════════ */

// ─── Loading Screen (inject before DOM ready) ───
(function() {
  const loader = document.createElement('div')
  loader.className = 'loading-screen'
  loader.innerHTML = `
    <img src="nta-logo.png" alt="NTA SkyNav" class="loading-logo">
    <div class="loading-bar-container">
      <div class="loading-bar" id="loadingBar"></div>
    </div>
  `
  document.body.prepend(loader)

  let progress = 0
  const bar = loader.querySelector('#loadingBar')
  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5
    if (progress > 90) progress = 90
    bar.style.width = progress + '%'
  }, 150)

  window.addEventListener('load', () => {
    clearInterval(interval)
    bar.style.width = '100%'
    setTimeout(() => {
      loader.classList.add('hidden')
      setTimeout(() => loader.remove(), 500)
    }, 400)
  })
})()

document.addEventListener('DOMContentLoaded', () => {
  initStarfield()
  initNavbar()
  initScrollReveal()
  initFAQ()
})

/* ─── Starfield Canvas ─────────────────────────────────── */
function initStarfield() {
  const canvas = document.getElementById('starfield')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let stars = []
  const STAR_COUNT = 200

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function createStars() {
    stars = []
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        opacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      })
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const star of stars) {
      const opacity = star.opacity * (0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset))
      ctx.fillStyle = `rgba(200, 212, 240, ${opacity})`
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fill()

      // Slow drift
      star.y -= star.speed
      if (star.y < -5) {
        star.y = canvas.height + 5
        star.x = Math.random() * canvas.width
      }
    }
    requestAnimationFrame(draw)
  }

  resize()
  createStars()
  requestAnimationFrame(draw)

  window.addEventListener('resize', () => {
    resize()
    createStars()
  })
}

/* ─── Navbar ───────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar')
  const hamburger = document.querySelector('.hamburger')
  const mobileNav = document.querySelector('.mobile-nav')

  // Scroll effect
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50)
    })
  }

  // Hamburger toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open')
      mobileNav.classList.toggle('open')
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : ''
    })

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open')
        mobileNav.classList.remove('open')
        document.body.style.overflow = ''
      })
    })
  }

  // Active page highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href')
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active')
    }
  })
}

/* ─── Scroll Reveal (Intersection Observer) ────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
  if (!elements.length) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  })

  elements.forEach(el => observer.observe(el))
}

/* ─── FAQ Accordion ────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item')
      const wasOpen = item.classList.contains('open')

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'))

      // Toggle clicked
      if (!wasOpen) item.classList.add('open')
    })
  })
}

/* ─── Shared: Insert Nav + Footer ──────────────────────── */
function getNavHTML(activePage) {
  return /* provided inline in each HTML file */''
}

/* ─── Helper: Smooth scroll to element ─────────────────── */
function scrollToElement(selector) {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
