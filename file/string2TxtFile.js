/**
 * 字符串转化为文件并下载
 *
 * @param {*} str
 * @param {*} filename
 */
function string2TxtFile(str, filename) {
  let blobUrl = window.URL.createObjectURL(
    new Blob([str], {
      type: 'text/plain',
    })
  );
  const temp = document.createElement('a');
  temp.download = filename;
  temp.href = blobUrl;
  temp.click();
}

export default string2TxtFile;
