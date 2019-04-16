const players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];
function isMike(){
    return players.firstName = "Mike";
}
//var result = players.find(firstName = "Mike")
//var result = players.find( players => players.name === "mike")
var namedMike = 0
for (let i = 0; i < players.length; i++){
    let player = players[i];
    if (player.firstName == "Mike"){
        namedMike = player;
        break;
    }
}
console.log(namedMike.firstName)