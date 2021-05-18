import React, {useEffect} from "react"
import List from "./List"
import {useDispatch} from "react-redux"
import {getStatistic} from "../../../store/dispatchers/statistic"
import Container from "../../blocks/Container"

const Statistic = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStatistic())
  }, [])

  return (
    <Container>
      <List />
    </Container>
  )
}

export default Statistic
