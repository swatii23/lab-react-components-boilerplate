import React from 'react';
import lake from "../image/lake.JPG";

const imageData = [
    {
      id:1,
      img:lake 
    },
    {
      id:2,
      img:lake
    },
    {
      id:3,
      img:lake
    },
    {
      id:4,
      img:lake
    }
  ]

  export default function ImageData() {
    return (
      <div>
        {imageData}
      </div>
    );
  }
