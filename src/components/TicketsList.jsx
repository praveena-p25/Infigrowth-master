import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

import { Table, Input, Row, Col, Space, Tag } from "antd";
import { Select } from "antd";
import { DatePicker } from "antd";

import Barchart from "../components/barchart";
import Filter from "./assets/funnel-fill.svg";
import "antd/dist/antd.css";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

// filter by dropdown
const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

//antd calendar
function onChange1(date, dateString) {
  console.log(date, dateString);
}

function TicketsList() {
  const [teamlist, setteamList] = useState([]);
  const [selectionType, setSelectionType] = useState("checkbox");
  const [teamcol, setteamcol] = useState([]);
  const [searchdata, setsearch] = useState([]);
  const [showApplyFilter, setShowApplyFilter] = useState(false);
  function addticket() {
    var a = document.getElementById("newticket").value;
    var data = JSON.parse(JSON.stringify(teamlist));
    var i = teamlist.length;
    data.push({
      key: i,
      id: (
        <Link
          to={{
            pathname: "/Tickets",
            search: `?id=${i}`,
            state: { detail: "1" },
          }}
        >
          {" "}
          {i}{" "}
        </Link>
      ),
      type: "Alert",
      subject: a,
      priority: "High",
      status: <Tag color="#f50">Over Due</Tag>,
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Manav",
      project: "Myntra:shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    setteamList(data);
    document.getElementById("newticket").value = "";
  }
  useEffect(() => {
    const data = [];
    var filtercity = [],
      filterstatus = [];
    data.push({
      key: 0,
      id: (
        <Link
          to={{
            pathname: "/Tickets",
            search: `?id=0`,
            state: { detail: "1" },
          }}
        >
          {" "}
          0{" "}
        </Link>
      ),
      type: "Alert",
      subject: "Myntra show page down",
      priority: "High",
      status: <Tag color="#f50">Over Due</Tag>,
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Manav",
      project: "Myntra:shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    data.push({
      key: 0,
      id: (
        <Link
          to={{
            pathname: "/Tickets",
            search: `?id=0`,
            state: { detail: "1" },
          }}
        >
          {" "}
          0{" "}
        </Link>
      ),
      type: "Alert",
      subject: "Myntra show page down",
      priority: "High",
      status: <Tag color="#2db7f5">In Progress</Tag>,
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Manav",
      project: "Myntra:shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    filtercity.push({
      text: "Chennai",
      value: "Chennai",
    });
    filterstatus.push({
      text: "Active",
      value: "Active",
    });
    data.push({
      key: 0,
      id: (
        <Link
          to={{
            pathname: "/Tickets",
            search: `?id=0`,
            state: { detail: "1" },
          }}
        >
          {" "}
          0{" "}
        </Link>
      ),
      type: "Alert",
      subject: "Myntra show page down",
      priority: "High",
      status: <Tag color="#87d068">Resolved</Tag>,
      raisedby: "BOT",
      raisedon: "03/05/2020",
      duedate: "03/05/2021",
      assignedto: "Manav",
      project: "Myntra:shoes",
      module: "DA/PA Checker",
      lastupdate: "RAJ",
      view: <a href="view-client-details">View</a>,
    });
    filtercity.push({
      text: "Chennai",
      value: "Chennai",
    });
    filterstatus.push({
      text: "Active",
      value: "Active",
    });
    // for (let i = 1; i < 100; i++) {
    //   data.push({
    //     key: i,

    //     id: (
    //       <Link
    //         to={{
    //           pathname: "/Tickets",
    //           search: `?id=${i}`,
    //           state: { detail: "1" },
    //         }}
    //       >
    //         {" "}
    //         {i}{" "}
    //       </Link>
    //     ),
    //     type: "Competitor Alert",
    //     subject: "Myntra show page down",
    //     priority: "High",
    //     status: <Tag color="#87d068">Completed</Tag>,
    //     raisedby: "BOT",
    //     raisedon: "03/05/2020",
    //     duedate: "03/05/2021",
    //     assignedto: "Manav",
    //     project: "Myntra:shoes",
    //     module: "",
    //     lastupdate: "RAJ",
    //     view: <a href="view-client-details">View</a>,
    //   });
    //   filtercity.push({
    //     text: "Bangalore",
    //     value: "Bangalore",
    //   });
    //   filterstatus.push({
    //     text: `Completed${i}`,
    //     value: `Completed${i}`,
    //   });
    // }

    //// [...new Map(array.map((x) => [x[key], x])).values()];
    filtercity = [...new Set(filtercity.map(JSON.stringify))].map(JSON.parse);
    filterstatus = [...new Set(filterstatus.map(JSON.stringify))].map(
      JSON.parse
    );
    setsearch(data);
    setteamList(data);
    const columns = [
      {
        title: "Ticket #",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "Subject",
        dataIndex: "subject",
        key: "subject",
      },
      {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "Raised By",
        dataIndex: "raisedby",
        key: "raisedby",
      },
      {
        title: "Raised On",
        dataIndex: "raisedon",
        key: "raisedon",
      },
      {
        title: "Due Date",
        dataIndex: "duedate",
        key: "duedate",
      },
      {
        title: "Assigned To",
        dataIndex: "assignedto",
        key: "assignedto",
      },
      {
        title: "Project",
        dataIndex: "project",
        key: "project",
      },
      {
        title: "Module",
        dataIndex: "module",
        key: "module",
      },
      {
        title: "Last Update",
        dataIndex: "lastupdate",
        key: "lastupdate",
      },
    ];
    setteamcol(columns);
  }, []);
  const [sidenav, setsidenav] = useState(false);
  const history = useHistory();
  const addticketnew = () => {
    history.push("/Tickets");
  };
  return (
    <>
      <section class="outer-wrapper client-list">
        <div class="top-nav-bar">
          <div class="logo">
            <a href="">
              <img src="images/infidigit-logo.png" />
            </a>{" "}
            <span>Growth</span>
          </div>
          <div class="nav-bar-center">&nbsp;</div>
          <div class="nav-bar-right">
            <ul class="list-unstyled nav-right-menu">
              <li>
                <i class="fa fa-bell"></i>
              </li>

              <li class="dropdown">
                <button
                  onClick={() => {
                    console.log("hiii");
                    setsidenav(!sidenav);
                  }}
                  class="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                >
                  <span class="profile-pic">
                    <img src="images/profile-pic.jpeg" alt="" />
                  </span>
                  <span class="profile-name">M.Subash</span>
                </button>

                <ul
                  style={{ display: sidenav ? "block" : "none" }}
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a href="">Profile</a>
                  </li>

                  <li>
                    <a href="/">Log Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="sidebar-nav-bar">
          <ul class="list-unstyled side-menu">
            <li>
              <a href="dashboard.html">
                <i class="fa fa-columns"></i> Dashboard
              </a>
            </li>

            <li>
              <a href="client-list">
                <i class="fa fa-users"></i> Customers
              </a>
            </li>
          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">TICKET</div>
              </div>
              {/* <div class="col-sm-7 add-new-btnw">
                <a href="create-project" class="outline-btn">
                  Add New Ticket
                </a>
              </div> */}
              <div class="col-sm-7 add-new-btnw">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={addticketnew}
                >
                  Add New Ticket
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "2px solid black",
                padding: "5px",
              }}
            >
              <label
                style={{
                  margin: "15px",
                  marginRight: "60%",
                  fontSize: "16px",
                }}
              >
                Ticket - 25
              </label>
              {/* <input type="text" id="newticket" style={{}} /> */}
              <select>
                <option>Assignee</option>
                <option>Emp 1</option>
                <option>Emp 2</option>
                <option>Emp 3</option>
                <option>Emp 4</option>
              </select>
              <button
                type="button"
                class="btn btn-dark"
                onClick={addticket}
                style={{ marginLeft: "35px" }}
              >
                Assign
              </button>
              <img src={Filter} alt="filter" class="filterimage" />
            </div>
            <br />

            {/* <Chart
              width={"600px"}
              height={"400px"}
              chartType="ColumnChart"
              isStacked={true}
              loader={<div>Loading Chart</div>}
              data={[
                ["x", "tickets"],
                [0, 0],
                [1, 10],
                [2, 23],
                [3, 17],
                [4, 18],
                [5, 9],
                [6, 11],
                [7, 27],
                [8, 33],
                [9, 40],
                [10, 32],
                [11, 35],
              ]}
              options={{
                hAxis: {
                  title: "Status",
                },
                vAxis: {
                  title: "Total",
                },
              }}
              rootProps={{ "data-testid": "1" }}
            /> */}

            <div>
              <div
                class="main-title-filter"
                onClick={() => setShowApplyFilter((prev) => !prev)}
              >
                {" "}
                <img src={Filter} alt="filter" class="filterimage" />
                Apply filter
              </div>
            </div>
            {showApplyFilter && (
              <div className="apply-filter">
                <span>
                  <Input.Search
                    style={{ width: 200, margin: "12px" }}
                    allowClear
                    placeholder="Ticket#"
                    onSearch={(nameSearch) => {
                      setteamList(
                        searchdata.filter((person) =>
                          person.name.includes(nameSearch)
                        )
                      );
                      console.log(nameSearch);
                    }}
                    id="input-s"
                  />
                </span>
                <span>
                  <Select
                    showSearch
                    style={{ width: 200, margin: "12px" }}
                    placeholder="Ticket Type"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="Alert">Alert</Option>
                    <Option value="CompetitorAlert">Competitor Alert</Option>
                    <Option value="ChangeRequest">Change Request</Option>
                    <Option value="Warning">Warning</Option>
                  </Select>
                </span>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Project"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="MyntraShoes">Myntra Shoes</Option>
                  <Option value="AmazonMerchandise">Amazon Merchandise</Option>
                  <Option value="MyntraFashion">Myntra Fashion</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Module"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="da/pachecker">DA/PA Checker</Option>
                  <Option value="googletrends">Google Trends</Option>
                  <Option value="pagespeedandcorewebvitals">
                    Page speed and core web vitals
                  </Option>
                  <Option value="clickshare">Click Share</Option>
                  <Option value="ranktracking">Rank Tracking</Option>
                  <Option value="siteuptimemonitor">Site Uptime Monitor</Option>
                  <Option value="gscdataextractor">GSC Data Extractor</Option>
                  <Option value="organicresearch">Organic Research</Option>
                  <Option value="roicalculator">Roi Calculator</Option>
                  <Option value="contentword">Content Word</Option>
                  <Option value="backlinkcount">Backlink Count</Option>
                  <Option value="keywordsearch">Keyword Search</Option>
                  <Option value="seovolatality">SEO Volatality</Option>
                  <Option value="seomanualaudit">SEO Manual Audit</Option>
                  <Option value="googleanalyticedataextractor">
                    Google Analytics Data Extractor
                  </Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Priority"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="low">Low</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="high">High</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Status"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="open">Open</Option>
                  <Option value="inprogress">Inprogress</Option>
                  <Option value="resolved">Resolved</Option>
                  <Option value="reopen">Reopen</Option>
                  <Option value="closed">Closed</Option>
                  <Option value="overdue">Overdue</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Assigned"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="emp1">Emp 1</Option>
                  <Option value="emp2">Emp 2</Option>
                  <Option value="emp3">Emp 3</Option>
                </Select>
                <Select
                  showSearch
                  style={{ width: 200, margin: "12px" }}
                  placeholder="Raised By"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="customer">Customer</Option>
                  <Option value="bot">Bot</Option>
                  <Option value="self">Self</Option>
                </Select>
                <Space
                  style={{ margin: "12px" }}
                  className="create-cal"
                  direction="vertical"
                >
                  <DatePicker placeholder="Created On" onChange={onChange1} />
                </Space>
                <Space style={{ margin: "12px" }} direction="vertical">
                  <DatePicker placeholder="Due On" onChange={onChange1} />
                </Space>
                <span>
                  <Input.Search
                    style={{ width: 200, margin: "12px" }}
                    allowClear
                    placeholder="Key word search"
                    onSearch={(nameSearch) => {
                      setteamList(
                        searchdata.filter((person) =>
                          person.name.includes(nameSearch)
                        )
                      );
                      console.log(nameSearch);
                    }}
                    id="input-s"
                  />
                </span>
              </div>
            )}
            <br />

            <Barchart />
            {/* 
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">ASSIGN TEAM MEMBERS</div>
              </div>
              <div class="col-sm-7 add-new-btnw"></div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <ReactSelect
                  options={colourOptions}
                  isMulti
                  closeMenuOnSelect={false}
                  hideSelectedOptions={false}
                  components={{
                    Option,
                  }}
                  onChange={handleChange}
                  allowSelectAll={true}
                  value={optionSelected}
                />
              </div>
              <div className="col-md-3">
                <button onClick={() => assign()} class="outline-btn">
                  Assign
                </button>
              </div>
            </div>
            <hr /> */}
            <div class="common-table">
              <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-7">
                  {/* <div class="row">
                                <div class="col-md-0"></div>
                                <div class="col-md-12"> */}
                  <div class="data-export-client">
                    {/* <span class="data-per-page-client">Data Per page</span>
                    <span class="count-drop"></span>
                    <span class="export-client">
                      <select id="export-client" name="export">
                        <option value="Export">Export</option>
                        <option value="PDF">Excel</option>
                        <option value="WORD">CSV</option>
                        <option value="Sheets">Sheets</option>
                      </select>
                    </span> */}
                    {/* input search */}
                    {/* <span>
                      <Input.Search
                        allowClear
                        placeholder="Search By name"
                        onSearch={(nameSearch) => {
                          setteamList(
                            searchdata.filter((person) =>
                              person.name.includes(nameSearch)
                            )
                          );
                          console.log(nameSearch);
                        }}
                        id="input-s"
                      />
                    </span> */}
                  </div>
                  {/* </div>
                            </div> */}
                </div>
              </div>
              <Table
                id="sample"
                columns={teamcol}
                dataSource={[...teamlist]}
                rowSelection={{ type: selectionType, ...rowSelection }}
                pagination={{ position: ["topLeft", "bottomRight"] }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TicketsList;
