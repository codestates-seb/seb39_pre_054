import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./actions";

import Main from "./pages/Main";
import Ask from "./pages/Ask";
import Questions from "./pages/Questions";
import MyPage from "./pages/MyPage";
import Nav from "./components/Nav";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import styled from "styled-components";
import QuestionView from "./pages/QuestionView";
import QuestionEdit from "./pages/QuestionEdit";
import FooterLayout from "./components/FooterLayout";
import AnswerEdit from "./pages/AnswerEdit";
import MyPageEdit from "./pages/MyPageEdit";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem("authorization") !== null){
      dispatch(loginSuccess());
    }
  }, [])
  return (
    <>
      <Container>
        <Router>
          <Nav />
          <Routes>
            <Route element={<FooterLayout></FooterLayout>}>
              <Route path="/" element={<Main></Main>}></Route>
              <Route
                path="/questions"
                element={<Questions></Questions>}
              ></Route>
              {/* 질문보기 라우터 */}
              <Route
                path="/questions/:id"
                element={<QuestionView></QuestionView>}
              ></Route>
              <Route path="/questions/ask" element={<Ask></Ask>}></Route>
              <Route path="/users/:id" element={<MyPage></MyPage>}></Route>
              <Route path="/questionedit/:id" element={<QuestionEdit></QuestionEdit>}></Route>
              <Route path="/answeredit/:id" element={<AnswerEdit></AnswerEdit>}></Route>
              <Route path="/users/edit/:id" element = {<MyPageEdit></MyPageEdit>}></Route>
            </Route>
            <Route path="/users/login" element={<Login></Login>}></Route>
            <Route path="/users/signup" element={<Signup></Signup>}></Route>
          </Routes>
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
