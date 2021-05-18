import React, {FC} from "react"
import {Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"
import {useHistory} from "react-router-dom"
import style from "../style.module.scss";
import {useSelector} from "react-redux";
import {State} from "../../../../store/store";

type Props = {
  type: string
  setType: (type: string) => void
}

const Filters: FC<Props> = ({type, setType}) => {
  const history = useHistory()

  const {role} = useSelector((state: State) => state.user)

  const isAdmin = role === "admin"

  const onClickHandler = () => {
    history.push("/cars/new")
  }

  return (
    <div className={style.filtersWrapper}>
      <FormControl>
        <InputLabel>Сортировка по типу</InputLabel>
        <Select
          value={type}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => setType(
           event.target.value as string
          )}
        >
          <MenuItem value="Купе">Купе</MenuItem>
          <MenuItem value="Кроссовер">Кроссовер</MenuItem>
          <MenuItem value="Седан">Седан</MenuItem>
        </Select>
      </FormControl>

      {isAdmin && <Button onClick={onClickHandler}>Добавить машину</Button>}
    </div>
  )
}

export default Filters
