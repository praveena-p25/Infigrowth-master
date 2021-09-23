import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { DatePicker } from "antd";
import Cloud from "./assets/cloud-arrow-up-fill.svg";
import { Table, Input, Row, Col, Space, Tag } from "antd";
import { FilePicker } from "react-file-picker";

function Tickets() {
  const [startDate, setStartDate] = useState(new Date());
  const [phonecode, setphonecode] = useState("+91");
  const [countrycodes, setcountrycodes] = useState([]);
  const [ticketid, setticketid] = useState("");
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  useEffect(() => {
    var data = [
      {
        country: "India",
        code: "+91",
      },
      {
        country: "USA",
        code: "+1",
      },
    ];
    setcountrycodes(data);

    setticketid(id);
  }, []);

  function setcountry(e) {
    var c = e.target.value;
    countrycodes.map((i) => {
      if (i.country == c) {
        setphonecode(i.code);
      }
    });
  }
  function onChange1(date, dateString) {
    console.log(date, dateString);
  }

  const [sidenav, setsidenav] = useState(false);
  const [filelist, setfilelist] = useState([]);

  function updateList() {
    var input = document.getElementById("myfile");
    const a = [];
    for (var i = 0; i < input.files.length; ++i) {
      a.push(input.files.item(i).name);
    }
    setfilelist(a);
  }
  function removeItem(i) {
    var list = filelist;
    setfilelist(list.filter((item) => item !== i));
  }

  return (
    <>
      <section class="outer-wrapper">
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
              <a href="">
                <i class="fa fa-users"></i> Customers
              </a>
            </li>
          </ul>
        </div>
        <div class="content-wrapper">
          <div class="dashboard-wrapper">
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">Ticket {ticketid}</div>
              </div>
              <div class="col-sm-7 add-new-btnw"></div>
            </div>

            <div class="common-wrapper">
              <div class="common-wcard">
                <div class="common-form-fields">
                  <div class="add-user-tickets">
                    <div class="form-wrappers">
                      <label>Ticket Type</label>
                      <br />
                      <select style={{ width: "40%" }}>
                        <option value="Alert">Alert</option>
                        <option value="CompetitorAlert">
                          Competitor Alert
                        </option>
                        <option value="ChangeRequest">Change Request</option>
                        <option value="Warning">Warning</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Project</label>
                      <br />
                      <select style={{ width: "40%" }}>
                        <option value="MyntraShoes">Myntra Shoes</option>
                        <option value="AmazonMerchandise">
                          Amazon Merchandise
                        </option>
                        <option value="MyntraFashion">Myntra Fashion</option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Modue</label>
                      <br />
                      <select style={{ width: "40%" }}>
                        <option value="da/pachecker">DA/PA Checker</option>
                        <option value="googletrends">Google Trends</option>
                        <option value="pagespeedandcorewebvitals">
                          Page speed and core web vitals
                        </option>
                        <option value="clickshare">Click Share</option>
                        <option value="ranktracking">Rank Tracking</option>
                        <option value="siteuptimemonitor">
                          Site Uptime Monitor
                        </option>
                        <option value="gscdataextractor">
                          GSC Data Extractor
                        </option>
                        <option value="organicresearch">
                          Organic Research
                        </option>
                        <option value="roicalculator">Roi Calculator</option>
                        <option value="contentword">Content Word</option>
                        <option value="backlinkcount">Backlinks Count</option>
                        <option value="keywordsearch">Keyword Search</option>
                        <option value="seovolatality">SEO Volatality</option>
                        <option value="seomanualaudit">SEO Manual Audit</option>
                        <option value="googleanalyticedataextractor">
                          Google Analytics Data Extractor
                        </option>
                      </select>
                    </div>

                    <div class="form-wrappers">
                      <label>Subject</label>
                      <br />
                      <input
                        style={{ width: "40%" }}
                        type="text"
                        name=""
                        placeholder="shoes site down"
                      />
                    </div>

                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <label>Summary</label>
                          <br />
                          <textarea
                            class="summarytextarea"
                            style={{ padding: "50px 100px", color: "grey" }}
                          >
                            Site down from 3:30 pm, sent via mail
                          </textarea>
                        </div>

                        <div class="col" style={{ marginLeft: "100px" }}>
                          <label>Document Upload</label>
                          <br />
                          <label for="file-input">
                            <img
                              src={Cloud}
                              onChange={updateList}
                              alt="cloud"
                              class="cloudimage"
                              style={{ cursor: "pointer" }}
                            />
                          </label>
                          <label class="filebutton">
                            <span>
                              <input
                                type="file"
                                id="file-input"
                                // name="myfile"
                                multiple
                                onChange={updateList}
                              />
                            </span>
                          </label>

                          <label id="fileLabel">
                            {filelist.length > 0
                              ? `${filelist.length} files`
                              : ""}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <label>Status</label>
                          <select>
                            <option value="open">Open</option>
                            <option value="inprogress">Inprogress</option>
                            <option value="resolved">Resolved</option>
                            <option value="reopen">Reopen</option>
                            <option value="closed">Closed</option>
                            <option value="overdue">Overdue</option>
                          </select>
                        </div>

                        <div class="col" style={{ marginLeft: "100px" }}>
                          <label>Raised On</label>
                          <br />
                          <Space direction="vertical">
                            <DatePicker
                              placeholder="Raised On"
                              onChange={onChange1}
                              // style={{ width: "100px" }}
                            />
                          </Space>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">
                          <label>Assigned To</label>
                          <select>
                            <option value="emp1">Emp 1</option>
                            <option value="emp2">Emp 2</option>
                            <option value="emp3">Emp 3</option>
                          </select>
                        </div>

                        <div class="col" style={{ marginLeft: "100px" }}>
                          <label>Priority</label>
                          <select>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                          </select>
                        </div>
                        <div class="w-100"></div>
                        <div class="col">
                          <label>Raised By</label>
                          <select>
                            <option value="customer">Customer</option>
                            <option value="bot">Bot</option>
                            <option value="self">Self</option>
                          </select>
                        </div>

                        <div class="col" style={{ marginLeft: "100px" }}>
                          <label>Reported via</label>
                          <select>
                            <option>Bot</option>
                            <option>Lead</option>
                            <option value="">Prospect</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div class="form-wrappers">
                      <label style={{ marginRight: "10px" }}>Due On</label>
                      <br />
                      <Space direction="vertical">
                        <DatePicker
                          placeholder="Due On"
                          onChange={onChange1}
                          // style={{ width: "100px" }}
                        />
                      </Space>
                    </div>

                    <div class="form-wrappers">
                      <label>Note</label>
                      <br />
                      <div style={{ display: "flex" }}>
                        <textarea
                          class="notetextarea"
                          style={{
                            padding: "50px 100px",
                            color: "grey",
                          }}
                        >
                          Site down from 4:00 pm ,sent via mail
                        </textarea>
                        <div style={{ marginLeft: "30px" }}>
                          <textarea class="textbox1">
                            Changes the Assigned from Raj to Rutht
                          </textarea>
                          <br />
                          <textarea class="textbox2">
                            Changed the priority of the issue 16/09/2021 t
                          </textarea>
                        </div>
                      </div>
                    </div>

                    <div id="fileList">
                      <ul>
                        {filelist &&
                          filelist.map((i, index) => {
                            return (
                              <li id={i}>
                                {i}{" "}
                                <i
                                  class="fa fa-trash"
                                  onClick={() => {
                                    removeItem(i);
                                  }}
                                ></i>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="form-action-wrapper" style={{ marginRight: "80%" }}>
                <li>
                  <a href="#" class="ol-btn">
                    Cancel
                  </a>
                </li>
                <li>
                  <a href="#" class="outline-btn">
                    Save
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tickets;
