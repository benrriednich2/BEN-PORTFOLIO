
export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        Benrriednich<span>.</span>
      </a>

      <nav className="navLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="navButton">
        Let's Talk
      </a>
    </header>
  );
}
