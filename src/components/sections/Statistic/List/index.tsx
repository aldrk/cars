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
            <TableCell>Заказы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.length > 0
            ? items.map((item) => (
              <TableRow key={item.client.id}>
                <TableCell component="th" scope="row">
                  {item.client.lastName} {item.client.firstName} {item.client.middleName}
                </TableCell>
                <TableCell>
                  {item.orders.map(order => <OrderListItem order={order} />)}
                </TableCell>
              </TableRow>
            ))
            : <TableRow><TableCell>Нет заказов</TableCell></TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
