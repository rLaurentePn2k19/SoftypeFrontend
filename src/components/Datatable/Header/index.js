import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiSortAscending, mdiSortDescending } from "@mdi/js";
const Header = ({ headers, onSorting }) => {
  const [sortingField, setSortingField] = useState("");
  const [sortingOrder, setSortingOrder] = useState("asc");

  const onSortingChange = (field) => {
    const order =
      field === sortingField && sortingOrder === "asc" ? "desc" : "asc";
    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  };
  return (
    <thead>
      <tr>
        {headers.map(({ name, field, sortable }, id) => (
          <th
            key={id+name}
            onClick={() => (sortable ? onSortingChange(field) : null)}
          >
            {name}
            {sortingField && sortingField === field && (
              <Icon
                path={
                  sortingOrder === "asc" ? mdiSortAscending : mdiSortDescending
                }
                size={0.5}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
