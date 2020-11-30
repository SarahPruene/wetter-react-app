import React from 'react'
import './App.css'

export default function App() {
  return (
    <div>
      <div className='container'>
        <footer>
          This projects was coded by <span>Sarah</span>
          and is{' '}
          <a
            href='https://github.com/SarahPruene/shecodes-react-weather-app'
            target='_blank'
            rel='noreferrer'
          >
            open-sourced on Github
          </a>{' '}
          and{' '}
          <a href='/' target='_blank' rel='noreferrer'>
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  )
}

