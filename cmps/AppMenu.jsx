const { Link } = ReactRouterDOM;

export function AppMenu({ opacity, toggleApps }) {
  return (
    <div className='app-container grid space-between' style={{ opacity: `${opacity}` }}>
      <Link to="/about" onClick={toggleApps}>
        <div className='flex col align-center'>
          <i className="fas fa-user-friends active"></i>
          <span className="active">About</span>
        </div>
      </Link>
      <Link to="/mail" onClick={toggleApps}>
        <div className='flex col align-center '>
          <i className="fas fa-envelope active"></i>
          <span className="active">Mail</span>
        </div>
      </Link>
      <Link to="/keep" onClick={toggleApps}>
        <div className='flex col align-center '>
          <i className="fas fa-sticky-note active"></i>
          <span className="active">Notes</span>
        </div>
      </Link>
      <Link>
        <div className='flex col align-center'>
          <i className="fas fa-calendar-alt "></i>
          <span>Calender</span>
        </div>
      </Link>
      <Link>
        <div className='flex col align-center'>
          <i className="fas fa-globe-americas"></i>
          <span>Earth</span>
        </div>
      </Link>
      <Link to="/book" onClick={toggleApps}>
        <div className='flex col align-center '>
          <i className="fas fa-book"></i>
          <span>Books</span>
        </div>
      </Link>
      <Link>
        <div className='flex col align-center'>
          <i className="fas fa-newspaper"></i>
          <span>News</span>
        </div>
      </Link>
      <Link>
        <div className='flex col align-center'>
          <i className="fas fa-camera"></i>
          <span>Photos</span>
        </div>
      </Link>
      <Link>
        <div className='flex col align-center'>
          <i className="fas fa-video"></i>
          <span>Meet</span>
        </div>
      </Link>
    </div>
  )
}


