import Userprofile from './components/UserProfile/index'
import './App.css'

const App = () => {
  const userDetailsList = [
    {
      uniqueKey: 1,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Jaswanth',
      role: 'Web Developer',
    },
    {
      uniqueKey: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Divya',
      role: 'Backend Developer',
    },
    {
      uniqueKey: 3,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Anjali',
      role: 'Software Engineer',
    },
    {
      uniqueKey: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
      name: 'Manoj',
      role: 'FrontEnd Developer',
    },
  ]

  return (
    <div className="list-container">
      <h1 className="title">Users List</h1>
      <ul>
        {userDetailsList.map(eachItem => (
          <Userprofile userDetails={eachItem} key={eachItem.uniqueKey}/>
        ))}
      </ul>
    </div>
  )
}

export default App
