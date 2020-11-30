import React from 'react'
import Weather from './Weather'
import './styles/style.css'
import './styles/App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='London' />
        <footer>
          This projects was coded by <span>Sarah</span> and is{' '}
          <a
            href='https://github.com/SarahPruene/wetter-react-app'
            target='_blank'
            rel='noreferrer'
          >
            open-sourced on Github
          </a>{' '}
          and{' '}
          <a
            href='https://sharp-yonath-8d2882.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  )
}
