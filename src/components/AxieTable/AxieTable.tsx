import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Axie } from '../../types/axies';
import getColor from '../../utils/getColor';
import twoDecimals from '../../utils/twoDigits';
import GeneRow from './AxieRow';

interface Props {
  axie: Axie
}

export default function AxieTable({ axie }: Props): ReactElement {
  const { genes, purity } = axie;
  const priceEth = Math.floor((+axie.price / 1000000000000000000) * 1000) / 1000;
  const priceUsd = Math.floor(priceEth * 3337);
  return (
    <TableContainer
      component={Paper}
      style={{
        maxWidth: '100%',
        width: 500,
        margin: 'auto',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
        color: getColor(axie.genes.cls),
      }}
      >
        <div>{axie.genes.cls}</div>
        <div>
          {twoDecimals(purity)}
          %
        </div>
        <img
          style={{ width: 100 }}
          src={`https://storage.googleapis.com/assets.axieinfinity.com/axies/${axie.id}/axie/axie-full-transparent.png`}
          alt={axie.id}
        />
        <div>{priceEth}</div>
        <div>
          $
          {priceUsd}
        </div>
        <div>{axie.id}</div>
      </div>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Part</TableCell>
            <TableCell align="center">Dominant</TableCell>
            <TableCell align="center">Recessive 1</TableCell>
            <TableCell align="center">Recessive 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ fontSize: 5 }}>
          <GeneRow part={genes.eyes} name="eyes" />
          <GeneRow part={genes.ears} name="ears" />
          <GeneRow part={genes.mouth} name="mouth" />
          <GeneRow part={genes.horn} name="horn" />
          <GeneRow part={genes.tail} name="tail" />
          <GeneRow part={genes.back} name="back" />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
