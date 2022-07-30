import logo from './logo.svg';
import './App.css';
import { Box } from 'rebass';
import { ThemeProvider, useTheme } from 'styled-components';
import {theme} from './theme'

function App() {
  return (
  <ThemeProvider theme={theme}>
  <Box backgroundColor={theme.main} height={'2000px'} color={theme.textColor}>
    <Box>ABOUT ME</Box>
    <Box>Samuel Markowitz is a driven game developer, currently working as an Associate Audio Programmer at Infinity Ward, developer of some of the most critically acclaimed entries in the Call of Duty franchise.</Box>
  </Box>
  </ThemeProvider>
  )
}

export default App;
