import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";
import PaginationCf from "components/Pagination/PaginationCf";

class Tables extends React.Component {
    state = {
        dataTable: [
            {
                id: 1,
                name: "Doris Greene",
                country: "Malawi",
                city: "Feldkirchen in Kärnten	",
                salary: "$63,542",
            },
            {
                id: 2,
                name: "name",
                country: "country",
                city: "city",
                salary: "salary",
            },
            {
                id: 3,
                name: "name",
                country: "country",
                city: "city",
                salary: "salary",
            },
        ],
    };
    showTableData = () => {
        let { dataTable } = this.state;
        let keyOfTable = Object.keys(dataTable[0]);

        let thead = (
            <thead className="text-primary">
                <tr>
                    {keyOfTable.map(
                        (key, index) =>
                            key !== "id" && (
                                <th
                                    className={
                                        keyOfTable.length - 1 === index
                                            ? "text-center"
                                            : ""
                                    }
                                    key={index}
                                >
                                    {key}
                                </th>
                            )
                    )}
                </tr>
            </thead>
        );

        let tbody = (
            <tbody>
                {dataTable.map((value, index) => (
                    <tr key={index} style={{ cursor: "pointer" }}>
                        {keyOfTable.map(
                            (key, i) =>
                                key !== "id" && (
                                    <td
                                        className={
                                            keyOfTable.length - 1 === i
                                                ? "text-center"
                                                : ""
                                        }
                                        key={i}
                                    >
                                        {value[key]}
                                    </td>
                                )
                        )}
                    </tr>
                ))}
            </tbody>
        );
        return (
            <>
                {thead}
                {tbody}
            </>
        );
    };

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Simple Table</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table
                                        className="tablesorter"
                                        responsive
                                        hover
                                    >
                                        {this.showTableData()}
                                    </Table>
                                    <PaginationCf
                                        dataLength={32}
                                        tableSize={10}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Card className="card-plain">
                                <CardHeader>
                                    <CardTitle tag="h4">
                                        Table on Plain Background
                                    </CardTitle>
                                    <p className="category">
                                        Here is a subtitle for this table
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    <Table
                                        className="tablesorter"
                                        responsive
                                        hover
                                    >
                                        {this.showTableData()}
                                    </Table>
                                    <PaginationCf
                                        dataLength={32}
                                        tableSize={10}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Card className="card-plain">
                                <CardHeader>
                                    <CardTitle tag="h4">
                                        Table on Plain Background
                                    </CardTitle>
                                    <p className="category">
                                        Here is a subtitle for this table
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    <Table
                                        className="tablesorter"
                                        responsive
                                        hover
                                    >
                                        {this.showTableData()}
                                    </Table>
                                    <PaginationCf
                                        dataLength={32}
                                        tableSize={10}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Tables;
