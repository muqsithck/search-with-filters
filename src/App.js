import React, { Component } from "react";
import data from "./data.json";

import JobList from "./components/jobList";
import Search from "./components/search";

export default class App extends Component {
  state = {
    isjobsd: false,
    seacrh: "",
    company: "",
    domain: ""
  };

  handleChnage = e => {
    this.setState({ seacrh: e.target.value });
    this.setState({ isjobsd: true });
  };

  selectCompany = e => {
    this.setState({ company: e.target.value });
    this.setState({ isjobsd: true });
  };

  selectDomain = e => {
    this.setState({ domain: e.target.value });
    this.setState({ isjobsd: true });
  };

  render() {
    let jobs = data;

    // search and filter
    if (this.state.seacrh.length > 0) {
      let searchResult = jobs.filter(item =>
        item.job.toLowerCase().includes(this.state.seacrh.toLowerCase())
      );
      jobs = searchResult;
    } else {
      jobs = data;
    }

    if (this.state.company.length > 0) {
      let jobsComapny = jobs.filter(item =>
        item.company.toLowerCase().includes(this.state.company.toLowerCase())
      );
      jobs = jobsComapny;
    }

    if (this.state.domain.length > 0) {
      let isjobsdomain = jobs.filter(item =>
        item.domain.toLowerCase().includes(this.state.domain.toLowerCase())
      );
      jobs = isjobsdomain;
    }

    // sort companies and domains 
    let companyList = data.map(item => item.company);
    let companies = [...new Set(companyList)];

    let domainList = data.map(item => item.domain);
    let domains = [...new Set(domainList)];

    return (
      <div className="bg-light">
        <div className="container" style={{ minHeight: "110vh" }}>
          <div className="row">
            <Search
              handleChnage={this.handleChnage}
              selectCompany={this.selectCompany}
              selectDomain={this.selectDomain}
              companies={companies}
              domains={domains}
            />

            {jobs.length === 0 ? (
              <div className="col-md-12 text-center p-5">
                <p>Did not match any data , Try more general keywords</p>
              </div>
            ) : (
              <JobList jobs={jobs} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
