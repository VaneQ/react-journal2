

export const fileUpload = async(file) => {

    if( !file ) throw new Error('File is required');

    const cloudUrl = `https://api.cloudinary.com/v1_1/dljcxo8t8/upload`;

    const formData = new FormData();

    formData.append('file',file);
    formData.append('upload_preset','react-journal');


    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        console.log(resp)
        if( !resp.ok ) throw new Error('Someting went wrong');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
        
    } catch (error) {
        throw new Error(error.message);
    }
}