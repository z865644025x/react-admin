import React from 'react';
import { Link } from "react-router-dom";

const homeStyle = {
  padding: 20,
}

export const Home: React.FC = () => {
  return (
    <div style={homeStyle}>
      <Link to="/demo"> This is a Link to Demo </Link>
      <br />
      <Link to="/todolist"> This is a Link to TodoList </Link>
    </div>
  )
}