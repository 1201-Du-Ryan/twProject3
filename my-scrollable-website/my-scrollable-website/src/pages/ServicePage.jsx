// src/pages/ServicePage.jsx
import React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Divider, Grid, Typography,  } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/ServicePage.css'; 
import Images from '../components/image_carousel'
const ServicePage = () => {
  
  return (
    <Container className='service-page'>
        <div className='service-section'>
          <Images/>
              <section>
                <h2>Service Title</h2>
                <h1>$50.00</h1>
                <Button className='buy-button' variant='contained' startIcon={<AddShoppingCartIcon/>}>Buy</Button>
              </section>
        </div>
        <Divider/>
        <Box>
          <h4>About Service</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit aperiam possimus repellat, aut animi et veniam vero nihil. 
            Ipsum, illo eos iste minima eligendi dicta fugit libero. Aperiam, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sed sint illum ea dolor quae. Excepturi non eligendi, fugiat animi iusto aliquid soluta est nulla quasi iste qui consectetur esse eveniet.<br/> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, blanditiis nesciunt, fugiat deserunt voluptates, molestiae cum vero quis itaque quasi o
            dit quod eius unde. Praesentium, laudantium! Rerum qui consequuntur vero.</p>
        </Box>
    </Container>

  );
};

export default ServicePage;
