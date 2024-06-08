import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../Layout/MainLayout';

const ContactUs = () => {
  return (
    // <Box bgcolor="#fff">
    <Box bgcolor="#1E3D44B5" id='contact-us'>
      <Box bgcolor="#1E3D44B5" pt="40px" pb="80px">
        <MainLayout sx={{ px: { xs: "16px", sm: "20px", lg: "80px" } }}>
          <Box>
            <Typography
              fontSize="48px"
              color="#fff"
              fontWeight={700}
              mb="70px"
              textAlign="center"
            >
              Contact Us
            </Typography>
            <Box display="flex" gap="118px" flexWrap="wrap">
              <Box
                width={{ xs: "100%", lg: "70%" }}
                bgcolor="#fff"
                borderRadius={{ xs: undefined, sm: "20px" }}
              >
                <Box
                  p={{ xs: "14px 24px", sm: "70px 115px" }}
                  bgcolor="#1E3D44B5"
                  borderRadius={{ xs: undefined, sm: "20px" }}
                >
                  <Typography
                    fontSize={{xs: '24px', sm: "40px"}}
                    color="#fff"
                    fontWeight={700}
                    mb={{xs: '28px', sm: "68px"}}
                  >
                    Contact Us
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    gap="28px"
                    mb="45px"
                  >
                    <Box width={{ xs: "100%", sm: "60%" }}>
                      <Typography
                        fontSize={{ xs: "16px", sm: "24px" }}
                        color="#E6E4E4"
                        fontWeight={500}
                        mb="17px"
                      >
                        Name
                      </Typography>
                      <TextField
                        fullWidth
                        placeholder="John Doe"
                        id="name"
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.55)",
                          borderRadius: "10px",
                          input: {
                            border: "none",
                          },
                        }}
                      />
                    </Box>
                    <Box width={{ xs: "100%", sm: "40%" }}>
                      <Typography
                        fontSize={{ xs: "16px", sm: "24px" }}
                        color="#E6E4E4"
                        fontWeight={500}
                        mb="17px"
                      >
                        Email Address
                      </Typography>
                      <TextField
                        fullWidth
                        id="email"
                        placeholder="example@gmail.com"
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.55)",
                          borderRadius: "10px",
                          input: {
                            border: "none",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Box mb="45px">
                    <Typography
                      fontSize={{ xs: "16px", sm: "24px" }}
                      color="#E6E4E4"
                      fontWeight={500}
                      mb="17px"
                    >
                      Comment
                    </Typography>
                    <TextField
                      fullWidth
                      id="comment"
                      multiline
                      rows={4}
                      placeholder="Hello, I would like to know..."
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.55)",
                        borderRadius: "10px",
                        input: {
                          border: "none",
                        },
                      }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#1E3D44",
                      width: { xs: "112px", sm: "192px" },
                      height: { xs: "34px", sm: "67px" },
                      borderRadius: "10px",
                      fontSize: { xs: "16px", sm: "24px" },
                      fontWeight: 500,
                      color: "#E6E4E4",
                      textTransform: "none",
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
              <Box
                height="700px"
                bgcolor="#1A2727"
                p="70px 33px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                borderRadius="10px"
                width={{ xs: "100%", lg: "20%" }}
              >
                <Typography fontSize="24px" color="#fff" fontWeight={600}>
                  Our Address Info
                </Typography>
                <Typography fontSize="24px" color="#fff" fontWeight={600}>
                  Our Contact Info
                </Typography>
              </Box>
            </Box>
          </Box>
        </MainLayout>
        {/* </Box> */}
      </Box>
    </Box>
  );
}

export default ContactUs
