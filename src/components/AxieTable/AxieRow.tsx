import { TableCell, TableRow } from '@material-ui/core'
import { Part } from 'agp-npm/dist/models/part'
import React, { ReactElement } from 'react'
import getColor from '../../utils/getColor'

interface Props {
  part: Part;
  name: string;
}

export default function GeneRow({ part, name }: Props): ReactElement {
  return (
    <TableRow>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center" style={{ color: getColor(part.d.cls) }}>
        {part.d.name}
      </TableCell>
      <TableCell align="center" style={{ color: getColor(part.r1.cls) }}>
        {part.r1.name}
      </TableCell>
      <TableCell align="center" style={{ color: getColor(part.r2.cls) }}>{part.r2.name}</TableCell>
    </TableRow >
  )
}
