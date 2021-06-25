import React from "react";
import Currency from "./components/Currency";
import styled from "styled-components";
import currency from "./assets/currency.png";

function App() {
  return (
    <Background>
     <Currency/>
    </Background>
  );
}

export default App;

const Background=styled.div`
background-image:url(${currency});
`