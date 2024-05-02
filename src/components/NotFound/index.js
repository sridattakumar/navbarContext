// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassname = isDarkTheme
        ? 'not-found-bg-light'
        : 'not-found-bg-dark'

      const notFoundHeadingTextClassname = isDarkTheme
        ? 'not-found-heading-text-light'
        : 'not-found-heading-text-dark'

      const notFoundContextTextClassname = isDarkTheme
        ? 'not-found-context-text-light'
        : 'not-found-context-text-dark'

      return (
        <div className={`not-found-app-container ${notFoundBgClassname}`}>
          <Navbar />
          <div className="not-found-responsive-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1
                className={`not-found-heading ${notFoundHeadingTextClassname}`}
              >
                Lost Your way
              </h1>
              <p
                className={`not-found-context ${notFoundContextTextClassname}`}
              >
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
