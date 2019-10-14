import React from 'react'
import { Col,Row} from 'antd'
import styled from 'styled-components';
import SigninForm from './SinginForm';
import SigninBg from './SigninBg';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';

const Page = styled(Row).attrs(() => ({
    type: 'flex',
    align: 'middle',
  }))`
    height: 100vh;
  `;
  
  
  const Underline = styled.div`
    width: 200px;
    height: 8px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    background: linear-gradient(to right, #803b32, #ddb49b);
  `;


  const Contents = styled(Row).attrs(() => ({
    type: 'flex',
  }))`
    margin-top: 50px;
    background-color: #f3f7f8;
    margin-left: auto;
    margin-right: auto;
    width: 800px;
  `;


const Home=() =>{
return(
<Page>
  <Col span={24}>
    <Title>MARKTUBE REVIEW SERVICE FOR BOOKS</Title>
    <SubTitle>
      PLEASE SHARE YOUR OPINION ON WEB DEVELOPMENT BOOKS.
    </SubTitle>
    <Underline />
    <Contents>
      <SigninBg />
      <SigninForm />
    </Contents>
  </Col>
</Page>

);
}

export default Home;
