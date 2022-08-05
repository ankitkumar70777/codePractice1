import {
  BlobServiceClient,
  ContainerClient,
} from "@azure/storage-blob";


const sasToken = process.env.NEXT_PUBLIC_REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.NEXT_PUBLIC_REACT_APP_STORAGERESOURCENAME;


// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return !storageAccountName || !sasToken ? false : true;
};

// get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
const blobService = new BlobServiceClient(
  `https://${storageAccountName}.blob.core.windows.net?${sasToken}`
);


const containerClientFn = (containerName)=> blobService.getContainerClient(containerName);

// return list of blobs in container to display
export const getBlobsInContainer = async (containerName) => {
  const containerClient = containerClientFn(containerName);
  const returnedBlobUrls = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    console.log("blob.name------------------",blob.name);
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }


  return returnedBlobUrls;
};


export const  createBlobInContainer  = async (containerClient,file)=>{

  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);
   // set mimetype as determined from browser with file upload control
   const options = { blobHTTPHeaders: { blobContentType: file.type,"x-ms-version": "2017-11-09"
   } };
   await blobClient.uploadData(file, options);
}


const containerExistsFn =  async (containerClient)=>{
  const containerExists = await  containerClient.exists() ? true : false;
  if(!containerExists){
    throw "container may not exists";
  }
}

export const uploadFileToBlob = async (file,containerName) => {
  if (!file) return [];

  // get Container - full public read access
  const containerClient = containerClientFn(containerName);
  
  await containerExistsFn(containerClient);

  // upload file
  await createBlobInContainer(containerClient,file);

  // get list of blobs in container
  return getBlobsInContainer(containerName);
};
