import {Component} from 'react'
import LanguageOption from '../LanguageOption'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class GreetingCard extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  changeActiveId = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state
    const displayImage = languageGreetingsList.find(
      each => each.id === activeId,
    )

    return (
      <div className="app-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="language-types">
          {languageGreetingsList.map(each => (
            <LanguageOption
              key={each.id}
              languageDetail={each}
              isActive={each.id === activeId}
              changeActiveId={this.changeActiveId}
            />
          ))}
        </ul>
        <div className="language-image">
          <img
            src={displayImage.imageUrl}
            alt={displayImage.imageAltText}
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default GreetingCard
