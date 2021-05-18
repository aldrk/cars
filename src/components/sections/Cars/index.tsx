// react-hooks/exhaustive-deps

import React, {useEffect, useState} from 'react'
import Container from '../../blocks/Container'
import Filters from './Filters'
import List from './List'
import {useDispatch} from "react-redux"
import {getCars} from "../../../store/dispatchers/cars"
import {useUpdateEffect} from 'react-use'

const Cars = () => {
  const dispatch = useDispatch()

  const [type, setType] = useState<string>("")

  const getCarsList = () => {
    dispatch(getCars(type))
  }

  useUpdateEffect(() => {
    getCarsList()
  }, [type])

  useEffect(() => {
    getCarsList()
  }, []) // eslint-disable-line

  return (
    <Container>
      <div>
        <Filters type={type} setType={setType} />
        <List/>
      </div>
    </Container>
  )
}

export default Cars
