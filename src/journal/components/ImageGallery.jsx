import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useMediaQuery, useTheme } from '@material-ui/core';

export const ImageGallery = ({ images }) => {
  
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={isMd ? 4 : 1} rowHeight={'auto'}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={'Image about this note'}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
