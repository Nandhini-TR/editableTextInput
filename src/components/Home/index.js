import {Component} from 'react'
import {
  BgContainer,
  TextContainer,
  InputContainer,
  Heading,
  Input,
  Button,
  Text,
} from './styledComponents'

class Home extends Component {
  state = {isSaved: false, text: ''}

  onClickSave = () => {
    this.setState({isSaved: true})
  }

  onClickEdit = () => {
    this.setState({isSaved: false})
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {isSaved, text} = this.state
    return (
      <BgContainer>
        <TextContainer>
          <Heading>Editable Text Input</Heading>

          {isSaved ? (
            <InputContainer>
              <Text>{text}</Text>
              <Button type="button" onClick={this.onClickEdit}>
                Edit
              </Button>
            </InputContainer>
          ) : (
            <InputContainer>
              <Input type="text" value={text} onChange={this.onChangeInput} />
              <Button type="button" onClick={this.onClickSave}>
                Save
              </Button>
            </InputContainer>
          )}
        </TextContainer>
      </BgContainer>
    )
  }
}

export default Home
