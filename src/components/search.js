import React from "react";

export default function search(props) {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-6 bg-dark p-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search Jobs"
            onChange={props.handleChnage}
          />
        </div>
        <div className="col-md-3 bg-dark p-4">
          <div className="input-group mb-3">
            <select
              className="custom-select"
              defaultValue=""
              onChange={props.selectCompany}
            >
              <option value="">Company</option>
              {props.companies.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-md-3 bg-dark p-4">
          <div className="input-group mb-3">
            <select
              className="custom-select"
              defaultValue=""
              onChange={props.selectDomain}
            >
              <option value="">Domain</option>
              {props.domains.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
