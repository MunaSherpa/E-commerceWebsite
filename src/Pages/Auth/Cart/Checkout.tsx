
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { APIclass } from '../../../config';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Checkout: React.FC = () => {
  const api = new APIclass();
  const [productDetails, setProductDetails] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const getCarts = async () => {
      try {
        const res = await axios.get(`${api.baseUrl}my-cart`, api.getHeader);
        setProductDetails(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCarts();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      address,
      phone_number: phoneNumber,
      total_amount: calculateTotalAmount(),
    };

    try {
      const res = await axios.post(
        `${api.baseUrl}add-order`,
        formData,
        api.getHeader
      );
      alert('Success');
      window.location.href = '/order-details';
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotalAmount = (): number => {
    const total = productDetails.reduce(
      (acc, product) => acc + product.price * product.quantity,
       0
    );
    const delivery = 100;
    const tax = (total * 13) / 100;
    return total + delivery + tax;
  };

  return (
    <Box
      className="flex justify-center items-start 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        
      }}
    >
      <Box
        className="w-full sm:w-9/12 lg:w-1/2 flex-col space-y-4"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          minWidth: '300px',
          maxWidth: '600px',
          width: '100%',
          marginRight: { xs: 0, lg: '16px' },
          marginBottom: { xs: '16px', lg: 0 },
          // background:'gray',
          background: 'white',
          border: '1px solid black',
          height: '28rem',
          margin: '0 1rem 0 8rem',
          marginTop: '40px',  
          borderRadius: '5px',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginLeft: '170px',
            marginBottom: '9px',
          }}
          className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800"
        >
          Checkout
        </Typography>
        <TextField
          type="text"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{
            maxWidth: '500px',
            marginLeft: '45px',
          
          }}
          required
        />
        <TextField
          type="text"
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
          sx={{
            maxWidth: '500px',
            marginTop: '20px',
            marginLeft: '45px',
          }}
          required
        />
        <TextField
          type="text"
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          sx={{
            maxWidth: '500px',
            marginTop: '20px',
            marginLeft: '45px',
          }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            maxWidth: '100px',
            marginTop: '30px',
            marginLeft: '230px',
          }}
        >
          Checkout
        </Button>
      </Box>

      <Box
        className="flex flex-col items-start bg-gray-50 p-6 md:p-14"
        sx={{
          minWidth: '200px',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginLeft: '150px',
            marginTop: '30px',
            
          }}
          className="text-2xl font-semibold leading-6 text-gray-800"
        >
          Order Summary
        </Typography>
        <Box className="flex mt-7 flex-col items-end w-full space-y-6">
          <Box className="flex justify-between w-full items-center">
            <Typography 
            sx={{
              marginLeft: '180px',
              marginTop: '20px',
              
            }}
            className="text-lg leading-4 text-gray-600">
            
              Total items
            </Typography>
            <Typography
            sx={{
              marginLeft: '350px',
              // marginBottom:'50px',
              marginTop: '-25px',
            }}
            className="text-lg font-semibold leading-4 text-gray-600">
              {productDetails.length}
            </Typography>
          </Box>
          <Box className="flex justify-between w-full items-center">
            <Typography
            sx={{
              marginLeft: '180px',
              // marginBottom:'50px',
              marginTop: '20px',
            }}
            className="text-xl font-semibold leading-4 text-gray-800">
              Estimated Total
            </Typography>
            <Typography 
            sx={{
              marginLeft: '350px',
              // marginBottom:'100px',
              marginTop: '-25px',
            }}
            className="text-lg font-semibold leading-4 text-gray-800">
              {calculateTotalAmount()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;









