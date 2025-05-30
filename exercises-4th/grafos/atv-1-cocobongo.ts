// Find the gatecrashers on CocoBongo parties

// CocoBongo is a club with very nice parties. However, you only can get inside if you know at least one other guest. Unfortunately, some gatecrashers can appear at those parties. The gatecrashers do not know any other party member and should not be at our amazing party!

// We will give to you a collection with all party members and a collection with some guests and their invitations. Your mission is to find out those gatecrashers and give us a sorted array of them.

// Note that invitations are undirectional relations, so if guest A invites B, we can consider that B also knows A. Once the relation (A, {B}) appears on the invitations collection, the reverse relation (B, {A}) may or may not appear in the input. You need to take care of that.
// Example

// party_members = [0,1,2,3,4]
// invitations = [ (0, [1,2]), (2, [3]) ]
// gatecrashers = [4]

// Explanation

// We have invitations = [ (0, [1,2]), (2, [3]) ].
// Guest 0 has invited guests 1 and 2; also, guest 2 has invited guest 3. However, noone has invited guest 4, so he is a gatecrasher.
let invitations = [ { members: 0, guests: [1, 2] }, { members: 2, guests: [3] } ];
let people = [0, 1, 2, 3, 4];

function findGatecrashers(
  people: number[], 
  invitations: { members: number, guests: number[] }[]
): number[] {
  let invited: number[] = [];

  for (let i = 0; i < invitations.length; i++) {
    const inv = invitations[i];
    invited.push(inv.members, ...inv.guests);
  }

  return people.filter(person => !invited.includes(person));
}

console.log(findGatecrashers(people, invitations));