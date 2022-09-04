import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserPassword } from '../../store/auth/thunks'


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const formData = {
    email: 'vanessatkd223@gmail.com',
    password: '123456',
    password2: '123456',
    displayName: 'Vanessa Quero'
  }

  const formValidations = {
    email: [ (value) => value.includes('@') , 'Email must be valid'],
    password: [ (value) => value.length >= 6, 'Password must be at least 6 characters long'],
    displayName: [ (value) => value.length > 0 , 'Name is required'],
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmited(true)

    if( !isFormValid ) return;

    dispatch(startCreatingUserPassword(formState))

  }

  const { formState, displayName, email, password, password2, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid  } = useForm( formData, formValidations)

  
  return (
    <AuthLayout title="Register" >
 
            <form 
                onSubmit={ onSubmit } 
                className="animate__animated animate__fadeIn animate__faster"
            >
              <h1>FormValid {isFormValid ? 'Valido' : 'Incorrecto'} </h1>
              <Grid 
                container>

                  <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                      label="Fullname" 
                      type="text" 
                      placeholder='John Doe'
                      fullWidth
                      name="displayName"
                      value={ displayName }
                      onChange={ onInputChange }
                      error={ !!displayNameValid && formSubmited }
                      helperText={ displayNameValid }
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                      label="Email" 
                      type="email" 
                      placeholder='vanessatkd223@gmail.com'
                      fullWidth
                      name="email"
                      value={email}
                      onChange={ onInputChange }
                      error = { !!emailValid && formSubmited }
                      helperText = { emailValid }
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                      label="Password" 
                      type="password" 
                      placeholder='******'
                      fullWidth
                      name="password"
                      value={password}
                      onChange={ onInputChange }
                      error = { !!passwordValid && formSubmited }
                      helperText = { passwordValid }
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                      label="Confirm password" 
                      type="password" 
                      placeholder='******'
                      fullWidth
                      name="password2"
                      value={password2}
                      onChange={ onInputChange }
                      error = { !!passwordValid && formSubmited }
                      helperText = { passwordValid }
                    />
                  </Grid>

                  <Grid 
                    container
                    spacing={ 2 }
                    sx={{ mb:2, mt:2 }}
                  >
                    <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
                      <Alert
                        severity='error'
                      >
                        { errorMessage }
                      </Alert>
                    </Grid>

                    <Grid item xs={ 12 }>
                      <Button 
                        disabled= { isCheckingAuthentication }
                        variant='contained'
                        fullWidth
                        type="submit"
                        sx={{ mt:2 }} >Register</Button>
                    </Grid>
                  </Grid>

                <Grid 
                  container
                  direction="row"
                  justifyContent="end"
                >
                  <Typography sx={{ mr:1 }} >Already have an account?</Typography>
                  <Link component={ RouterLink } color="inherit" to="/auth/login" >Sign in</Link>
                </Grid>
              </Grid>
            </form>
    </AuthLayout>
  )
}
