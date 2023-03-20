// import React from "react";
// import TablePagination from '@material-ui/core/TablePagination';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';


// const TableReUse = ({ 
//     numSelected, classNameEnchansed,classNameTable,aria_labelledby, order, 
//     orderBy, onSelectAllClick, onRequestSort,
//     rowCount, data,page, rowsPerPage, hover, onClick,
//     role, aria_checked, tabIndex, key, selected, padding, checked,
//     component, scope, paddingSecondCell, emptyRows, colSpan


// }) => {
//     return (

//         <>
//             <EnhancedTableToolbar numSelected={numSelected} /><div className={classNameEnchansed}>
//                 <Table className={classNameTable} aria-labelledby={aria_labelledby}>
//                     <EnhancedTableHead
//                         numSelected={numSelected}
//                         order={order}
//                         orderBy={orderBy}
//                         onSelectAllClick={onSelectAllClick}
//                         onRequestSort={onRequestSort}
//                         rowCount={rowCount} />
//                     {true ?
//                         (<TableBody>
//                             {{data}
//                                 .sort(getSorting({order}, {orderBy}))
//                                 .slice({page} * {rowsPerPage}, {page} * {rowsPerPage} + {rowsPerPage})
//                                 .map(n => {
//                                     const isSelected = this.isSelected(n.id);
//                                     return (
//                                         <TableRow
//                                             hover={hover}
//                                             onClick={onClick}
//                                             role={role}
//                                             aria-checked={aria_checked}
//                                             tabIndex={tabIndex}
//                                             key={key}
//                                             selected={selected}
//                                         >
//                                             <TableCell padding={padding}>
//                                                 <Checkbox checked={checked} />
//                                             </TableCell>
//                                             <TableCell component={component} scope={scope} padding={paddingSecondCell}>
//                                                 {n.StudentName}
//                                             </TableCell>
//                                             <TableCell component={component}>{n.Class}</TableCell>
//                                             <TableCell component={component}>{n.Marks}</TableCell>
//                                             <TableCell component={component}>{n.Medium}</TableCell>
//                                             <TableCell component={component}>{n.Status}</TableCell>
//                                             <TableCell component={component}>{n.date}</TableCell>
//                                         </TableRow>
//                                     );
//                                 })}
//                             {{emptyRows} > 0 && (
//                                 <TableRow style={{ height: 1 * {emptyRows} }}>
//                                     <TableCell colSpan={colSpan} />
//                                 </TableRow>
//                             )}
//                         </TableBody>
//                         ) :
//                         <TableBody>
//                             <TableRow>
//                                 <TableCell colSpan={colSpan}>
//                                     All clear! any info is coming</TableCell>
//                             </TableRow>
//                         </TableBody>}
//                 </Table>

//             </div></>

//     );
// }
// export default TableReUse;


