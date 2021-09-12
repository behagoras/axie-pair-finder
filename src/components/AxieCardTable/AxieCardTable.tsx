import {
  TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Card } from '../../types/axies';
import AxieCard from './AxieCard';

interface Props {
  cards: Card[]
}

export default function AxieCardTable({ cards }: Props): ReactElement {
  return (
    <TableContainer
      component={Paper}
      style={{
        maxWidth: '100%',
        width: 500,
        margin: 'auto',
      }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">type</TableCell>
            <TableCell align="center">expectType</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(cards).map(([, value]) => (<AxieCard card={value} />))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
