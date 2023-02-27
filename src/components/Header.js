import { ReactComponent as Logo } from './react.svg'

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          {/* <img src={logo} alt="React logo" /> */}
          <Logo className='logo'/>
          <h4>React Projects - 1</h4>
        </nav>
      </header>
    </div>
  )
}

export default Header