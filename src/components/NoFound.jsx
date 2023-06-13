import React from "react";

const NoFound = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1 style={{color: "red"}}>404 - Page not found</h1>
        </div>
      </div>
    </header>
  );
};
export default NoFound;
