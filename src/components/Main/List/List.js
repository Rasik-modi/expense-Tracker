import React from 'react';
import {
  List as MUList,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Slide,
  ListItemText,
} from '@material-ui/core';
import {Delete, MoneyOff} from '@material-ui/icons';
import useStyle from './list.style';
const List = () => {
  const classes = useStyle();
  const transactions = [
    {id: 1, type: 'Income', category: 'Salary', amount: 50, date: '9 march'},
    {id: 2, type: 'Expense', category: 'Salary', amount: 50, date: '9 march'},
    {id: 3, type: 'Income', category: 'Salary', amount: 50, date: '9 march'},
    {id: 4, type: 'Income', category: 'Salary', amount: 50, date: '9 march'},
    {id: 4, type: 'Expense', category: 'Salary', amount: 50, date: '9 march'},
  ];
  return (
    <MUList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type == 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount}-${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUList>
  );
};
export default List;
