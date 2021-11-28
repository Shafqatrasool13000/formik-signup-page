import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { Formik} from 'formik';
import * as Yup from 'yup'
import ButtonAppBar from './AppBar';
import FormValidation from './components/FormValidation'

  
function App() {
  const validate = Yup.object({
    firstName:Yup.string().max(15,'Must less than 15').required('Required'),lastName:Yup.string().max(15,'Must less than 15').required('Required'),
    email:Yup.string().email('Invalid email').required('Required'),
    password:Yup.string().min(6,'Must be 6 characters ').required('Required'),
    // confirmPassword:Yup.string().oneOf([Yup.ref('password'),null]).required('confirm password required'),
  })
  return (
    <>
    {/* <FBAuthenticate/> */}
      <ButtonAppBar />
      <Container mt={5}>
        <Formik validateOnMount initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword:''
        }}  onSubmit={(values) =>{
          alert(JSON.stringify(values, null, 2))
        } 
        } 
        validationSchema={validate}>
          {formik => <Box component='form' onSubmit={formik.handleSubmit}>
            <Typography variant='h3' align='center' fontWeight='bold'>
              Sign Up
            </Typography>
            <Grid container mt={3} spacing={3} justifyContent='center'>
              <Grid item   md={6}>
                <FormValidation label="First Name"
                  name='firstName'
                  value={formik.values.firstName}
                  type='text'
                  onblur={formik.handleBlur}
                  onchange={formik.handleChange} />
                <div>{formik.touched.firstName&&formik.errors.firstName && <span style={{ color: 'red' }}>{formik.errors.firstName}</span>}</div>
              </Grid>
              <Grid item md={6}>
                <FormValidation label="Last Name"
                  name='lastName'
                  type='text'
                  value={formik.values.lastName}
                  onchange={formik.handleChange} 
                  onblur={formik.handleBlur}
                  />
                <div>{formik.touched.lastName&&formik.errors.lastName && <span style={{ color: 'red' }}>{formik.errors.lastName}</span>}</div>
              </Grid>
              <Grid item md={6} >
                <FormValidation label="Email"
                  name='email'
                  type='email'
                  value={formik.values.email}
                  onblur={formik.handleBlur}
                  onchange={formik.handleChange}  />
                <div>{formik.touched.email&&formik.errors.email && <span style={{ color: 'red' }}>{formik.errors.email}</span>}</div>
              </Grid>
              <Grid item md={6} >
                <FormValidation
                  label="Password"
                  type="password"
                  name='password'
                  value={formik.values.password}
                  onblur={formik.handleBlur}
                  onchange={formik.handleChange}

                />
                <Box>{formik.touched.password&&formik.errors.password && <Box component='span' sx={{ color: 'red' }}>{formik.errors.password}</Box>}</Box>
              </Grid>
              {/* <Grid item md={6} >
                <FormValidation
                  label="Confirm Password"
                  type="password"
                  name='confirmPassword'
                  value={formik.values.confirmPassword}
                  onblur={formik.handleBlur}
                  onchange={formik.handleChange}

                />
                <Box>{formik.touched.password&&formik.errors.password && <Box component='span' sx={{ color: 'red' }}>{formik.errors.password}</Box>}</Box>
              </Grid> */}
              <Grid container mt={3} justifyContent='center' spacing={4}>
                <Grid item md={6} >
                  <Button disabled={!formik.isValid} variant='outlined' type='submit'>
                    Save
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Button variant="contained" onClick={()=>formik.resetForm()}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          }

        </Formik>
      </Container>
    </>
  );
}

export default App;























//Normal Validator in Formik

// const validate = (values) => {
//   let errors = {}
//   if (!values.firstName) {
//     errors.firstName = "Required"
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required"
//   }
//   if (!values.email) {
//     errors.email = "invalid email"
//   }
//   else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
//     errors.email='invalid email'
//   }
//   if (!values.lastName) {
//     errors.password = "Required"
//   }
//   if (!values.password) {
//     errors.password = "Required"
//   }else if(values.password.length<=5){
//     errors.password='min length 5'
//   }

//   // else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)){
//   //   errors.password='invalid password'
//   // }
//   return errors
// }


//Form by useFormik in formik

// <Container mt={5}>
//         <Box component='form' onSubmit={formik.handleSubmit}>
//           <Typography variant='h3' align='center' fontWeight='bold'>
//             Sign Up
//           </Typography>
//           <Grid container spacing={3} justifyContent='center'>
//             <Grid item md={6}>
//               <FormValidation label="First Name"
//                 name='firstName'
//                 value={formik.values.firstName}
//                 type='text'
//                 onchange={formik.handleChange} />
//             </Grid>
//             <Grid item md={6}>
//               <FormValidation label="Last Name"
//                 name='lastName'
//                 type='text'
//                 value={formik.values.lastName}
//                 onchange={formik.handleChange} />

//             </Grid>
//             <Grid item md={6} >
//               <FormValidation label="Email"
//                 name='email'
//                 type='email'
//                 value={formik.values.email}
//                 onchange={formik.handleChange} />
//             </Grid>
//             <Grid item md={6} >
//               <FormValidation
//                 label="Password"
//                 type="password"
//                 name='password'
//                 value={formik.values.password}
//                 onchange={formik.handleChange}
//               />
//             </Grid>
//             <Grid container mt={3} justifyContent='center' spacing={4}>
//               <Grid item md={6} >
//                 <Button variant="contained"  type='submit'>
//                   Save
//                 </Button>
//               </Grid>
//               <Grid item md={6}>
//                 <Button variant="contained" >
//                   Cancel
//                 </Button>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>