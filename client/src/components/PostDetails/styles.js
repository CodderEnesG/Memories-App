import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '700px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    width:'100%',
    
  },
  imageSection: {
    marginLeft: '20px',
    width:'100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop:"30px",
    paddingBottom:"50px",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',

      width:"100%"
    },
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0px',
      marginBottom:"20px"
    },
  },
  commentsContainerX:{
    width:"50%",
    [theme.breakpoints.down('sm')]: {
      width:"100%"
    },
  }
}));