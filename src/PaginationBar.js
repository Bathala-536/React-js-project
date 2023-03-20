import React from "react";
import TablePagination from '@material-ui/core/TablePagination';


const Pagination = ({ component, count,page, rowsPerPage, backIconButtonProps, nextIconButtonProps, onChangePage, onChangeRowsPerPage }) => {
    return (

        <TablePagination
            component={component}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={backIconButtonProps}
            nextIconButtonProps={nextIconButtonProps}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
        />

    );
}
export default Pagination;