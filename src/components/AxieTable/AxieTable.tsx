import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Axie } from '../../types/axies'
import GeneRow from './AxieRow'

interface Props {
  axie: Axie
}

export default function AxieTable({ axie }: Props): ReactElement {
  const { genes } = axie
  return (
    <TableContainer
      component={Paper}
      style={{
        maxWidth: '100%',
        width: 500,
        margin: 'auto'
      }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">Part</TableCell>
            <TableCell align="center">Dominant</TableCell>
            <TableCell align="center">Recessive 1</TableCell>
            <TableCell align="center">Recessive 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{fontSize:5}}>
          {<GeneRow part={genes.eyes} name="eyes" />}
          {<GeneRow part={genes.ears} name="ears" />}
          {<GeneRow part={genes.mouth} name="mouth" />}
          {<GeneRow part={genes.horn} name="horn" />}
          {<GeneRow part={genes.tail} name="tail" />}
          {<GeneRow part={genes.back} name="back" />}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
