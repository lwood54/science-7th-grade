import React from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import PageList from "../../../ContentPages/PageList/PageList";
import cls from "./MenuItems.module.css";

// returns array from PageList
const pageList = PageList();

const menuItems = () => {
  const items = pageList.map(unit => {
    return (
      <Button className={cls.Button} onClick={() => alert(unit.pageAddress)}>
        {unit.unitName}
      </Button>
    );
  });

  return <div>{items}</div>;
};

export default menuItems;
