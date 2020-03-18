import React from 'react'
import { makeStyles, Container, Avatar, Typography, Fab } from '@material-ui/core'

export type UserInfoProps = {
  avatar: string
  name: string
  title: string

  socials?: Social[]

  summary: string
}
export type Social = {
  icon: React.ReactElement,
  url: string
  color?: 'default' | 'inherit' | 'primary' | 'secondary'
}
const UserInfo: React.FC<UserInfoProps> = ({
  avatar, name, title,
  socials,
  summary
}) => {
  const classes = useStyles({})

  return (
    <>
      <Avatar className={classes.avatar} src={avatar} />
      <div className={classes.userInfo}>
        <Typography variant='h4' gutterBottom style={{ textAlign: 'center' }}>
          {name}
        </Typography>
        <Typography variant='subtitle2' gutterBottom style={{ textAlign: 'center' }}>
          {title}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16, marginBottom: 16 }}>
          {socials && socials.map(({ icon, url, color='default' }) => (
            <Fab
              key={url}
              component='a' href={url} target='_blank'
              color={color} style={{ marginRight: 16 }}
            >
              {icon}
            </Fab>
          ))}
        </div>
        <Container maxWidth='sm'>
          <Typography variant='body2' component='p' style={{
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.54)',
            fontWeight: 600
          }}>
            {summary}
          </Typography>
        </Container>
      </div>
    </>
  )
}
export default UserInfo

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    transform: 'translate3d(0, -50%, 0)',
    margin: '0 auto',
    boxShadow: theme.shadows[3]
  },
  userInfo: {
    marginTop: -60,
  }
}))
