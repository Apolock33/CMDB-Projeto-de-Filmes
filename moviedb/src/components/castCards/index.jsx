import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import '../../assets/css/castCards.css';

export default function CastCards({ id, img, name, character }) {

    return (
        <Card key={id} sx={{ minWidth: 250, minHeight: '21rem', borderRadius: '1rem' }}>
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt={name}
            />
            <div>
                <h3 color='#000000'>{name}</h3>
                <h5>{character}</h5>
            </div>
        </Card>
    );
}