function editProfile() {
  const newName = prompt("Enter new name:");
  if (newName) {
    document.querySelector("#user-name").innerText = newName;
  }
}

function getRequestCount() {
  return document.querySelector("#request-count");
}

function getConnectionCount() {
  return document.querySelector("#connection-count");
}

function acceptRequest(element) {
  const listItem = element.closest(".card-list-item");
  listItem.remove();

  const requestBadge = getRequestCount();
  requestBadge.textContent = parseInt(requestBadge.textContent, 10) - 1;

  const connectionBadge = getConnectionCount();
  connectionBadge.textContent = parseInt(connectionBadge.textContent, 10) + 1;
}

function rejectRequest(element) {
  const listItem = element.closest(".card-list-item");
  listItem.remove();

  const requestBadge = getRequestCount();
  requestBadge.textContent = parseInt(requestBadge.textContent, 10) - 1;
  const current = parseInt(requestBadge.textContent, 10);
  requestBadge.textContent = Math.max(0, current - 1);
}
