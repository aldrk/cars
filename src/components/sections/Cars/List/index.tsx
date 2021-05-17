import React from 'react'
import {useSelector} from "react-redux"
import {State} from "../../../../store/store"
import CarCard from "../../CarCard"

import style from "../style.module.scss"

const List = () => {
  const {items} = useSelector((state: State) => state.cars)

  return (
    <div className={style.carsWrapper}>
      {items.map(item => <CarCard key={item.id} car={item}/>)}
    </div>
  )
}

export default List
