import React, {useEffect, useState} from "react"
import List from "./List"
import {useDispatch} from "react-redux"
import {getStatistic} from "../../../store/dispatchers/statistic"
import Container from "../../blocks/Container"
import {DateRange} from "react-date-range";
import './style.css'

const Statistic = () => {
  const dispatch = useDispatch()

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ])

  useEffect(() => {
    dispatch(getStatistic())
  }, []) // eslint-disable-line

  useEffect(() => {
    if (date[0].endDate !== date[0].startDate) {
      dispatch(getStatistic(date[0].startDate, date[0].endDate))
    }
  }, [date[0].endDate]) // eslint-disable-line

  return (
    <Container>
      <DateRange editableDateInputs={false}
        // @ts-ignore
                 onChange={item => setDate([item?.selection])}
                 moveRangeOnFirstSelection={false}
        // @ts-ignore
                 ranges={date}  />
      <List />
    </Container>
  )
}

export default Statistic
