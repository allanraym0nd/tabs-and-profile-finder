import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tabs from './App'
import GithubProfileFinder from './github-profile-finder';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Tabs /> */}
    <GithubProfileFinder/>
  </React.StrictMode>
);

