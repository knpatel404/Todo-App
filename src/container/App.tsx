import React from 'react';
import '../assets/css/font.scss';
import '../assets/css/style.scss';
import Layout from "../component/Layout";
import TodoApp from "./TodoApp";

function App() {
  return (
  <Layout>
    <TodoApp />
  </Layout>
  );
}

export default App;
