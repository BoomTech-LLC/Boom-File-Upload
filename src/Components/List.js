import React, { Fragment, memo } from 'react'
import Preview from './Preview'
const List = ({ value, onRemove, classprefix, progress }) => {
  console.log('Value in List', value)
  return (
    <>
      {value.map((file) => {
        console.log('File in List', file)
        const { id, type, percent, name } = file
        return (
          <Preview
            key={id}
            id={id}
            name={name}
            percent={percent}
            src={type.startsWith('image/') && URL.createObjectURL(file)}
            onRemove={onRemove}
            classprefix={classprefix}
          />
        )
      })}
    </>
  )
}

export default memo(List)
