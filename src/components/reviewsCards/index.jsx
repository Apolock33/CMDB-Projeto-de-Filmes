import { Card, CardContent } from '@mui/material';
import React from 'react';
import '../../assets/css/reviewCards.css'
import ReactShowMoreText from 'react-show-more-text';

const ReviewsCards = ({ name, review, updatedAt }) => {
    return (
        <Card>
            <div>
                <h4>{(name === null || name === undefined) ? 'Unknown' : name}</h4>
                <h6>{updatedAt}</h6>
            </div>
            <CardContent>
                <ReactShowMoreText>
                    <p>
                        {review}
                    </p>
                </ReactShowMoreText>
            </CardContent>
        </Card>
    );
}

export default ReviewsCards;