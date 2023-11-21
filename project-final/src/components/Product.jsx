import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({product : {id, title, author, edition, price, rating, image, description, argument} })
 {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
     
        action={
          <Typography
           
           variant='h5'
           color='textSecondary'
           >
            {accounting.formatMoney (price)}
            </Typography>
        }
        title={title}
        subheader={author}
      />
      <CardMedia
        component="img"
        height="400"
        width="700"
        image={image}
        alt="Portada"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Card">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(rating)
           .fill()
           .map((_, i) => (
            <p>&#11088;</p>
           ))}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Argumento:</Typography>
          <Typography paragraph>
          </Typography>
          <Typography paragraph>
          {argument} 
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
