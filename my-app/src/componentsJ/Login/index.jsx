// import './index.css'
// import {useState} from 'react'
// import { useNavigate } from 'react-router-dom' // ✅ Import useNavigate

// import Cookies from 'js-cookie'

// const LoginForm = props => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [showSubmitError, setShowSubmitError] = useState(false)
//   // const [errorMsg, setErrorMsg] = useState('')
//   const navigate = useNavigate() // ✅ useNavigate hook

//   const onSubmitSuccess = jwtToken => {
//     Cookies.set('jwtToken', jwtToken, { expires: 30 })
//     navigate('/', { replace: true }) // ✅ Correct navigation
//     // ✅ Redirect to Home after successful login

//   }

//   const onSubmitError = () => {
//     setShowSubmitError(true)
//     // setErrorMsg(errorMsg)
//   }

//   const submitForm = async event => {
//     event.preventDefault()
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(data)
//     if (response.ok === true) {
//       onSubmitSuccess(data.jwt_token)
//     } else {
//       onSubmitError(data.error_msg)
//     }
//   }

//   const onChangeUsername = event => {
//     setUsername(event.target.value)
//   }

//   const onChangePassword = event => {
//     setPassword(event.target.value)
//   }

//   const renderPasswordField = () => {
//     return (
//       <div className="input-container">
//         <label className="input-label" htmlFor="password">
//           javeed
//         </label><br />
//         <input
//           type="password"
//           id="password"
//           className="input-field"
//           value={password}
//           onChange={onChangePassword}
//         />
//       </div>
//     )
//   }

//   const renderUsernameField = () => {
//     return (
//       <div className="input-container">
//         <label className="input-label" htmlFor="username">
//           USERNAME
//         </label><br /><br />
//         <input
//           type="text"
//           id="username"
//           className="input-field"
//           value={username}
//           onChange={onChangeUsername}
//         />
//       </div>
//     )
//   }
//   return (
//    <div className='login-form-container' >
//          <div >
//       <form className="form-container" onSubmit={submitForm}>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
//           className="login-website-logo-desktop-image"
//           alt="website logo"
//         />
//         <div>
//           {renderUsernameField()}
//           {renderPasswordField()}
//           {showSubmitError && <p className="error-message">Name no tmatched</p>}

//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//    </div> 
//   )
// }

// export default LoginForm
import './index.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom' // ✅ Import useNavigate

import Cookies from 'js-cookie'

const LoginForm = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const navigate = useNavigate() // ✅ useNavigate hook

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwtToken', jwtToken, { expires: 30 })
    navigate('/home', { replace: true }) // ✅ Correct navigation
  }

  const onSubmitError = () => {
    setShowSubmitError(true)
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitError(data.error_msg)
    }
  }

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const renderPasswordField = () => {
    return (
      <div className="input-box">
        <label className="label-text" htmlFor="password">
          Password
        </label><br />
        <input
          type="password"
          id="password"
          className="text-field"
          value={password}
          onChange={onChangePassword}
        />
      </div>
    )
  }

  const renderUsernameField = () => {
    return (
      <div className="input-box">
        <label className="label-text" htmlFor="username">
          Username
        </label><br /><br />
        <input
          type="text"
          id="username"
          className="text-field"
          value={username}
          onChange={onChangeUsername}
        />
      </div>
    )
  }
  return (
   <div className='auth-container' >
         <div >
      <form className="form-box" onSubmit={submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
          className="logo-img"
          alt="website logo"
        />
        <div>
          {renderUsernameField()}
          {renderPasswordField()}
          {showSubmitError && <p className="error-text">Name not matched</p>}

          <button type="submit" className="submit-btn">
            Login
          </button>
        </div>
      </form>
    </div>
   </div> 
  )
}

export default LoginForm
