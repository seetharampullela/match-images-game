import './index.css'

const TabItem = props => {
  const {tabsItem, updateActiveId} = props
  const {tabId, displayText} = tabsItem

  const changeTab = () => {
    updateActiveId(tabId)
  }

  return (
    <div>
      <li className="list-item">
        <button type="button" className="tab-name" onClick={changeTab}>
          {displayText}
        </button>
      </li>
    </div>
  )
}
export default TabItem
