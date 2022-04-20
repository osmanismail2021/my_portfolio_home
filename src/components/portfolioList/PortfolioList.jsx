<<<<<<< HEAD
import "./portfolioList.scss"

export default function PortfolioList({id, title, active, setSelected}) {
    
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} 
    onClick={() => setSelected(id)} >
        {title}
    </li>
  )
}
=======
import "./portfolioList.scss"

export default function PortfolioList({id, title, active, setSelected}) {
    
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} 
    onClick={() => setSelected(id)} >
        {title}
    </li>
  )
}
>>>>>>> 6b518c9200f8ff6529e0ad3a2c3ce6bd453ad537
