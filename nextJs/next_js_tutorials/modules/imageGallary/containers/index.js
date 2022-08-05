import React from 'react'
import UploadPhoto from '../components/uploadPhoto/uploadPhoto'
import { BlobServiceClient,containerClient } from '@azure/storage-blob';

const ImageGallary = () => {
    const [file,setFile] = React.useState();
  return (
    <div>
    <UploadPhoto />
    </div>
  )
}

export default ImageGallary