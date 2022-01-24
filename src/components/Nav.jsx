import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <header>
      <a href="/"><Link to="/">KIM GABBERT</Link></a>
      <nav>
        <a href="#project">Prior Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </header>
  )
}
