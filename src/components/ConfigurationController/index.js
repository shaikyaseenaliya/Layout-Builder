// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavBar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavBar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavBar}
                  type="checkbox"
                  id="leftNavbar"
                />
                <label className="label-text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavBar}
                  type="checkbox"
                  id="rightNavbar"
                />
                <label className="label-text" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
