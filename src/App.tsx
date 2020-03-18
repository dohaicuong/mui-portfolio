import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Grid, CssBaseline, makeStyles, Container, Paper } from '@material-ui/core'

import UserInfo from 'components/UserInfo'
import UserDetails from 'components/UserDetails'
import CodeSection from 'components/CodeSection'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import CodeIcon from '@material-ui/icons/Code'
import PeopleIcon from '@material-ui/icons/People'
import CameraIcon from '@material-ui/icons/Camera'

export default () => {
  const classes = useStyles({})

  return (
    <Router>
      <CssBaseline />
      <Grid container className='App' direction='column'>
        <Grid item className={classes.header}/>
        <Grid item xs>
          <Container maxWidth='xl'>
            <Paper className={classes.paper} elevation={3}>
              <Container maxWidth='md'>
                <UserInfo
                  avatar='https://avatarfiles.alphacoders.com/729/thumb-72999.png'
                  name='Eric Do'
                  title='Full Stack Developer'

                  socials={[
                    { color: 'primary', icon: <GitHubIcon />, url: 'https://github.com/dohaicuong' },
                    { color: 'secondary', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/eric-cuong-do' },
                    { icon: <PictureAsPdfIcon />, url: 'https://drive.google.com/open?id=1qg1mJSdP4rCjhuH6c4H5Ahlhxr_jnc0_uOzJ8n6tESQ' },
                  ]}

                  summary='Full stack developer with a passion for innovation. Equipped with a diverse development skill set, proficient in the use of various platforms, languages, and system architectures. Comfortably and effectively able to self-manage during independent projects or collaborate as part of a productive team.'
                />
                <div style={{ marginBottom: 64 }} />
                <UserDetails
                  routes={[
                    { label: 'Code', icon: <CodeIcon />, path: '/code', component: CodeSection },
                    { label: 'Connection', icon: <PeopleIcon />, path: '/people', component: Connection },
                    { label: 'Media', icon: <CameraIcon />, path: '/media', component: Media },
                  ]}
                  defaultPath='/code'
                />
              </Container>
            </Paper>
          </Container>
        </Grid>
        <Grid item>
          <Container maxWidth='xl' style={{ padding: 4 }}>
            © {new Date().getFullYear()} Eric Do. Hosted on GitHub Pages.
          </Container>
        </Grid>
      </Grid>
    </Router>
  )
}

const Connection = () => <>Connection</>
const Media = () => <>Media</>

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    height: 380,
    backgroundPosition: 'top center',
    backgroundImage: 'url(https://demos.creative-tim.com/nextjs-material-kit-pro/_next/static/images/city-58a713c73886bac25ac6aedcbb13de5a.jpg)',
    transform: 'translate3d(0px, 0px, 0px)',

    '&:before': {
      top: 0, left: 0,
      width: '100%', height: '100%',
      content: '""',
      display: 'block',
      zIndex: 1,
      position: 'absolute',
      background: 'rgba(0, 0, 0, 0.5)',
    },
    '&:after': {
      top: 0, left: 0,
      width: '100%', height: '100%',
      content: '""',
      display: 'block',
      zIndex: 1,
      position: 'absolute',
    }
  },
  paper: {
    position: 'relative',
    margin: '-60px 30px 0px',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    transform: 'translate3d(0, -50%, 0)',
    margin: '0 auto',
    boxShadow: theme.shadows[3]
  },
  userInfo: {
    marginTop: -60,
    // display: 'flex',
    // justifyContent: 'center'
  }
}))
