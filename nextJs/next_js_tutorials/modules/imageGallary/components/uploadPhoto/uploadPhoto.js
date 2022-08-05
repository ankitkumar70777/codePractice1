import React, { useEffect, useState } from "react";
import { getBlobsInContainer,uploadFileToBlob } from "../../../../config/azureConfig";

const UploadPhoto = () => {
  const [blobImgUrls, setBlobImgUrls] = React.useState([]);
  const [currentSelectedFile,setCurrentSelectedFile] = useState(null);
  const containerName = "optionomegaimages";

  const fileUploadFn =async (e)=>{
    e.preventDefault();
    const blobsInContainer = await uploadFileToBlob(currentSelectedFile,containerName);
    setBlobImgUrls(blobsInContainer);
    setCurrentSelectedFile(null);
  }

  useEffect(() => {
    getBlobsInContainer(containerName)
      .then((output) => {
        setBlobImgUrls(output);
      })
      .catch((err) => {
        console.log({ err });
      });
  },[]);

  return (
    <>
      <h1>upload files</h1>
      <form onSubmit={fileUploadFn}>
        <label htmlFor='img'>
          select file <br />
        </label>
        <input type='file' id='img' name='img' accept='image/*' onChange={(e)=>{setCurrentSelectedFile(e.target.files[0])}}/>
        <button type='submit'>submit</button>
      </form>
      <br></br>
      <br></br>
      <div>
        {blobImgUrls.map((v,i)=>{
          return (<img height="200" width="200" src={v} key={i}/>)
        })}
      </div>
    </>
  );
};

export default UploadPhoto;
