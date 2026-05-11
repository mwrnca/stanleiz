import { useEffect, useState } from "react"
import "./Nav.css"

const navItems = [
  { label: "HOME", id: "home" },
  { label: "ABOUT US", id: "aboutUs" },
  { label: "PRODUCTS", id: "ourProducts" },
]

function Nav() {
  const [active, setActive] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container")
    if (!scrollContainer) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        root: scrollContainer,
        threshold: 0.5,
      }
    )

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    setActive(id)
    setMenuOpen(false)

    const scrollContainer = document.querySelector(".scroll-container")
    if (!scrollContainer) return

    // Each section is exactly 100vw wide, so multiply by index
    const sectionIndex = navItems.findIndex((item) => item.id === id)
    scrollContainer.scrollTo({
      left: sectionIndex * window.innerWidth,
      behavior: "smooth",
    })
  }

  return (
    <section className="container">
      <div className="nav-logo">
        <span className="logo-text">STANLEIZ</span>
        <span className="logo-sub">CONSUMABLES</span>
      </div>

      <button
        className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        {navItems.map(({ label, id }, i) => (
          <li key={id} className="nav-item">
            <a
              href={"#" + id}
              className={"nav-link" + (active === id ? " nav-link--active" : "")}
              onClick={(e) => handleClick(e, id)}
            >
              <span className="nav-index">0{i + 1}</span>
              <span className="nav-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Nav
