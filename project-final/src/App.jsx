import { Box, Button, Container, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import Products from './components/Products';

export default function App() {
  return (
    <Container>
      <h1>BOOK Finder</h1>
      <Navbar/> 
      <Products/>
      
      
    </Container>
  )
}
