import React from "react";
import styled from "styled-components";

const Container = styled.div({
  width:'100px',
  height:'100px',
  backgroundColor:'pink'
})

const Box= styled.div(props=>({
  width: '100px',
  height: '100px',
  backgroundColor: props.background
}))

function App() {
  return (
    <div>
        <Container>
          Hello world, how are you?
        </Container>
        <Box background='yellow'>

        </Box>
    </div>
  );
}

export default App;
