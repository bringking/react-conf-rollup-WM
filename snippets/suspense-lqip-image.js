import React, { Suspense } from 'react';
import { unstable_createResource as createResource } from 'react-cache';

const ImgResource = createResource(src => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = resolve;
    image.onerror = reject;
  });
});

const Img = props => {
  ImgResource.read(props.src);
  return <img {...props} />;
};

const LazyImg = props =>
  <Suspense
    maxDuration={props.maxDuration}
    fallback={
        <img
          {...props}
          src={`${props.src}?blur=500&q=1`}
        />
      }
    >
    <Img {...props} />
  </Suspense>