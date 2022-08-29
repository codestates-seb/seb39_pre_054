import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Ask from "./pages/Ask";
import Questions from "./pages/Questions";
import MyPage from "./pages/MyPage";
import Nav from "./components/Nav";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Footer from "./components/Footer";
import styled from "styled-components";
import QuestionView from "./pages/QuestionView";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <>
      <Container>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/questions" element={<Questions></Questions>}></Route>
            {/* 질문보기 라우터 */}
            <Route path="/questions/:id" element={<QuestionView></QuestionView>}></Route>
            <Route path="/users/login" element={<Login></Login>}></Route>
            <Route path="/users/signup" element={<Signup></Signup>}></Route>
            <Route path="/questions/ask" element={<Ask></Ask>}></Route>
            <Route path="/users/:id" element={<MyPage></MyPage>}></Route>
            <Route path="/posts/:id" element={<Posts></Posts>}></Route>
          </Routes>
          <Footer />
        </Router>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  position: relative;
  top: 50px;
`;
