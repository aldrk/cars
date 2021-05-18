import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import React, {FC} from 'react'
import {CarItem} from "../../../store/interfaces/cars"

import style from "./style.module.scss"

type Props = {
  car: CarItem
}

const CarCard: FC<Props> = ({car}) => {
  const {type, model, engineVolume, color, code, brand, count, url} = car

  return (
    <Card className={style.root} variant="outlined">
      <CardContent>
        <CardMedia
          className={style.media}
          image={url}
          title="Car image"
        />
        <Typography className={style.title} color="textSecondary" gutterBottom>
          {brand} {model}
        </Typography>
        <Typography variant="body2" component="p">
          {type}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          Код автомобиля: {code}
        </Typography>
        <Typography variant="body2" component="p">
          Цвет: {color}
        </Typography>
        <Typography variant="body2" component="p">
          Объем двигаетля: {engineVolume}
        </Typography>

        <Typography variant="body2" component="p">
          Количество: <b>{count}</b>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CarCard
