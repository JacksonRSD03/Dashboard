import {ThemeProvider} from "styled-components"
import '../styles/globals.css'
import theme from "../tailwind.config"
import { GlobalStyle } from '../styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
  <>
  
  <ThemeProvider theme={theme}>
     <GlobalStyle/>
     <Component {...pageProps} />
  </ThemeProvider>
  
  
  </>)
}

export default MyApp
