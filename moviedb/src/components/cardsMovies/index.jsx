import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import '../../assets/css/cards.css'

export default function CardsMovies({ id, title, img, date, cssClass }) {

  const redirectToDetails = () => {
    window.location.href = `/movie/${id}`;
  }

  return (
    <Card className={'movie-cards bg-dark text-light'} id={id} onClick={redirectToDetails}>
      <CardMedia
        component="img"
        image={img}
        alt={title}
      />
      <CardContent className='text-center'>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>

        <Typography gutterBottom variant="p" component="div">
          {date}
        </Typography>
        <div>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}