import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;

  h1 {
    align-self: center;
    margin: 1vh;
  }

  h2 {
    align-self: center;
    margin: 1vh;
    font-size: 2.2vh;
  }

  p {
    align-self: center;
    margin: 0.8vh;
  }
`;

const LargeImage = styled.img`
  width: 100vw;
  max-width: 600px;
  height: auto;
  align-self: center;
  margin: 1.5vh;
`;

const BeeperWrapper = styled.div`
  align-self: center;
`;

const Beeper = styled.img`
  width: 350px;
  height: auto;
  align-self: center;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 400px;
  align-self: center;
`;

const Input = styled.input`
  margin: 1vh 0 0.5vh;
  width: 70vw;
  max-width: 300px;
  height: 30px;
  border-radius: 10px;
  padding-left: 8px;
  align-self: center;
`;

const Send = styled.input`
  height: 30px;
  border-radius: 10px;
  width: 50px;
  background-color: #800080;
  color: white;
`;

const BeeperText = styled.div`
  box-sizing: border-box;
  position: relative;
  top: -182px;
  left: 70px;
  background-color: #13f4ef;
  width: 189px;
  height: 58px;
  max-width: 188px;
  max-height: 58px;
  z-index: 1000;
  border-radius: 8px;
  padding: 4px;
  overflow: auto;

  p {
    /* font-family: 'Roboto Slab', serif; */
    font-size: 1.6vh;
    margin: 0.5vh;
  }
`;

const App = () => {
  const [text, setText] = React.useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  }

  const handleSend = (e) => {
    const value = e.target.value;
    setText(value);
  }
  
  return (
    <Wrapper>
      <h1>Hi, I'm Bilbo</h1>
      <h2>I love to be at home, enjoying some coffee, tea, and reading.</h2>
      <h2>I'm mostly busy doing cool projects and keeping to myself...</h2>
      <LargeImage src="img/shire.jpg"/>
      <p>I really value my privacy and don't like to be programmed by social media so I've stopped using my cellphone.</p>
      <p>But, if you really must get in touch with me, you can send me a message to my beeper, and I'll read it and get back to you when I feel like it.</p>
      <ActionWrapper>
        <Input value={text} onChange={handleChange} placeholder="your message..."/>
        <Send type="submit" onSubmit={handleSend} value="Send" />
      </ActionWrapper>
      <BeeperWrapper>
        <Beeper src="img/beeper.jpg"/>
        <BeeperText>
          <p>{text}</p>
        </BeeperText>
      </BeeperWrapper>
    </Wrapper>
  );
}

export default App;
