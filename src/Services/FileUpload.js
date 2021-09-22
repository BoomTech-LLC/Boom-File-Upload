import axios from 'axios'

const upload = async (
  { file, url, headers: customHeaders, dropbox = {} },
  onUploadProgress
) => {
  const { name } = file
  const { headers: dropBoxHeaders, dropboxAPIArg } = dropbox
  const { path } = dropboxAPIArg || {}
  const headers = {
    ...dropBoxHeaders,
    'Dropbox-API-Arg': JSON.stringify({
      ...dropboxAPIArg,
      path: `${path}/${name}`
    })
  }
  return axios.post(url, file, {
    onUploadProgress,
    headers: customHeaders || headers
  })
}

const FileUploadService = {
  upload
}

export default FileUploadService
