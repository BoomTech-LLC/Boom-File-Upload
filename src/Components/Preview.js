import React, { memo, useMemo } from 'react'

const Preview = ({ id, name, percent, src, classprefix, onRemove }) => {
  const removeFile = () => {
    onRemove(id)
  }
  const getimage = () => {
    return src && <img src={src} />
  }
  const img = useMemo(() => getimage(), [id])

  return (
    <div
      className={`boomFileUpload__preview${
        classprefix ? ` ${classprefix}__preview` : ''
      }`}
    >
      {img}
      <span
        className={`boomFileUpload-file__name${
          classprefix ? ` ${classprefix}-file__name` : ''
        }`}
      >
        {name}
      </span>
      {percent && <progress value={percent || 0} max='100'></progress>}
      <span
        className={`boomFileUpload-fileRemove__btn${
          classprefix ? ` ${classprefix}-fileRemove__btn` : ''
        }`}
        onClick={() => removeFile()}
      ></span>
    </div>
  )
}

export default memo(Preview)
