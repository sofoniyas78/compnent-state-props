import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {

}
function HomePage() {
  return (
    <div>
      {/*Nesting the Header component */}
      <Header />

    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<Header />);
