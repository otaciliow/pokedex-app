import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ2Vwd2pjdW1sdGdyc2J2ZHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzMjU5MjAsImV4cCI6MTk1OTkwMTkyMH0.F5IfLLndLFbEEhDXIXTPmSm98-YWfIVBH64SIk4kMUc';
const SUPABASE_URL = 'https://aigepwjcumltgrsbvdwb.supabase.co';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
