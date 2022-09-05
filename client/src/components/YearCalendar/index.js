import React from "react";
// import { Link } from "react-router-dom";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import Form from "../Form";

const styles = {
  headerStyle: {
    fontFamily: "cursive",
    textAlign: "center",
  },

  gridBox: {
    border: "black solid 1px",
    height: "200px",
    padding: "5px",
    textAlign: "center",
    fontFamily: "cursive",
    background:
      "linear-gradient(to bottom right, white 0%, var(--deeppurple) 100%)",
  },

  listStyle: {
    listStyleType: "none",
  },

  calendarContainer: {
    margin: "10px",
  },
};

export function YearCalendar() {
  const [open, setIsOpen] = React.useState(false);

  const openForm = () => setIsOpen(true);

  return (
    <div>
      <h1 style={styles.headerStyle}>2022</h1>
      <div style={styles.calendarContainer}>
        <Row gutter={40}>
          <Col span={4} style={styles.gridBox}>
            <p>January</p>
            <ul style={styles.listStyle}>
              <button onClick={openForm}>+ Add Item</button>
              <Form open={open}></Form>
            </ul>
          </Col>
          <Col span={4} style={styles.gridBox}>
            <p>February</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
          <Col span={4} style={styles.gridBox}>
            <p>March</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span={4} style={styles.gridBox}>
            <p>April</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
          <Col span={4} style={styles.gridBox}>
            <p>May</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
          <Col span={4} style={styles.gridBox}>
            <p>June</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span={4} style={styles.gridBox}>
            <p>July</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
          <Col span={4} style={styles.gridBox}>
            <p>August</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
          <Col span={4} style={styles.gridBox}>
            <p>September</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span={4} style={styles.gridBox}>
            <p>October</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
          <Col span={4} style={styles.gridBox}>
            <p>November</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
          <Col span={4} style={styles.gridBox}>
            <p>December</p>
            <ul style={styles.listStyle}>
              <button>+ Add Item</button>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default YearCalendar;
