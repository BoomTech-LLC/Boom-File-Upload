import React, { memo, useMemo } from 'react'
import classNames from 'classnames/bind'

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
      className={classNames('boomFileUpload__preview', {
        [`${classprefix}__preview`]: classprefix
      })}
    >
      {img}
      <span
        className={classNames('boomFileUpload-file__name', {
          [`${classprefix}-file__name`]: classprefix
        })}
      >
        {name}
      </span>
      {percent && <progress value={percent || 0} max='100'></progress>}
      <span
        className={classNames('boomFileUpload-fileRemove__btn', {
          [`${classprefix}-fileRemove__btn`]: classprefix
        })}
        onClick={() => removeFile()}
      ></span>
    </div>
  )
}

export default memo(Preview)
