/**
 * Read a file and return a data: URL representing the file's data
 * as a base64 encoded string
 * @param { File } file
 * @returns { Promise<any> }
 */
function readAsBase64(file) {
  return new Promise((resolve, reject) => {
    try {
      let reader = new FileReader();
      reader.addEventListener('load', evt => {
        resolve(evt.target.result);
      });
      reader.readAsDataURL(file);
    } catch (error) {
      reject(error);
    }
  });
}

export default readAsBase64;
