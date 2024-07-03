import './index.css'

const LanguageOption = props => {
  const {languageDetail, isActive, changeActiveId} = props
  const {id, buttonText} = languageDetail
  const style = isActive ? 'bg-fill' : 'bg-transparent'
  const changeId = () => {
    changeActiveId(id)
  }
  return (
    <li className="language-option">
      <button className={`button ${style}`} type="button" onClick={changeId}>
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageOption
