import React from "react"
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core"
import {useSelector} from "react-redux"
import {State} from "../../../../store/store"
import OrderListItem from "../OrderItem"

const List = () => {
  const { items } = useSelector((state: State) => state.statistic)

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ФИО</TableCell>
            <TableCell align="right">Заказы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.Client.id}>
              <TableCell component="th" scope="row">
                {item.Client.lastName} {item.Client.firstName} {item.Client.middleName}
              </TableCell>
              <TableCell align="right">
                {item.Orders.map(order => <OrderListItem order={order} />)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
