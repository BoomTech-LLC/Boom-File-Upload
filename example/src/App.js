import React from 'react'
import { FileUpload } from 'boom-file-upload'

const App = () => {
  const getFiles = (files) => {
    console.log(files)
  }
  const handleRemove = (id) => {
    console.log(id)
  }
  const getErrors = (error) => {
    console.log(error)
  }
  const getResult = (result) => {
    console.log(result)
  }
  return (
    <FileUpload
      isMultiple={true}
      onRemove={handleRemove}
      getFiles={getFiles}
      getErrors={getErrors}
      getResult={getResult}
      classprefix='tiko-'
      inputContent={'ola'}
      autoUpload={true}
      url={'https://httpbin.org/post'}
      headers={{ 'Content-type': 'application/json' }}
    />
  )
}

export default App
