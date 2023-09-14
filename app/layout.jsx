// import LoginForm from './components/login-form/LoginForm'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './pages/login/Login'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard BPD',
  description: 'Dashboard BPD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {children} */}
        {/* <LoginForm /> */}
        <Login />
      </body>
    </html>
  )
}
