import {Card, CardContent, Typography} from '@material-ui/core'
import React, {FC} from 'react'
import style from "./style.module.scss"
import {OrderItem} from "../../../store/interfaces/orders"
import dayjs from "dayjs"

type Props = {
  order: OrderItem
}

const OrderCard: FC<Props> = ({order}) => {
  const { systemNumber, carModel, dateTime } = order

  return (
    <Card className={style.root} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Модель: {carModel}
        </Typography>
        <Typography gutterBottom>
          Номер: <span className={style.serialNumber}>{systemNumber}</span>
        </Typography>
        <Typography variant="body2" component="p">
           Время покупки: {dayjs(dateTime).format("DD.MM.YYYY")}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default OrderCard
