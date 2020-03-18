import React from 'react'
import { makeStyles } from '@material-ui/core'

const projects = [
  { title: 'Miku', src: 'https://www.bleedingcool.com/wp-content/uploads/2020/01/miku-tap-1200x900.jpg', thumb: 'https://www.bleedingcool.com/wp-content/uploads/2020/01/miku-tap-1200x900.jpg' },
  { title: 'Miku 2', src: 'https://d3fa68hw0m2vcc.cloudfront.net/cf5/211121764.jpeg', thumb: 'https://d3fa68hw0m2vcc.cloudfront.net/cf5/211121764.jpeg' },
  { title: 'Miku 3', src: 'https://goodsmileshop.com/medias/sys_master/images/images/h80/hf0/9141198520350.jpg', thumb: 'https://goodsmileshop.com/medias/sys_master/images/images/h80/hf0/9141198520350.jpg' },
  { title: 'Miku 4', src: 'https://cdn.shopify.com/s/files/1/0318/2649/products/51P7NmGaiIL_2954a7d1-0ea6-4af9-8e3e-7df92f6b934b.jpg?v=1571441972', thumb: 'https://cdn.shopify.com/s/files/1/0318/2649/products/51P7NmGaiIL_2954a7d1-0ea6-4af9-8e3e-7df92f6b934b.jpg?v=1571441972' },
  { title: 'Miku 5', src: 'https://bbts1.azureedge.net/images/p/full/2019/12/25b3970f-1525-4bdf-9fb0-26979a393eb6.jpg', thumb: 'https://bbts1.azureedge.net/images/p/full/2019/12/25b3970f-1525-4bdf-9fb0-26979a393eb6.jpg' },
  { title: 'Miku 6', src: 'https://images.goodsmile.info/cgm/images/product/20190212/8067/58179/large/8549567923d8fe48a431b21be7f16202.jpg', thumb: 'https://images.goodsmile.info/cgm/images/product/20190212/8067/58179/large/8549567923d8fe48a431b21be7f16202.jpg' },
]

const CodeSection = () => {
  const classes = useStyles({})

  return (
    <div className={classes.masonry}>
      {projects.map(({ title, src, thumb }) => (
        <a
          key={src} className={classes.brick}
          href={src} target='_blank' title={title}
          rel='noopener noreferrer'
        >
          <img className={classes.brickImg} alt={title} src={thumb} />
        </a>
      ))}
    </div>
  )
}
export default CodeSection

const useStyles = makeStyles({
  masonry: {
    display: 'flex',
    flexFlow: 'column wrap',
    maxHeight: 800,
    marginLeft: -8,
    width: '100%',
    overflow: 'hidden',
    padding: 16,
    counterReset: 'brick'
  },
  brick: {
    width: '33.33333%',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 8px 8px 0',
    borderRadius: 5,

    '&:hover:after': {
      opacity: 1,
      fontSize: '3rem',

    },

    '&:after': {
      position: 'absolute',
      color: 'white',
      top: '50%',
      left: '50%',
      zIndex: 5000,
      transform: 'translate(-50%, -50%)',
      counterIncrement: 'brick',
      content: 'counter(brick)',
      transition: 'font-size .25s, opacity .25s ease-in-out',
      fontWeight: 700,
      opacity: '.5',
      fontSize: '2rem',
    }
  },
  brickImg: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    filter: 'brightness(50%)',
    verticalAlign: 'middle'
  }
})