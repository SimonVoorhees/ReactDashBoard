import React from "react";
import './styles.scss';
import TableRow from "./TableRow";

const Products = () => (
    <div className="Products">
        <h3 className="prodTitle">Top Products</h3>
        <table className="prodTable">
            <thead>
                <tr className="headers">
                    <th>User</th>
                    <th>Product</th>
                    <th>Sale</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <TableRow 
                    name="Jacob"
                    product="Photoshop"
                    sale="28.76% ↓"
                    saleColor="red"
                    status="Blocked"
                    statusColor="statusRed"
                />
                <TableRow
                    name="Messsy"
                    product="Flash"
                    sale="21.06% ↓"
                    saleColor="red"
                    status="In Progress"
                    statusColor="statusOrange"
                />
                <TableRow
                    name="John"
                    product="Premiere"
                    sale="35.00% ↓"
                    saleColor="red"
                    status="Fixed"
                    statusColor="statusBlue"
                />
                <TableRow
                    name="Peter"
                    product="After Effects"
                    sale="82.00% ↑"
                    saleColor="green"
                    status="Complete"
                    statusColor="statusGreen"
                />
                <TableRow
                    name="Dave"
                    product="53275535"
                    sale="98.05% ↑"
                    saleColor="green"
                    status="In Progress"
                    statusColor="statusOrange"
                />
                <TableRow
                    name="Messsy"
                    product="Flash"
                    sale="21.06% ↓"
                    saleColor="red"
                    status="Fixed"
                    statusColor="statusBlue"
                />
            </tbody>
        </table>
    </div>
);


export default Products;