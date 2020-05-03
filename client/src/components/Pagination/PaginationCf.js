import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function PaginationCf(props) {
    const [currentPage, setCurrentPage] = useState(1);

    const { dataLength, tableSize } = props;
    const pagiLengh = Math.ceil(dataLength / tableSize);

    const showPagination = () => {
        let result = [];
        for (let i = 0; i < pagiLengh; i++) {
            result = [
                ...result,
                <PaginationItem key={i} active={currentPage === i + 1}>
                    <PaginationLink onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>,
            ];
        }
        return result;
    };

    return (
        <Pagination
            aria-label="Page navigation example"
            style={{ display: "flex", justifyContent: "center" }}
        >
            <PaginationItem disabled={currentPage === 1}>
                <PaginationLink
                    first
                    href="#"
                    onClick={() => setCurrentPage(1)}
                />
            </PaginationItem>
            <PaginationItem disabled={currentPage === 1}>
                <PaginationLink
                    previous
                    href="#"
                    onClick={() => setCurrentPage(currentPage - 1)}
                />
            </PaginationItem>
            {showPagination()}
            <PaginationItem disabled={currentPage === pagiLengh}>
                <PaginationLink
                    next
                    href="#"
                    onClick={() => setCurrentPage(currentPage + 1)}
                />
            </PaginationItem>
            <PaginationItem disabled={currentPage === pagiLengh}>
                <PaginationLink
                    last
                    href="#"
                    onClick={() => setCurrentPage(pagiLengh)}
                />
            </PaginationItem>
        </Pagination>
    );
}

export default PaginationCf;
