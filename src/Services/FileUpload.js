import axios from 'axios'

const upload = async (file, url, headers, onUploadProgress) => {
  return axios.post(url, file, {
    onUploadProgress,
    headers
  })
}

const FileUploadService = {
  upload
}

export default FileUploadService
