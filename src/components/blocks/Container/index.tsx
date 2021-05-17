import React, {FC} from 'react'

import style from "./style.module.scss"

const Container: FC = ({children}) => {
  return (
    <div className={style.containerWrapper}>
      {children}
    </div>
  )
}

export default Container
