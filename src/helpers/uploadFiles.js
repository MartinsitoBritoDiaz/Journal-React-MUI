
export const uploadFiles = async ( file ) => {
    const CLOUDINARY_API = 'https://api.cloudinary.com/v1_1/daxm4jdpf/upload';

    if( !file ) throw new Error('There is not file to be uploaded');

    const formData= new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch( CLOUDINARY_API, {
            method: 'POST',
            body: formData
        })

        if( !resp.ok ) throw new Error('Image could not be uploaded');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
        
    } catch (error) {
        console.log(error);
        throw new Error('There is a problem while uploading files')  
    }
}