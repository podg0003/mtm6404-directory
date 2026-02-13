// List Function
const list = (clients) => {
  return clients
    .map((client) => `
<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  ${client.name}
  <strong>$ ${client.balance}</strong>
</li>
`)
    .join("");
};


// Order Function
const order = (clients, property) => {
return clients.sort((a, b) => {
     if (a[property] > b[property]) {
      return 1;
     } else if (a[property] < b[property]) {
      return -1;
     } else {
      return 0;
        }
  });
};


//Total Function
const total = (clients) => {
  return clients.reduce((sum, client) => sum + client.balance, 0);
};


//Info Function
const info = (index) => {
  return clients.find((client) => client.index === index);
};


//Search Function
const search = (query) => {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );
};