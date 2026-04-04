const App = () => {
  return (
    <div>
      <h1>Welcome to our restaurant!</h1>
      <p>How can I help you?</p>
      <button onClick={() => fetch('/order?item=burger').then(r => r.text()).then(alert)}>
        Order Burger
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
