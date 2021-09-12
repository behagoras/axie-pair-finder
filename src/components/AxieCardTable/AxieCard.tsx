import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { Card } from '../../types/axies';

interface Props {
  card: Card;
}

export default function AxieCard({ card }: Props) {
  return (
    <TableRow key={card.partName}>
      <TableCell align="center">{card.partName}</TableCell>
      <TableCell align="center">{card.class}</TableCell>
      <TableCell align="center">{card.expectType}</TableCell>
    </TableRow>
  );
}
