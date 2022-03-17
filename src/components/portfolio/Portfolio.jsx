import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Web App</li>
          <li>Mobile App</li>
        </ul>
        <div className="container">
          <div className="item">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
            <h3>ToDo App</h3>
          </div>
        </div>
    </div>
  )
}
