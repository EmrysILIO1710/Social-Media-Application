import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <div style={{ backgroundColor: '#cfe8fc', width: '45vw', height: '100vh', margin: "0 auto", padding: "20px 0" }} >
            <h1 className='mt-16 font-bold'>Mutuals</h1>
        </div>
      </Container>
    </React.Fragment>
  );
}
