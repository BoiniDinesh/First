import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
function Dispaly(){
    return    <h1> form is successfully submitted....</h1>
}
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
function send(){
root2.render(<Display />)
}
function First(){
return (
    <center>
    <h1>Form</h1>
<form>
    
    Name<input type="text" name=""/><br></br>
    DOB<input type="date" name=""/><br></br>
    Email<input type="email" name=""/><br></br>
    Password<input type="password" name="" /><br></br>    
    <input type="submit" name="" value="submit"/><br></br>
     
    
  </form>
</center>
);   
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<First />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();