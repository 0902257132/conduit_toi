import React from "react";
import { useSelector } from "react-redux";

function Index() {
  const tests = useSelector((state) => state.ListTests.tests);
  console.log("DELAY USESELECTOR", tests);
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
