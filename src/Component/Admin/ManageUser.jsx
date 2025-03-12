import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import AdminPanel from "../Admin/AdminPanel";
import { Toast } from "primereact/toast";

export default function ManageUser() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:4000/api/getall`);
                if (Array.isArray(response.data.formData)) {
                    setEmployees(response.data.formData);
                } else {
                    console.error("Fetched data is not an array:", response.data);
                    toast.current?.show({
                        severity: "error",
                        summary: "Error",
                        detail: "Fetched data is not an array",
                        life: 3000,
                    });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.current?.show({
                    severity: "error",
                    summary: "Error",
                    detail: "Failed to fetch users",
                    life: 3000,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        phone: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        priority: { value: null, matchMode: FilterMatchMode.EQUALS },
        source: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });

    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters["global"].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const renderHeader = () => (
        <div className="flex justify-content-between gap-3 align-items-center p-2">
            <h3>User Details</h3>
            <div>
                <InputText
                    value={globalFilterValue}
                    onChange={onGlobalFilterChange}
                    placeholder="Keyword Search"
                    style={{display:"flex"}}
                />
            </div>
        </div>
    );

    const handleDelete = async (rowData) => {
        console.log(rowData);
        
        try {
            if (rowData && rowData._id) {
                await axios.delete(`http://localhost:4000/api/delete/${rowData._id}`);
                setEmployees(employees.filter((user) => user.id !== rowData.id));
                toast.current?.show({
                    severity: "success",
                    summary: "Deleted",
                    detail: "User deleted successfully",
                    life: 3000,
                });
                location.reload()
            } else {
                console.error("User data is missing id:", rowData);
                toast.current?.show({
                    severity: "error",
                    summary: "Error",
                    detail: "User data is missing id",
                    life: 3000,
                });
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.current?.show({
                severity: "error",
                summary: "Error",
                detail: "Failed to delete user",
                life: 3000,
            });
        }
    };

    const actionBodyTemplate = (rowData) => (
        <div>
            <button
                onClick={() => handleDelete(rowData)}
                style={{
                    borderRadius: "50%",
                    border: "none",
                    height: "40px",
                    width: "40px",
                    backgroundColor: "#EDF1FF",
                    color: "#FE1011",
                    fontSize: "20px",
                    cursor: "pointer",
                }}
            >
                <i className="ri-delete-bin-5-fill"></i>
            </button>
        </div>
    );

    return (
        <AdminPanel>
            <div className="card">
                <Toast ref={toast} />
                <DataTable
                    value={employees}
                    rows={rows}
                    first={first}
                    paginator
                    dataKey="id"
                    filters={filters}
                    filterDisplay="row"
                    globalFilterFields={["name", "email", "mobile", "message"]}
                    header={renderHeader()}
                    emptyMessage="No users found."
                    onPage={onPageChange}
                    paginatorTemplate=" PrevPageLink PageLinks NextPageLink "
                    removableSort
                    loading={loading}
                    style={{ borderRadius: "10px" }}
                >
                    <Column
                        header="SR No"
                        body={(rowData, { rowIndex }) => (
                            <div>
                                {rowIndex + 1}
                            </div>
                        )}
                        style={{ width: "5%" }}
                    />
                    <Column field="name" header="NAME" sortable style={{ width: "20%",textAlign: "center"  }} />
                    <Column field="email" header="EMAIL" sortable style={{ width: "10%",textAlign: "center"  }} />
                    <Column field="mobile" header="MOBILE" sortable style={{ width: "5%" }} />
                    <Column
                        field="message"
                        header="Message"
                        style={{ width: "50%", textAlign: "center" }}
                        body={(rowData) => (
                            <div
                                style={{
                                    maxHeight: "100px",
                                    overflowY: "auto",
                                    wordWrap: "break-word",
                                    textAlign: "center",
                                }}
                            >
                                {rowData.message}
                            </div>
                        )}
                    />
                    <Column header="ACTION" body={actionBodyTemplate} style={{ width: "10%" }} />
                </DataTable>
            </div>
        </AdminPanel>
    );
}
