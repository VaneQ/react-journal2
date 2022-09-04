import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSign, startLoginWithEmailPassword } from '../../store/auth/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'vanessatkd223@gmail.com',
    password: '123456'
  })

  const isAuthenticated = useMemo( () => status === 'checking', [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication())
    dispatch( startLoginWithEmailPassword({ email, password}))
  }

  const onGoogleSignIn = () => {
     dispatch(checkingAuthentication())
     dispatch( startGoogleSign() );
  }

  return (

    <AuthLayout title="Login" >
 
            <form 
              onSubmit={ onSubmit } 
              className="animate__animated animate__fadeIn animate__faster"
            >
              <Grid 
                container>
                  <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                      label="Email" 
                      type="email" 
                      placeholder='vanessatkd223@gmail.com'
                      fullWidth
                      name="email"
                      value={ email }
                      onChange= { onInputChange }
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt:2}}>
                    <TextField 
                      label="Password" 
                      type="password" 
                      placeholder='******'
                      fullWidth
                      name="password"
                      value={ password }
                      onChange= { onInputChange }
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

                    <Grid item xs={ 12 } sm={6}>
                      <Button 
                        variant='contained'
                        fullWidth
                        type="submit"
                        disabled={ isAuthenticated }
                        sx={{ mt:2 }} >Login</Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={6}>
                      <Button 
                        variant='contained'
                        fullWidth
                        disabled={ isAuthenticated }
                        onClick={ onGoogleSignIn }
                        sx={{ mt:2 }}>
                          <Google/>
                          <Typography sx={{ ml:1 }}>Google </Typography>
                      </Button>
                    </Grid>

                  </Grid>

                <Grid 
                  container
                  direction="row"
                  justifyContent="end"
                >
                  <Link component={ RouterLink } color="inherit" to="/auth/register" >Create new account</Link>
                </Grid>
              </Grid>
            </form>
    </AuthLayout>
    
  )
}
