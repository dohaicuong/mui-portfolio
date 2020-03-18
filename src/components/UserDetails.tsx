import React from 'react'
import { Link, Route, useHistory } from 'react-router-dom'
import { Tabs, Tab, Container, useTheme } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'

export type UserDetailsProps = {
  routes: UserDetailsRoute[]
  defaultPath?: string
}
export type UserDetailsRoute = {
  label: String
  icon: React.ReactElement
  path: string
  component: any
}

const UserDetails: React.FC<UserDetailsProps> = ({ routes, defaultPath }) => {
  const theme = useTheme()

  const [value, setValue] = React.useState(0)
  const handleChange = (_: any, value: number) => setValue(value)
  const handleChangeIndex = (index: number) => setValue(index)

  const { push } = useHistory()
  React.useEffect(() => {
    if (defaultPath) push(defaultPath)
  // eslint-disable-next-line
  }, [push])

  return (
    <>
      <Container maxWidth='sm'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
        >
          {routes.map(({ icon, label, path }) => (
            <Tab key={path} icon={icon} label={label} component={Link} to={path} />
          ))}
        </Tabs>
      </Container>
      <Container maxWidth='md' style={{ padding: theme.spacing(2) }}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {routes.map(({ path, component }, index) => (
            <div key={path} style={{ minHeight: 500, maxHeight: 800 }}>
              <Route exact index={index} path={path} component={component} />
            </div>
          ))}
        </SwipeableViews>
      </Container>
    </>
  )
}
export default UserDetails