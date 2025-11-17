black_i_list = fetch('https://shaman2016scratch.github.io/dash-cloudserver/public/ip-blacklist.json', {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
ip = fetch('https://api.ipify.org/', {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
if (black_i_list.list[ip]) {
  document = '<p>You are blocked by the cloud server.</p>'
}
