const e = React.createElement;

function App() {
  return e("div", null,
    e("h1", null, "Welcome to our restaurant!"),
    e("p", null, "How can I help you?"),
    e("button", {
      onClick: () => {
        fetch("/order?item=burger")
          .then((r) => r.text())
          .then((text) => alert(text))
          .catch((err) => {
            console.error(err);
            alert("Order failed.");
          });
      }
    }, "Order Burger")
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
