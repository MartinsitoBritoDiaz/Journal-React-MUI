import { uploadFiles } from "../../src/helpers/uploadFiles";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'daxm4jdpf',
    api_key: '177273185155138',
    api_secret: 'FI0aJ7AULa8x0O6LHanKvjuMgAQ',
    secure: true
})

describe('Test in file upload', () => { 
    test('should upload the file to cloudinary', async () => {
        const imageUrl = "https://wallpapercave.com/wp/wp2868078.jpg";

        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'wallpaper.jpg');
        const url = await uploadFiles( file );
        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

        await cloudinary.api.delete_resources([ imageId ]);  
    })

     test('should return null', async () => {

        const file = new File([], 'wallpaper.jpg');
        const url = await uploadFiles( file );
        expect( url ).toBe(null);
 
     })
 })