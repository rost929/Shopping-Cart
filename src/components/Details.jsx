import { Component } from "react";

const styles = {
  details: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 0,
  },
  imgIcon: {
    width: "50px",
    height: "32px",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

class Details extends Component {
  render() {
    const { car } = this.props;
    return (
      <div style={styles.details}>
        <ul style={styles.ul}>
          {car.map((c) => (
            <li style={styles.product} key={c.name}>
              <img style={styles.imgIcon} src={c.img} alt={c.name} />
              {c.name}
              <span>{c.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Details;
