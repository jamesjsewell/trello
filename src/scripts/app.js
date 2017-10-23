import React from "react";
import ReactDOM from "react-dom";
import Backbone from "backbone";
import init from "./init";
import _ from "underscore"

const app = function() {
	document.querySelector(".container").innerHTML = `<h1>trello</h1>`;

	var output = {}

	var a = {
		id: "59e4d6011ec4404c12e0e260",
		name: "sci",
		desc: "",
		descData: null,
		closed: false,
		idOrganization: null,
		invited: false,
		limits: {
			boards: {
				totalMembersPerBoard: {
					status: "ok",
					disableAt: 1520,
					warnAt: 1440
				}
			},
			cards: {
				openPerBoard: {
					status: "ok",
					disableAt: 4750,
					warnAt: 4500
				},
				totalPerBoard: {
					status: "ok",
					disableAt: 1900000,
					warnAt: 1800000
				}
			},
			checklists: {
				perBoard: {
					status: "ok",
					disableAt: 15200,
					warnAt: 14400
				}
			},
			labels: {
				perBoard: {
					status: "ok",
					disableAt: 950,
					warnAt: 900
				}
			},
			lists: {
				openPerBoard: {
					status: "ok",
					disableAt: 475,
					warnAt: 450
				},
				totalPerBoard: {
					status: "ok",
					disableAt: 2850,
					warnAt: 2700
				}
			}
		},
		pinned: false,
		starred: false,
		url: "https://trello.com/b/MgwRxq3f/sci",
		prefs: {
			permissionLevel: "public",
			voting: "disabled",
			comments: "members",
			invitations: "members",
			selfJoin: false,
			cardCovers: true,
			cardAging: "regular",
			calendarFeedEnabled: false,
			background: "blue",
			backgroundImage: null,
			backgroundImageScaled: null,
			backgroundTile: false,
			backgroundBrightness: "dark",
			backgroundColor: "#0079BF",
			backgroundBottomColor: "#0079BF",
			backgroundTopColor: "#0079BF",
			canBePublic: true,
			canBeOrg: true,
			canBePrivate: true,
			canInvite: true
		},
		invitations: [],
		shortLink: "MgwRxq3f",
		subscribed: false,
		labelNames: {
			green: "",
			yellow: "",
			orange: "",
			red: "",
			purple: "",
			blue: "",
			sky: "",
			lime: "",
			pink: "",
			black: ""
		},
		powerUps: [],
		dateLastActivity: "2017-10-20T17:03:35.415Z",
		dateLastView: "2017-10-20T17:25:18.275Z",
		shortUrl: "https://trello.com/b/MgwRxq3f",
		idTags: [],
		datePluginDisable: null,
		actions: [
			{
				id: "59ea2c67e35e5d7f7b972f2f",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "eAnT4CLR",
						idShort: 48,
						name: "5226",
						id: "59ea286264c65f75d75b17f6",
						pos: 917503
					},
					old: {
						pos: 65535
					}
				},
				type: "updateCard",
				date: "2017-10-20T17:03:35.417Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea2c67e35e5d7f7b972f2e",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					listBefore: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "eAnT4CLR",
						idShort: 48,
						name: "5226",
						id: "59ea286264c65f75d75b17f6",
						idList: "59e8e5e34e73083bb0fd6d91"
					},
					old: {
						idList: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "updateCard",
				date: "2017-10-20T17:03:35.394Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea286264c65f75d75b17f7",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					card: {
						shortLink: "eAnT4CLR",
						idShort: 48,
						name: "5226",
						id: "59ea286264c65f75d75b17f6"
					}
				},
				type: "createCard",
				date: "2017-10-20T16:46:26.439Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea285c3a3abbd064d05135",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "agI0y03D",
						idShort: 47,
						name: "4952",
						id: "59ea0c4734d8fb0d1f0442cf",
						pos: 851967
					},
					old: {
						pos: 65535
					}
				},
				type: "updateCard",
				date: "2017-10-20T16:46:20.140Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea285c3a3abbd064d05134",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					listBefore: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "agI0y03D",
						idShort: 47,
						name: "4952",
						id: "59ea0c4734d8fb0d1f0442cf",
						idList: "59e8e5e34e73083bb0fd6d91"
					},
					old: {
						idList: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "updateCard",
				date: "2017-10-20T16:46:20.126Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea24af6c6fcfd5369c0d13",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "swJlfEcs",
						idShort: 19,
						name: "bio section in sitecore",
						id: "59e7a8502de069c9b1e87051"
					},
					text: "can search employee name in gather content, associates with no translation - import. it will show the employee number, use this to search the employee in sitecore and you can edit their bio and name in sitecore (thanks stacy)"
				},
				type: "commentCard",
				date: "2017-10-20T16:30:39.305Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea1036fb41dd2dcb89610d",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "agI0y03D",
						idShort: 47,
						name: "4952",
						id: "59ea0c4734d8fb0d1f0442cf",
						desc: "sitting area 2 sitting area 1"
					},
					old: {
						desc: "sitting area 2 "
					}
				},
				type: "updateCard",
				date: "2017-10-20T15:03:18.036Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea100ef6172e9c825bbd32",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "agI0y03D",
						idShort: 47,
						name: "4952",
						id: "59ea0c4734d8fb0d1f0442cf",
						desc: "sitting area 2 "
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-20T15:02:38.628Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea0c4734d8fb0d1f0442d0",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					card: {
						shortLink: "agI0y03D",
						idShort: 47,
						name: "4952",
						id: "59ea0c4734d8fb0d1f0442cf"
					}
				},
				type: "createCard",
				date: "2017-10-20T14:46:31.811Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea0bd0aa80401ac5c0623d",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					card: {
						shortLink: "n6N60IAE",
						idShort: 46,
						name: "4148",
						id: "59ea0bd0aa80401ac5c0623b"
					}
				},
				type: "createCard",
				date: "2017-10-20T14:44:32.605Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59ea06ff7fb020f6a00f5619",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					card: {
						shortLink: "gw8wMFTE",
						idShort: 45,
						name: "check for gallery ^",
						id: "59ea06ff7fb020f6a00f5618"
					}
				},
				type: "createCard",
				date: "2017-10-20T14:23:59.557Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e91d7b82a96e4145751bb3",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "KxSFj0T0",
						idShort: 44,
						name: "4148",
						id: "59e91d78d3976452ef92cb15",
						pos: 655359
					},
					old: {
						pos: 65535
					}
				},
				type: "updateCard",
				date: "2017-10-19T21:47:39.676Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e91d7b82a96e4145751bb2",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					listBefore: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "KxSFj0T0",
						idShort: 44,
						name: "4148",
						id: "59e91d78d3976452ef92cb15",
						idList: "59e8e5e34e73083bb0fd6d91"
					},
					old: {
						idList: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "updateCard",
				date: "2017-10-19T21:47:39.650Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e91d78d3976452ef92cb16",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					card: {
						shortLink: "KxSFj0T0",
						idShort: 44,
						name: "4148",
						id: "59e91d78d3976452ef92cb15"
					}
				},
				type: "createCard",
				date: "2017-10-19T21:47:36.142Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e91d72bda49bb7d35c4341",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "xoQid7QU",
						idShort: 42,
						name: "4118",
						id: "59e9152afef8f315f7b25ce6",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateCard",
				date: "2017-10-19T21:47:30.156Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e91bc1cc9430e9482d5b9c",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					card: {
						shortLink: "0fwCf1dk",
						idShort: 43,
						name: "4118",
						id: "59e91bc1cc9430e9482d5b9b"
					}
				},
				type: "createCard",
				date: "2017-10-19T21:40:17.831Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e916d1a66e99cecee8c6f0",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "xoQid7QU",
						idShort: 42,
						name: "4118",
						id: "59e9152afef8f315f7b25ce6",
						desc: "exterior-building-4 signage"
					},
					old: {
						desc: "exterior-building-4"
					}
				},
				type: "updateCard",
				date: "2017-10-19T21:19:13.721Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e9153f7b9ec8f5c18f5acb",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "xoQid7QU",
						idShort: 42,
						name: "4118",
						id: "59e9152afef8f315f7b25ce6",
						desc: "exterior-building-4"
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-19T21:12:31.708Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e9152afef8f315f7b25ce7",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					card: {
						shortLink: "xoQid7QU",
						idShort: 42,
						name: "4118",
						id: "59e9152afef8f315f7b25ce6"
					}
				},
				type: "createCard",
				date: "2017-10-19T21:12:10.797Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e9152668fb57d9b07224e2",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "hbtlggu8",
						idShort: 41,
						name: "4117",
						id: "59e911cd2683f46a360aacdf",
						pos: 524287
					},
					old: {
						pos: 65535
					}
				},
				type: "updateCard",
				date: "2017-10-19T21:12:06.415Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e9152668fb57d9b07224e1",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					listBefore: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "hbtlggu8",
						idShort: 41,
						name: "4117",
						id: "59e911cd2683f46a360aacdf",
						idList: "59e8e5e34e73083bb0fd6d91"
					},
					old: {
						idList: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "updateCard",
				date: "2017-10-19T21:12:06.395Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e911cd2683f46a360aace0",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					card: {
						shortLink: "hbtlggu8",
						idShort: 41,
						name: "4117",
						id: "59e911cd2683f46a360aacdf"
					}
				},
				type: "createCard",
				date: "2017-10-19T20:57:49.644Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e90eb95f0e0688b54e5c8f",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					card: {
						shortLink: "daQDUgHW",
						idShort: 40,
						name: "4049",
						id: "59e90eb95f0e0688b54e5c8e"
					}
				},
				type: "createCard",
				date: "2017-10-19T20:44:41.418Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e90a756485bafc9b5b257b",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					card: {
						shortLink: "UHKWbq9w",
						idShort: 39,
						name: "4048",
						id: "59e90a756485bafc9b5b257a"
					}
				},
				type: "createCard",
				date: "2017-10-19T20:26:29.194Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e902515dcaf48d5cc88e0e",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "GiR2WwIN",
						idShort: 38,
						name: "4030",
						id: "59e8ff7fbed025ef452b431e",
						pos: 327679
					},
					old: {
						pos: 65535
					}
				},
				type: "updateCard",
				date: "2017-10-19T19:51:45.167Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e902515dcaf48d5cc88e0d",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					listBefore: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "GiR2WwIN",
						idShort: 38,
						name: "4030",
						id: "59e8ff7fbed025ef452b431e",
						idList: "59e8e5e34e73083bb0fd6d91"
					},
					old: {
						idList: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "updateCard",
				date: "2017-10-19T19:51:45.084Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8ff7fbed025ef452b431f",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					card: {
						shortLink: "GiR2WwIN",
						idShort: 38,
						name: "4030",
						id: "59e8ff7fbed025ef452b431e"
					}
				},
				type: "createCard",
				date: "2017-10-19T19:39:43.761Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8fea50a5524ed243c400e",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					listBefore: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "6ErmHyr8",
						idShort: 37,
						name: "2741",
						id: "59e8fb10c039757db4794598",
						idList: "59e8e5e34e73083bb0fd6d91"
					},
					old: {
						idList: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "updateCard",
				date: "2017-10-19T19:36:05.619Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8fcf41025113638a9b0f3",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					listBefore: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "6ErmHyr8",
						idShort: 37,
						name: "2741",
						id: "59e8fb10c039757db4794598",
						idList: "59e8e6b7a8bd3153cf6dab01"
					},
					old: {
						idList: "59e8e5e34e73083bb0fd6d91"
					}
				},
				type: "updateCard",
				date: "2017-10-19T19:28:52.588Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8fb10c039757db4794599",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					card: {
						shortLink: "6ErmHyr8",
						idShort: 37,
						name: "2741",
						id: "59e8fb10c039757db4794598"
					}
				},
				type: "createCard",
				date: "2017-10-19T19:20:48.149Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8f6f1136604e117ac00b8",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					listBefore: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5c6VSsBa",
						idShort: 36,
						name: "2739",
						id: "59e8f311b2533ae0d0f85b3d",
						idList: "59e8e5e34e73083bb0fd6d91"
					},
					old: {
						idList: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "updateCard",
				date: "2017-10-19T19:03:13.253Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8f5fa9c37b17e8eff3a5e",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					listBefore: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5c6VSsBa",
						idShort: 36,
						name: "2739",
						id: "59e8f311b2533ae0d0f85b3d",
						idList: "59e8e6b7a8bd3153cf6dab01"
					},
					old: {
						idList: "59e8e5e34e73083bb0fd6d91"
					}
				},
				type: "updateCard",
				date: "2017-10-19T18:59:06.223Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8f489a6ae80c781893f61",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5c6VSsBa",
						idShort: 36,
						name: "2739",
						id: "59e8f311b2533ae0d0f85b3d",
						desc: "front exterior 1 sitting area 5 "
					},
					old: {
						desc: " sitting area 5"
					}
				},
				type: "updateCard",
				date: "2017-10-19T18:52:57.587Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8f45516a6f5d10d4ebe78",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5c6VSsBa",
						idShort: 36,
						name: "2739",
						id: "59e8f311b2533ae0d0f85b3d",
						desc: " sitting area 5"
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-19T18:52:05.265Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8f311b2533ae0d0f85b3e",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					card: {
						shortLink: "5c6VSsBa",
						idShort: 36,
						name: "2739",
						id: "59e8f311b2533ae0d0f85b3d"
					}
				},
				type: "createCard",
				date: "2017-10-19T18:46:41.086Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8efccd438ea81282bb1e4",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "IFTVE014",
						idShort: 35,
						name: "combo locations",
						id: "59e8efbb562d31144e91651a",
						desc: "long name should always be used for combos "
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-19T18:32:44.283Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8efbb562d31144e91651b",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "IFTVE014",
						idShort: 35,
						name: "combo locations",
						id: "59e8efbb562d31144e91651a"
					}
				},
				type: "createCard",
				date: "2017-10-19T18:32:27.698Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8ece9a66e99cecee4ace4",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "XBOyXv9n",
						idShort: 34,
						name: "2396",
						id: "59e8e6cdfd9b50ce667547ef",
						pos: 131071
					},
					old: {
						pos: 65535
					}
				},
				type: "updateCard",
				date: "2017-10-19T18:20:25.379Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8ece9a66e99cecee4ace3",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					listBefore: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "XBOyXv9n",
						idShort: 34,
						name: "2396",
						id: "59e8e6cdfd9b50ce667547ef",
						idList: "59e8e5e34e73083bb0fd6d91"
					},
					old: {
						idList: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "updateCard",
				date: "2017-10-19T18:20:25.347Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8e8fe975b4dbeb455034f",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "XBOyXv9n",
						idShort: 34,
						name: "2396",
						id: "59e8e6cdfd9b50ce667547ef",
						desc: "front-exterior-2 hero image signage-1 gallery image "
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-19T18:03:42.172Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8e6cdfd9b50ce667547f0",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					},
					card: {
						shortLink: "XBOyXv9n",
						idShort: 34,
						name: "2396",
						id: "59e8e6cdfd9b50ce667547ef"
					}
				},
				type: "createCard",
				date: "2017-10-19T17:54:21.209Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8e6b92d08b7f7777e8521",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01",
						pos: 495615
					},
					old: {
						pos: 593919
					}
				},
				type: "updateList",
				date: "2017-10-19T17:54:01.276Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8e6b7a8bd3153cf6dab02",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "in progress",
						id: "59e8e6b7a8bd3153cf6dab01"
					}
				},
				type: "createList",
				date: "2017-10-19T17:53:59.418Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8e5ee81233e885517c743",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					},
					card: {
						shortLink: "txRmxikV",
						idShort: 33,
						name: "1461",
						id: "59e8e5ee81233e885517c742"
					}
				},
				type: "createCard",
				date: "2017-10-19T17:50:38.510Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8e5e34e73083bb0fd6d92",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "done",
						id: "59e8e5e34e73083bb0fd6d91"
					}
				},
				type: "createList",
				date: "2017-10-19T17:50:27.446Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8dce5b1f79aef44f9c840",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5A49yx4M",
						idShort: 16,
						name: "when curating images in digizuite",
						id: "59e7a8318153dbfee6ceb8fe",
						desc: " laura noticed that if she changed the index order of images we don't understand how long the change will take to affect sitecore, they will let us know. "
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-19T17:12:05.592Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8d7306d12cde45e8075d6",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "obtsI4Vf",
						idShort: 32,
						name: "spanish sites",
						id: "59e8d70bc049b974a7b88edd",
						desc: "spanish sites are currently still being wired up and may not work correctly. "
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-19T16:47:44.511Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8d70bc049b974a7b88ede",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "obtsI4Vf",
						idShort: 32,
						name: "spanish sites",
						id: "59e8d70bc049b974a7b88edd"
					}
				},
				type: "createCard",
				date: "2017-10-19T16:47:07.562Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8d0ce30952f36c3feea93",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5wPIkPej",
						idShort: 31,
						name: "bugs",
						id: "59e8c632cac1fb1e6fffce76"
					},
					text: "bio is either have one or don't "
				},
				type: "commentCard",
				date: "2017-10-19T16:20:30.984Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8d0845e4a7b15aa52bc8e",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5wPIkPej",
						idShort: 31,
						name: "bugs",
						id: "59e8c632cac1fb1e6fffce76"
					},
					text: "slack or email erica "
				},
				type: "commentCard",
				date: "2017-10-19T16:19:16.044Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8d028e646a6e0920db1e7",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5wPIkPej",
						idShort: 31,
						name: "bugs",
						id: "59e8c632cac1fb1e6fffce76",
						desc: "captions it is a known but that we have an ampersand, not something we can correct, don't worry about it. spanish was giving issues, they are still wiring up spanish, it is not currently working the eyebrow doesn't show up sometimes, mostly on combo locations but on standalone laura noticed that if she changed the order, in digi, we don't understand how long the change will take to affect sitecore, they will let us know. when setting the sort index, the channel must be set to sitecore in digizuite. required info > channel. make sure that site core is in the list of channels. sort index should be set, not the priority bio's clicked tab, it's rebuilding an old version of the page, have to click the button a second time to get the bio to open lock and edit, when finished make sure to unlock item. Two ways, check in under edit, or save changes will also check it in. left or right align images. left is preferred unless there is a large list of images. make sure each paragraph has a p tag back to overview to see all of the tasks, pilot 3, assign to reviewer and notify by email sitecore training has been added to files location spreadsheet has name of location, how many associates, etc. will be uploaded to teamwork if a location has a really long name alert erica dont put a display name in sitecore unless they tell us to. funeraria del is putting an unnecessary apostrophe 30 minute to 45 for cornerstone 20 minute review i have about 30 locations "
					},
					old: {
						desc: "captions it is a known but that we have an ampersand, not something we can correct, don't worry about it. spanish was giving issues, they are still wiring up spanish, it is not currently working the eyebrow doesn't show up sometimes, mostly on combo locations but on standalone laura noticed that if she changed the order, in digi, we don't understand how long the change will take to affect sitecore, they will let us know. when setting the sort index, the channel must be set to sitecore in digizuite. required info > channel. make sure that site core is in the list of channels. sort index should be set, not the priority bio's clicked tab, it's rebuilding an old version of the page, have to click the button a second time to get the bio to open lock and edit, when finished make sure to unlock item. Two ways, check in under edit, or save changes will also check it in. left or right align images. left is preferred unless there is a large list of images. make sure each paragraph has a p tag back to overview to see all of the tasks, pilot 3, assign to reviewer and notify by email sitecore training has been added to files location spreadsheet has name of location, how many associates, etc. will be uploaded to teamwork if a location has a really long name alert erica dont put a display name in sitecore unless they tell us to. funeraria del is putting an unnecessary apostrophe 30 minute to 45 for cornerstone 20 minute review "
					}
				},
				type: "updateCard",
				date: "2017-10-19T16:17:44.029Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8cfd135a7b63cbb258510",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5wPIkPej",
						idShort: 31,
						name: "bugs",
						id: "59e8c632cac1fb1e6fffce76",
						desc: "captions it is a known but that we have an ampersand, not something we can correct, don't worry about it. spanish was giving issues, they are still wiring up spanish, it is not currently working the eyebrow doesn't show up sometimes, mostly on combo locations but on standalone laura noticed that if she changed the order, in digi, we don't understand how long the change will take to affect sitecore, they will let us know. when setting the sort index, the channel must be set to sitecore in digizuite. required info > channel. make sure that site core is in the list of channels. sort index should be set, not the priority bio's clicked tab, it's rebuilding an old version of the page, have to click the button a second time to get the bio to open lock and edit, when finished make sure to unlock item. Two ways, check in under edit, or save changes will also check it in. left or right align images. left is preferred unless there is a large list of images. make sure each paragraph has a p tag back to overview to see all of the tasks, pilot 3, assign to reviewer and notify by email sitecore training has been added to files location spreadsheet has name of location, how many associates, etc. will be uploaded to teamwork if a location has a really long name alert erica dont put a display name in sitecore unless they tell us to. funeraria del is putting an unnecessary apostrophe 30 minute to 45 for cornerstone 20 minute review "
					},
					old: {
						desc: "captions it is a known but that we have an ampersand, not something we can correct, don't worry about it. spanish was giving issues, they are still wiring up spanish, it is not currently working the eyebrow doesn't show up sometimes, mostly on combo locations but on standalone laura noticed that if she changed the order, in digi, we don't understand how long the change will take to affect sitecore, they will let us know. when setting the sort index, the channel must be set to sitecore in digizuite. required info > channel. make sure that site core is in the list of channels. sort index should be set, not the priority bio's clicked tab, it's rebuilding an old version of the page, have to click the button a second time to get the bio to open "
					}
				},
				type: "updateCard",
				date: "2017-10-19T16:16:17.901Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8c9b4b4ebd712ae09a336",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "5wPIkPej",
						idShort: 31,
						name: "bugs",
						id: "59e8c632cac1fb1e6fffce76",
						desc: "captions it is a known but that we have an ampersand, not something we can correct, don't worry about it. spanish was giving issues, they are still wiring up spanish, it is not currently working the eyebrow doesn't show up sometimes, mostly on combo locations but on standalone laura noticed that if she changed the order, in digi, we don't understand how long the change will take to affect sitecore, they will let us know. when setting the sort index, the channel must be set to sitecore in digizuite. required info > channel. make sure that site core is in the list of channels. sort index should be set, not the priority bio's clicked tab, it's rebuilding an old version of the page, have to click the button a second time to get the bio to open "
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-19T15:50:12.431Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8c632cac1fb1e6fffce77",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					},
					card: {
						shortLink: "5wPIkPej",
						idShort: 31,
						name: "bugs",
						id: "59e8c632cac1fb1e6fffce76"
					}
				},
				type: "createCard",
				date: "2017-10-19T15:35:14.358Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8c631c7e299170e10e0f9",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					},
					card: {
						shortLink: "RKRUKehK",
						idShort: 30,
						name: "sprint one getting assigned today",
						id: "59e8c631c7e299170e10e0f8"
					}
				},
				type: "createCard",
				date: "2017-10-19T15:35:13.317Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8c62abdb8483821f424ae",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					},
					card: {
						shortLink: "wODVcVRw",
						idShort: 29,
						name: "done with pilot review process",
						id: "59e8c62abdb8483821f424ad"
					}
				},
				type: "createCard",
				date: "2017-10-19T15:35:06.999Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8c4dbd21666f8d6d0ef6a",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "meeting oct 19",
						id: "59e8c4dbd21666f8d6d0ef69"
					}
				},
				type: "createList",
				date: "2017-10-19T15:29:31.630Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8bec81bfe881aba9360a7",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "sci network creds",
						id: "59e61aa2159c96fbfc262afb",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateList",
				date: "2017-10-19T15:03:36.538Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e8bec62f667c351e1efb6f",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "sci network creds",
						id: "59e61aa2159c96fbfc262afb",
						pos: 458751
					},
					old: {
						pos: 196607
					}
				},
				type: "updateList",
				date: "2017-10-19T15:03:34.181Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7b003597708455d64baa9",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "aPFPveZb",
						idShort: 15,
						name: "overview",
						id: "59e7a8250cd393fb26d6963a"
					},
					attachment: {
						url: "https://trello-attachments.s3.amazonaws.com/59e4d6011ec4404c12e0e260/59e7a8250cd393fb26d6963a/4e20f60db3f5de2f6057519dd137e936/Untitled_Diagram.xml",
						name: "Untitled Diagram.xml",
						id: "59e7b003597708455d64baa8"
					}
				},
				type: "addAttachmentToCard",
				date: "2017-10-18T19:48:19.368Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7b002a55efeb3e7f5b6d0",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "aPFPveZb",
						idShort: 15,
						name: "overview",
						id: "59e7a8250cd393fb26d6963a"
					},
					attachment: {
						id: "59e7affe1f8035b41698d9e9",
						name: "Untitled Diagram.xml"
					}
				},
				type: "deleteAttachmentFromCard",
				date: "2017-10-18T19:48:18.152Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7affe1f8035b41698d9eb",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						id: "59e4d6011ec4404c12e0e260",
						name: "sci",
						shortLink: "MgwRxq3f"
					},
					card: {
						id: "59e7a8250cd393fb26d6963a",
						name: "overview",
						idShort: 15,
						shortLink: "aPFPveZb"
					},
					attachment: {
						id: "59e7affe1f8035b41698d9e9",
						name: "Untitled Diagram.xml"
					}
				},
				type: "addAttachmentToCard",
				date: "2017-10-18T19:48:14.653Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc937f4153bab3dc943",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateList",
				date: "2017-10-18T19:34:33.356Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc32bf63de0af479458",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					cardSource: {
						shortLink: "KKGGQFlM",
						idShort: 17,
						name: "intro section in sitecore",
						id: "59e7a83c68145b10cc02371d"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b"
					},
					card: {
						shortLink: "raQegArq",
						idShort: 26,
						name: "intro section in sitecore",
						id: "59e7acc32bf63de0af479431"
					}
				},
				type: "copyCard",
				date: "2017-10-18T19:34:27.382Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc32bf63de0af479457",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					cardSource: {
						shortLink: "iwB4wDqA",
						idShort: 20,
						name: "when done with a site",
						id: "59e7a8596f003b6f70446a97"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b"
					},
					card: {
						shortLink: "MWEYMaSS",
						idShort: 28,
						name: "when done with a site",
						id: "59e7acc32bf63de0af479433"
					}
				},
				type: "copyCard",
				date: "2017-10-18T19:34:27.381Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc32bf63de0af479456",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					cardSource: {
						shortLink: "5okrgyqk",
						idShort: 21,
						name: "teamwork website",
						id: "59e7a8642207bbff2e88d0a9"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b"
					},
					card: {
						shortLink: "pnyNHVe9",
						idShort: 27,
						name: "teamwork website",
						id: "59e7acc32bf63de0af479432"
					}
				},
				type: "copyCard",
				date: "2017-10-18T19:34:27.380Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc32bf63de0af479455",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					cardSource: {
						shortLink: "ONOT5QFH",
						idShort: 18,
						name: "content section in sitecore",
						id: "59e7a8463038253bc379bd79"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b"
					},
					card: {
						shortLink: "wfvKoIxo",
						idShort: 25,
						name: "content section in sitecore",
						id: "59e7acc32bf63de0af479430"
					}
				},
				type: "copyCard",
				date: "2017-10-18T19:34:27.379Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc32bf63de0af479454",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					cardSource: {
						shortLink: "swJlfEcs",
						idShort: 19,
						name: "bio section in sitecore",
						id: "59e7a8502de069c9b1e87051"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b"
					},
					card: {
						shortLink: "YBosFEbO",
						idShort: 24,
						name: "bio section in sitecore",
						id: "59e7acc32bf63de0af47942f"
					}
				},
				type: "copyCard",
				date: "2017-10-18T19:34:27.371Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc32bf63de0af479453",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					cardSource: {
						shortLink: "5A49yx4M",
						idShort: 16,
						name: "when curating images in digizuite",
						id: "59e7a8318153dbfee6ceb8fe"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b"
					},
					card: {
						shortLink: "cc7qh5jG",
						idShort: 23,
						name: "when curating images in digizuite",
						id: "59e7acc32bf63de0af47942d"
					}
				},
				type: "copyCard",
				date: "2017-10-18T19:34:27.369Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc32bf63de0af479452",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					cardSource: {
						shortLink: "aPFPveZb",
						idShort: 15,
						name: "overview",
						id: "59e7a8250cd393fb26d6963a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b"
					},
					card: {
						shortLink: "SIteMg38",
						idShort: 22,
						name: "overview",
						id: "59e7acc32bf63de0af47942e"
					}
				},
				type: "copyCard",
				date: "2017-10-18T19:34:27.362Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7acc32bf63de0af47942c",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "234",
						id: "59e7acc32bf63de0af47942b"
					}
				},
				type: "createList",
				date: "2017-10-18T19:34:27.036Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7ac9205f10c025d0d92cf",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					checkItem: {
						state: "incomplete",
						name: "review assigned location",
						id: "59e7a87e407cd3d6b0350bb7"
					},
					checklist: {
						name: "Checklist",
						id: "59e7a87a2917a28dfcab0a6f"
					},
					card: {
						shortLink: "aPFPveZb",
						idShort: 15,
						name: "overview",
						id: "59e7a8250cd393fb26d6963a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					}
				},
				type: "updateCheckItemStateOnCard",
				date: "2017-10-18T19:33:38.082Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7ac8e1daf5c9279c05993",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					checkItem: {
						state: "complete",
						name: "review assigned location",
						id: "59e7a87e407cd3d6b0350bb7"
					},
					checklist: {
						name: "Checklist",
						id: "59e7a87a2917a28dfcab0a6f"
					},
					card: {
						shortLink: "aPFPveZb",
						idShort: 15,
						name: "overview",
						id: "59e7a8250cd393fb26d6963a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					}
				},
				type: "updateCheckItemStateOnCard",
				date: "2017-10-18T19:33:34.897Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7ac2e464e9d5d826ce54b",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e655c16c4d18ca18914bb1",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateList",
				date: "2017-10-18T19:31:58.611Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7ac18c559bd06fdb5bfdd",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "assigned locations from friday and monday",
						id: "59e50e1cb6c87411d14daa50",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateList",
				date: "2017-10-18T19:31:36.694Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7ab1170a7ed10f7cc445b",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260",
						prefs: {
							permissionLevel: "public"
						}
					},
					old: {
						prefs: {
							permissionLevel: "private"
						}
					}
				},
				type: "updateBoard",
				date: "2017-10-18T19:27:13.489Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7aa43f6a58b6e3560b0bb",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "Checklist",
						id: "59e7aa43f6a58b6e3560b0ba"
					},
					card: {
						shortLink: "5okrgyqk",
						idShort: 21,
						name: "teamwork website",
						id: "59e7a8642207bbff2e88d0a9"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-18T19:23:47.188Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7aa16d792891a1e55532b",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "Checklist",
						id: "59e7aa16d792891a1e55532a"
					},
					card: {
						shortLink: "iwB4wDqA",
						idShort: 20,
						name: "when done with a site",
						id: "59e7a8596f003b6f70446a97"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-18T19:23:02.721Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a9feeab4c6d652255822",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "swJlfEcs",
						idShort: 19,
						name: "bio section in sitecore",
						id: "59e7a8502de069c9b1e87051",
						desc: "we don't yet have a list of eligible employees"
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-18T19:22:38.500Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a9b70daccc3ebd9ef0a3",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "Checklist",
						id: "59e7a9b70daccc3ebd9ef0a2"
					},
					card: {
						shortLink: "swJlfEcs",
						idShort: 19,
						name: "bio section in sitecore",
						id: "59e7a8502de069c9b1e87051"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-18T19:21:27.027Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a9b483aa39e4509b264e",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					checklist: {
						name: "Make sure that the name makes sense for the bio image For reviewing bios, search the location in sitecore, you will see employee id’s in the results for the location. Look up the employee id in the excel sheet to verify that they are an eligible employee. Editing the bio is required only if there is something wrong with the bio. ",
						id: "59e7a9ae60f4364a45494b8f"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "swJlfEcs",
						idShort: 19,
						name: "bio section in sitecore",
						id: "59e7a8502de069c9b1e87051"
					}
				},
				type: "removeChecklistFromCard",
				date: "2017-10-18T19:21:24.557Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a9ae60f4364a45494b90",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "Make sure that the name makes sense for the bio image For reviewing bios, search the location in sitecore, you will see employee id’s in the results for the location. Look up the employee id in the excel sheet to verify that they are an eligible employee. Editing the bio is required only if there is something wrong with the bio. ",
						id: "59e7a9ae60f4364a45494b8f"
					},
					card: {
						shortLink: "swJlfEcs",
						idShort: 19,
						name: "bio section in sitecore",
						id: "59e7a8502de069c9b1e87051"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-18T19:21:18.591Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a932c10ee0ff580ebce7",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "Checklist",
						id: "59e7a932c10ee0ff580ebce6"
					},
					card: {
						shortLink: "ONOT5QFH",
						idShort: 18,
						name: "content section in sitecore",
						id: "59e7a8463038253bc379bd79"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-18T19:19:14.518Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a91cdf83d0ca7128d025",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "Checklist",
						id: "59e7a91cdf83d0ca7128d022"
					},
					card: {
						shortLink: "KKGGQFlM",
						idShort: 17,
						name: "intro section in sitecore",
						id: "59e7a83c68145b10cc02371d"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-18T19:18:52.624Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a8aabd0c9ac74b3278ba",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "Checklist",
						id: "59e7a8aabd0c9ac74b3278b9"
					},
					card: {
						shortLink: "5A49yx4M",
						idShort: 16,
						name: "when curating images in digizuite",
						id: "59e7a8318153dbfee6ceb8fe"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-18T19:16:58.892Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a87a2917a28dfcab0a70",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "Checklist",
						id: "59e7a87a2917a28dfcab0a6f"
					},
					card: {
						shortLink: "aPFPveZb",
						idShort: 15,
						name: "overview",
						id: "59e7a8250cd393fb26d6963a"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-18T19:16:10.137Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a8642207bbff2e88d0aa",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "5okrgyqk",
						idShort: 21,
						name: "teamwork website",
						id: "59e7a8642207bbff2e88d0a9"
					}
				},
				type: "createCard",
				date: "2017-10-18T19:15:48.969Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a8596f003b6f70446a99",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "iwB4wDqA",
						idShort: 20,
						name: "when done with a site",
						id: "59e7a8596f003b6f70446a97"
					}
				},
				type: "createCard",
				date: "2017-10-18T19:15:37.249Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a8502de069c9b1e87052",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "swJlfEcs",
						idShort: 19,
						name: "bio section in sitecore",
						id: "59e7a8502de069c9b1e87051"
					}
				},
				type: "createCard",
				date: "2017-10-18T19:15:28.477Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a8463038253bc379bd7a",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "ONOT5QFH",
						idShort: 18,
						name: "content section in sitecore",
						id: "59e7a8463038253bc379bd79"
					}
				},
				type: "createCard",
				date: "2017-10-18T19:15:18.394Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a83c68145b10cc02371e",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "KKGGQFlM",
						idShort: 17,
						name: "intro section in sitecore",
						id: "59e7a83c68145b10cc02371d"
					}
				},
				type: "createCard",
				date: "2017-10-18T19:15:08.765Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a8318153dbfee6ceb8ff",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "5A49yx4M",
						idShort: 16,
						name: "when curating images in digizuite",
						id: "59e7a8318153dbfee6ceb8fe"
					}
				},
				type: "createCard",
				date: "2017-10-18T19:14:57.810Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a8250cd393fb26d6963b",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "aPFPveZb",
						idShort: 15,
						name: "overview",
						id: "59e7a8250cd393fb26d6963a"
					}
				},
				type: "createCard",
				date: "2017-10-18T19:14:45.369Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e7a8150787b0b449275040",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						id: "59e64d9c090e715e98525f31",
						name: "notes"
					},
					old: {
						name: "7392"
					}
				},
				type: "updateList",
				date: "2017-10-18T19:14:29.401Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e766ea685c59d4a24b8f13",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "yUpHR364",
						idShort: 4,
						name: "teamwork",
						id: "59e5121b11cad25d31574ee0",
						desc: "username: james@jamesjsewell.co password: scijames"
					},
					old: {
						desc: "username: james@jamesjsewell.co password: IVquek5zQE"
					}
				},
				type: "updateCard",
				date: "2017-10-18T14:36:26.100Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e6573a9cf276c3bf400043",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e655c16c4d18ca18914bb1",
						pos: 458751
					},
					old: {
						pos: 327679
					}
				},
				type: "updateList",
				date: "2017-10-17T19:17:14.816Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e657399139fbb448503402",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "7392",
						id: "59e64d9c090e715e98525f31",
						pos: 393215
					},
					old: {
						pos: 262143
					}
				},
				type: "updateList",
				date: "2017-10-17T19:17:13.641Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e6573249d14353b90b94ee",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "7392",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "qpB6riCk",
						idShort: 10,
						name: "7392-images-2",
						id: "59e64fb709e717f1e0223f85",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:17:06.904Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e6573015af89e07d0e7e35",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "notes",
						id: "59e655c16c4d18ca18914bb1"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "Qq77qpvO",
						idShort: 9,
						name: "7392-images-1.jpg",
						id: "59e64faabbe591e33a4fdb71",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:17:04.890Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e6572ebb6e958dee7a4fb6",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					listAfter: {
						name: "notes",
						id: "59e655c16c4d18ca18914bb1"
					},
					listBefore: {
						name: "7392",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "Qq77qpvO",
						idShort: 9,
						name: "7392-images-1.jpg",
						id: "59e64faabbe591e33a4fdb71",
						idList: "59e655c16c4d18ca18914bb1"
					},
					old: {
						idList: "59e64d9c090e715e98525f31"
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:17:02.419Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e655c16c4d18ca18914bb2",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "notes",
						id: "59e655c16c4d18ca18914bb1"
					}
				},
				type: "createList",
				date: "2017-10-17T19:10:57.788Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e6559789f7c945de561030",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "JN6rsilZ",
						idShort: 14,
						name: "sitecore",
						id: "59e65564b85d6cb8eb736d91",
						desc: "corp\sewellj IVquek5zQE"
					},
					old: {
						desc: "corp\sewellj "
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:10:15.105Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e655805202573be4c26615",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "JN6rsilZ",
						idShort: 14,
						name: "sitecore",
						id: "59e65564b85d6cb8eb736d91",
						desc: "corp\sewellj "
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:09:52.633Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e65564b85d6cb8eb736d92",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					card: {
						shortLink: "JN6rsilZ",
						idShort: 14,
						name: "sitecore",
						id: "59e65564b85d6cb8eb736d91"
					}
				},
				type: "createCard",
				date: "2017-10-17T19:09:24.576Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e65515265a151100b278e9",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "8zBErGSK",
						idShort: 13,
						name: "evolution",
						id: "59e655079890dff60e8de5ba",
						desc: "james.sewell password1."
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:08:05.979Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e655079890dff60e8de5bb",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					card: {
						shortLink: "8zBErGSK",
						idShort: 13,
						name: "evolution",
						id: "59e655079890dff60e8de5ba"
					}
				},
				type: "createCard",
				date: "2017-10-17T19:07:51.766Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e654d065728953dff2b104",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "UYgzHdJV",
						idShort: 12,
						name: "digi",
						id: "59e654b773e6921afe830f07",
						desc: "https://library.svccorp.com/#!/ sci creds "
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:06:56.791Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e654b773e6921afe830f08",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					card: {
						shortLink: "UYgzHdJV",
						idShort: 12,
						name: "digi",
						id: "59e654b773e6921afe830f07"
					}
				},
				type: "createCard",
				date: "2017-10-17T19:06:31.916Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e653f2a313d6455fde431a",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "qUkydfD5",
						idShort: 11,
						name: "sci",
						id: "59e6538d2d2023113d0b39d9",
						desc: "user: sewelljj / corp\sewelljj password: IVquek5zQE"
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:03:14.277Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e6538d2d2023113d0b39da",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					card: {
						shortLink: "qUkydfD5",
						idShort: 11,
						name: "sci",
						id: "59e6538d2d2023113d0b39d9"
					}
				},
				type: "createCard",
				date: "2017-10-17T19:01:33.353Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e65385464fefd51e2a6c20",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "yUpHR364",
						idShort: 4,
						id: "59e5121b11cad25d31574ee0",
						name: "teamwork"
					},
					old: {
						name: "teamworks"
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:01:25.217Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e65381760b30e4232d6dda",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "credentials",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "yUpHR364",
						idShort: 4,
						id: "59e5121b11cad25d31574ee0",
						name: "teamworks"
					},
					old: {
						name: "creds"
					}
				},
				type: "updateCard",
				date: "2017-10-17T19:01:21.672Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e653759094f2eaf2a310a7",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						id: "59e5121867a12bec17fa320a",
						name: "credentials"
					},
					old: {
						name: "teamwork website"
					}
				},
				type: "updateList",
				date: "2017-10-17T19:01:09.547Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64fb709e717f1e0223f86",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "7392",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "qpB6riCk",
						idShort: 10,
						name: "7392-images-2",
						id: "59e64fb709e717f1e0223f85"
					}
				},
				type: "createCard",
				date: "2017-10-17T18:45:11.683Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64faabbe591e33a4fdb72",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "7392",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "Qq77qpvO",
						idShort: 9,
						name: "7392-images-1.jpg",
						id: "59e64faabbe591e33a4fdb71"
					}
				},
				type: "createCard",
				date: "2017-10-17T18:44:58.079Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64f9aedcd47fffdb16510",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "7392",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "QC0bDYbR",
						idShort: 8,
						name: "2433|0458",
						id: "59e64ed0455d82c692ceb656",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateCard",
				date: "2017-10-17T18:44:42.179Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64f9738d7efe05fd33d02",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "7392",
						id: "59e64d9c090e715e98525f31"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "9UZ6czo5",
						idShort: 7,
						name: "7392",
						id: "59e64da9022367618eb83900",
						closed: true
					},
					old: {
						closed: false
					}
				},
				type: "updateCard",
				date: "2017-10-17T18:44:39.218Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64f8e8f222e7a91de057a",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						id: "59e64d9c090e715e98525f31",
						name: "7392"
					},
					old: {
						name: "assignments oct 17"
					}
				},
				type: "updateList",
				date: "2017-10-17T18:44:30.869Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64f4dc102f1f76489c581",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					checklist: {
						name: "images order",
						id: "59e64f4dc102f1f76489c580"
					},
					card: {
						shortLink: "9UZ6czo5",
						idShort: 7,
						name: "7392",
						id: "59e64da9022367618eb83900"
					}
				},
				type: "addChecklistToCard",
				date: "2017-10-17T18:43:25.700Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64ed0455d82c692ceb657",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "assignments oct 17",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "QC0bDYbR",
						idShort: 8,
						name: "2433|0458",
						id: "59e64ed0455d82c692ceb656"
					}
				},
				type: "createCard",
				date: "2017-10-17T18:41:20.208Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64da9022367618eb83904",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "assignments oct 17",
						id: "59e64d9c090e715e98525f31"
					},
					card: {
						shortLink: "9UZ6czo5",
						idShort: 7,
						name: "7392",
						id: "59e64da9022367618eb83900"
					}
				},
				type: "createCard",
				date: "2017-10-17T18:36:25.343Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e64d9c090e715e98525f32",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "assignments oct 17",
						id: "59e64d9c090e715e98525f31"
					}
				},
				type: "createList",
				date: "2017-10-17T18:36:12.455Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e632a758326f5bbfbbbb57",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "teamwork website",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "yUpHR364",
						idShort: 4,
						name: "creds",
						id: "59e5121b11cad25d31574ee0",
						desc: "username: james@jamesjsewell.co password: IVquek5zQE"
					},
					old: {
						desc: "scijames"
					}
				},
				type: "updateCard",
				date: "2017-10-17T16:41:11.051Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e6325cc3c8f8875f854e5c",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "teamwork website",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "yUpHR364",
						idShort: 4,
						id: "59e5121b11cad25d31574ee0",
						name: "creds"
					},
					old: {
						name: "password"
					}
				},
				type: "updateCard",
				date: "2017-10-17T16:39:56.235Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e61bc16f6c65971669183a",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						id: "59e5121867a12bec17fa320a",
						name: "teamwork website"
					},
					old: {
						name: "teamwork"
					}
				},
				type: "updateList",
				date: "2017-10-17T15:03:29.223Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e61ab4218b7975307bebe8",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "sci network creds",
						id: "59e61aa2159c96fbfc262afb"
					},
					card: {
						shortLink: "5wkMgzez",
						idShort: 6,
						name: "corp\sewelljj",
						id: "59e61ab4218b7975307bebe7"
					}
				},
				type: "createCard",
				date: "2017-10-17T14:59:00.769Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e61aab485e9852705d7677",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "sci network creds",
						id: "59e61aa2159c96fbfc262afb"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "nlN99Z3e",
						idShort: 5,
						name: "sewelljj",
						id: "59e61aa54a4db92732b7ab2c",
						desc: "IVquek5zQE"
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-17T14:58:51.635Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e61aa54a4db92732b7ab2d",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "sci network creds",
						id: "59e61aa2159c96fbfc262afb"
					},
					card: {
						shortLink: "nlN99Z3e",
						idShort: 5,
						name: "sewelljj",
						id: "59e61aa54a4db92732b7ab2c"
					}
				},
				type: "createCard",
				date: "2017-10-17T14:58:45.933Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e61aa2159c96fbfc262afc",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "sci network creds",
						id: "59e61aa2159c96fbfc262afb"
					}
				},
				type: "createList",
				date: "2017-10-17T14:58:42.527Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e51252be72d892d7db0546",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "teamwork",
						id: "59e5121867a12bec17fa320a"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "yUpHR364",
						idShort: 4,
						name: "password",
						id: "59e5121b11cad25d31574ee0",
						desc: "scijames"
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-16T20:10:58.776Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e5121b11cad25d31574ee1",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "teamwork",
						id: "59e5121867a12bec17fa320a"
					},
					card: {
						shortLink: "yUpHR364",
						idShort: 4,
						name: "password",
						id: "59e5121b11cad25d31574ee0"
					}
				},
				type: "createCard",
				date: "2017-10-16T20:10:03.271Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e5121867a12bec17fa320b",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "teamwork",
						id: "59e5121867a12bec17fa320a"
					}
				},
				type: "createList",
				date: "2017-10-16T20:10:00.022Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e50e653767d6c65e461ebb",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					list: {
						name: "assigned locations from friday and monday",
						id: "59e50e1cb6c87411d14daa50"
					},
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					card: {
						shortLink: "is1pqfE4",
						idShort: 1,
						name: "9588",
						id: "59e50e2a174ca31f9419e379",
						desc: "ordered gallery images, added hero images."
					},
					old: {
						desc: ""
					}
				},
				type: "updateCard",
				date: "2017-10-16T19:54:13.160Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e50e31168d815d80a944bf",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "assigned locations from friday and monday",
						id: "59e50e1cb6c87411d14daa50"
					},
					card: {
						shortLink: "T5GhGHLR",
						idShort: 3,
						name: "7392",
						id: "59e50e31168d815d80a944be"
					}
				},
				type: "createCard",
				date: "2017-10-16T19:53:21.950Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e50e305e569d05c1899b13",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "assigned locations from friday and monday",
						id: "59e50e1cb6c87411d14daa50"
					},
					card: {
						shortLink: "GcI4fpjU",
						idShort: 2,
						name: "9586",
						id: "59e50e305e569d05c1899b12"
					}
				},
				type: "createCard",
				date: "2017-10-16T19:53:20.123Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e50e2a174ca31f9419e37a",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "assigned locations from friday and monday",
						id: "59e50e1cb6c87411d14daa50"
					},
					card: {
						shortLink: "is1pqfE4",
						idShort: 1,
						name: "9588",
						id: "59e50e2a174ca31f9419e379"
					}
				},
				type: "createCard",
				date: "2017-10-16T19:53:14.566Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e50e1cb6c87411d14daa51",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "sci",
						id: "59e4d6011ec4404c12e0e260"
					},
					list: {
						name: "assigned locations from friday and monday",
						id: "59e50e1cb6c87411d14daa50"
					}
				},
				type: "createList",
				date: "2017-10-16T19:53:00.218Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e50e07fdb3bb42e3076761",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						id: "59e4d6011ec4404c12e0e260",
						name: "sci"
					},
					old: {
						name: "today"
					}
				},
				type: "updateBoard",
				date: "2017-10-16T19:52:39.560Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			},
			{
				id: "59e4d6011ec4404c12e0e262",
				idMemberCreator: "58dd3e262c745d20e675ec3a",
				data: {
					board: {
						shortLink: "MgwRxq3f",
						name: "today",
						id: "59e4d6011ec4404c12e0e260"
					}
				},
				type: "createBoard",
				date: "2017-10-16T15:53:37.617Z",
				memberCreator: {
					id: "58dd3e262c745d20e675ec3a",
					avatarHash: null,
					fullName: "jamesjsewell",
					initials: "J",
					username: "jamesjsewell"
				}
			}
		],
		cards: [
			{
				id: "59e50e2a174ca31f9419e379",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-16T19:54:13.157Z",
				desc: "ordered gallery images, added hero images.",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e50e1cb6c87411d14daa50",
				idMembersVoted: [],
				idShort: 1,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "9588",
				pos: 65535,
				shortLink: "is1pqfE4",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3p4s1wro0ye2imcmx+277ftp94yb@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/is1pqfE4",
				subscribed: false,
				url: "https://trello.com/c/is1pqfE4/1-9588",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e50e305e569d05c1899b12",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-16T19:53:20.107Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e50e1cb6c87411d14daa50",
				idMembersVoted: [],
				idShort: 2,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "9586",
				pos: 131071,
				shortLink: "GcI4fpjU",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3p4sqck2wr57esg7m+0rzw4y1nvz@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/GcI4fpjU",
				subscribed: false,
				url: "https://trello.com/c/GcI4fpjU/2-9586",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e50e31168d815d80a944be",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-16T19:53:21.916Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e50e1cb6c87411d14daa50",
				idMembersVoted: [],
				idShort: 3,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "7392",
				pos: 196607,
				shortLink: "T5GhGHLR",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3p4st5eoi2ca8khby+1s99d793ce@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/T5GhGHLR",
				subscribed: false,
				url: "https://trello.com/c/T5GhGHLR/3-7392",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e5121b11cad25d31574ee0",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T14:36:26.097Z",
				desc: "username: james@jamesjsewell.co password: scijames",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e5121867a12bec17fa320a",
				idMembersVoted: [],
				idShort: 4,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "teamwork",
				pos: 65535,
				shortLink: "yUpHR364",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3p7t5wtbjyslak3xc+0yb66wm3pr@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/yUpHR364",
				subscribed: false,
				url: "https://trello.com/c/yUpHR364/4-teamwork",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e6538d2d2023113d0b39d9",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-17T19:03:14.270Z",
				desc: "user: sewelljj / corp\sewelljj password: IVquek5zQE",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e5121867a12bec17fa320a",
				idMembersVoted: [],
				idShort: 11,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "sci",
				pos: 131071,
				shortLink: "qUkydfD5",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3w3017p1vlmk9v2zd+1fuzk1yivv@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/qUkydfD5",
				subscribed: false,
				url: "https://trello.com/c/qUkydfD5/11-sci",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e654b773e6921afe830f07",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-17T19:06:56.788Z",
				desc: "https://library.svccorp.com/#!/ sci creds ",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e5121867a12bec17fa320a",
				idMembersVoted: [],
				idShort: 12,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "digi",
				pos: 196607,
				shortLink: "UYgzHdJV",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3w3waf21wzfniy5mv+24h6d5anvk@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/UYgzHdJV",
				subscribed: false,
				url: "https://trello.com/c/UYgzHdJV/12-digi",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e655079890dff60e8de5ba",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-17T19:08:05.977Z",
				desc: "james.sewell password1.",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e5121867a12bec17fa320a",
				idMembersVoted: [],
				idShort: 13,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "evolution",
				pos: 262143,
				shortLink: "8zBErGSK",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3w44yf3uhmlr9zanu+247az6npa1@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/8zBErGSK",
				subscribed: false,
				url: "https://trello.com/c/8zBErGSK/13-evolution",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e65564b85d6cb8eb736d91",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-17T19:10:15.102Z",
				desc: "corp\sewellj IVquek5zQE",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e5121867a12bec17fa320a",
				idMembersVoted: [],
				idShort: 14,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "sitecore",
				pos: 327679,
				shortLink: "JN6rsilZ",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3w4f0yfst2vgvpmkx+1mdj5bx8pv@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/JN6rsilZ",
				subscribed: false,
				url: "https://trello.com/c/JN6rsilZ/14-sitecore",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7a8250cd393fb26d6963a",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:48:19.369Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 15,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "overview",
				pos: 65535,
				shortLink: "aPFPveZb",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 4,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 1,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43cwzbtqrutq3owmy+1yyz091cck@boards.trello.com",
				idChecklists: ["59e7a87a2917a28dfcab0a6f"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/aPFPveZb",
				subscribed: false,
				url: "https://trello.com/c/aPFPveZb/15-overview",
				attachments: [
					{
						bytes: 321,
						date: "2017-10-18T19:48:19.285Z",
						edgeColor: null,
						idMember: "58dd3e262c745d20e675ec3a",
						isUpload: true,
						mimeType: null,
						name: "Untitled Diagram.xml",
						previews: [],
						url: "https://trello-attachments.s3.amazonaws.com/59e4d6011ec4404c12e0e260/59e7a8250cd393fb26d6963a/4e20f60db3f5de2f6057519dd137e936/Untitled_Diagram.xml",
						pos: 16384,
						id: "59e7b003597708455d64baa8"
					}
				],
				pluginData: []
			},
			{
				id: "59e64da9022367618eb83900",
				checkItemStates: null,
				closed: true,
				dateLastActivity: "2017-10-17T18:44:39.216Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 7,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "7392",
				pos: 65535,
				shortLink: "9UZ6czo5",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 4,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3vygxue6yv9dntnuo+0ed2vrj8hz@boards.trello.com",
				idChecklists: ["59e64f4dc102f1f76489c580"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/9UZ6czo5",
				subscribed: false,
				url: "https://trello.com/c/9UZ6czo5/7-7392",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7a8318153dbfee6ceb8fe",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T17:12:05.590Z",
				desc: " laura noticed that if she changed the index order of images we don't understand how long the change will take to affect sitecore, they will let us know. ",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 16,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "when curating images in digizuite",
				pos: 131071,
				shortLink: "5A49yx4M",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 3,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43cybtehkiee6sxz2+1its3ra0qg@boards.trello.com",
				idChecklists: ["59e7a8aabd0c9ac74b3278b9"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/5A49yx4M",
				subscribed: false,
				url: "https://trello.com/c/5A49yx4M/16-when-curating-images-in-digizuite",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e64ed0455d82c692ceb656",
				checkItemStates: null,
				closed: true,
				dateLastActivity: "2017-10-17T18:44:42.177Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 8,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "2433|0458",
				pos: 131071,
				shortLink: "QC0bDYbR",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3vzcvbd3h9r2nb9zq+101sl7nftm@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/QC0bDYbR",
				subscribed: false,
				url: "https://trello.com/c/QC0bDYbR/8-24330458",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e64fb709e717f1e0223f85",
				checkItemStates: null,
				closed: true,
				dateLastActivity: "2017-10-17T19:17:06.887Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 10,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "7392-images-2",
				pos: 131071,
				shortLink: "qpB6riCk",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3w01tpe6x7jl8f7gl+12tujjmxbn@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/qpB6riCk",
				subscribed: false,
				url: "https://trello.com/c/qpB6riCk/10-7392-images-2",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7a83c68145b10cc02371d",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:18:58.484Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 17,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "intro section in sitecore",
				pos: 196607,
				shortLink: "KKGGQFlM",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 1,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43czi9866nn5rcf8d+1x1gud35mt@boards.trello.com",
				idChecklists: ["59e7a91cdf83d0ca7128d022"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/KKGGQFlM",
				subscribed: false,
				url: "https://trello.com/c/KKGGQFlM/17-intro-section-in-sitecore",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7a8463038253bc379bd79",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T16:45:20.168Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 18,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "content section in sitecore",
				pos: 262143,
				shortLink: "ONOT5QFH",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 7,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43d0kc557vnevfkop+12boqnarl9@boards.trello.com",
				idChecklists: ["59e7a932c10ee0ff580ebce6"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/ONOT5QFH",
				subscribed: false,
				url: "https://trello.com/c/ONOT5QFH/18-content-section-in-sitecore",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7a8502de069c9b1e87051",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-20T16:30:39.304Z",
				desc: "we don't yet have a list of eligible employees",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 19,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "bio section in sitecore",
				pos: 327679,
				shortLink: "swJlfEcs",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 3,
					checkItemsChecked: 0,
					comments: 1,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43d1n8cvc5t1bm7v5+2qezwitj3b@boards.trello.com",
				idChecklists: ["59e7a9b70daccc3ebd9ef0a2"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/swJlfEcs",
				subscribed: false,
				url: "https://trello.com/c/swJlfEcs/19-bio-section-in-sitecore",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7a8596f003b6f70446a97",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:23:26.935Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 20,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "when done with a site",
				pos: 393215,
				shortLink: "iwB4wDqA",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 3,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43d2n9cvsosyf928n+0qpxdu9ucm@boards.trello.com",
				idChecklists: ["59e7aa16d792891a1e55532a"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/iwB4wDqA",
				subscribed: false,
				url: "https://trello.com/c/iwB4wDqA/20-when-done-with-a-site",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7a8642207bbff2e88d0a9",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:24:14.061Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 21,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "teamwork website",
				pos: 458751,
				shortLink: "5okrgyqk",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 4,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43d3swv6skpaps9m1+17263bt2is@boards.trello.com",
				idChecklists: ["59e7aa43f6a58b6e3560b0ba"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/5okrgyqk",
				subscribed: false,
				url: "https://trello.com/c/5okrgyqk/21-teamwork-website",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8d70bc049b974a7b88edd",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T16:47:44.508Z",
				desc: "spanish sites are currently still being wired up and may not work correctly. ",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 32,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "spanish sites",
				pos: 524287,
				shortLink: "obtsI4Vf",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p49tugr5hiq1tskst9+13pgpofirn@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/obtsI4Vf",
				subscribed: false,
				url: "https://trello.com/c/obtsI4Vf/32-spanish-sites",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8efbb562d31144e91651a",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T18:32:44.280Z",
				desc: "long name should always be used for combos ",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e64d9c090e715e98525f31",
				idMembersVoted: [],
				idShort: 35,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "combo locations",
				pos: 589823,
				shortLink: "IFTVE014",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4actv78zbs99vdfyy+0sifx4nric@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/IFTVE014",
				subscribed: false,
				url: "https://trello.com/c/IFTVE014/35-combo-locations",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e61aa54a4db92732b7ab2c",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-17T21:28:51.678Z",
				desc: "IVquek5zQE",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e61aa2159c96fbfc262afb",
				idMembersVoted: [],
				idShort: 5,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "sewelljj",
				pos: 65535,
				shortLink: "nlN99Z3e",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3uv8nqn7d5ru8sros+193lftct5s@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/nlN99Z3e",
				subscribed: false,
				url: "https://trello.com/c/nlN99Z3e/5-sewelljj",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e61ab4218b7975307bebe7",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-17T14:59:00.751Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e61aa2159c96fbfc262afb",
				idMembersVoted: [],
				idShort: 6,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "corp\sewelljj",
				pos: 131071,
				shortLink: "5wkMgzez",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3uva9ikr43pxr7pif+1efeq72d1z@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/5wkMgzez",
				subscribed: false,
				url: "https://trello.com/c/5wkMgzez/6-corp-sewelljj",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8c62abdb8483821f424ad",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T15:35:06.970Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8c4dbd21666f8d6d0ef69",
				idMembersVoted: [],
				idShort: 29,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "done with pilot review process",
				pos: 65535,
				shortLink: "wODVcVRw",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p49gv6uu1ug1scopt9+0xhh3dt4ai@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/wODVcVRw",
				subscribed: false,
				url: "https://trello.com/c/wODVcVRw/29-done-with-pilot-review-process",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8c631c7e299170e10e0f8",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T15:35:13.294Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8c4dbd21666f8d6d0ef69",
				idMembersVoted: [],
				idShort: 30,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "sprint one getting assigned today",
				pos: 131071,
				shortLink: "RKRUKehK",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p49gvy9g4ejz1erdvc+208g7wojnj@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/RKRUKehK",
				subscribed: false,
				url: "https://trello.com/c/RKRUKehK/30-sprint-one-getting-assigned-today",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8c632cac1fb1e6fffce76",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T16:20:30.983Z",
				desc: "captions it is a known but that we have an ampersand, not something we can correct, don't worry about it. spanish was giving issues, they are still wiring up spanish, it is not currently working the eyebrow doesn't show up sometimes, mostly on combo locations but on standalone laura noticed that if she changed the order, in digi, we don't understand how long the change will take to affect sitecore, they will let us know. when setting the sort index, the channel must be set to sitecore in digizuite. required info > channel. make sure that site core is in the list of channels. sort index should be set, not the priority bio's clicked tab, it's rebuilding an old version of the page, have to click the button a second time to get the bio to open lock and edit, when finished make sure to unlock item. Two ways, check in under edit, or save changes will also check it in. left or right align images. left is preferred unless there is a large list of images. make sure each paragraph has a p tag back to overview to see all of the tasks, pilot 3, assign to reviewer and notify by email sitecore training has been added to files location spreadsheet has name of location, how many associates, etc. will be uploaded to teamwork if a location has a really long name alert erica dont put a display name in sitecore unless they tell us to. funeraria del is putting an unnecessary apostrophe 30 minute to 45 for cornerstone 20 minute review i have about 30 locations ",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8c4dbd21666f8d6d0ef69",
				idMembersVoted: [],
				idShort: 31,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "bugs",
				pos: 196607,
				shortLink: "5wPIkPej",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 2,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p49gw2764k33iz4o6u+0v5knnxm75@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/5wPIkPej",
				subscribed: false,
				url: "https://trello.com/c/5wPIkPej/31-bugs",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e64faabbe591e33a4fdb71",
				checkItemStates: null,
				closed: true,
				dateLastActivity: "2017-10-17T19:17:04.887Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e655c16c4d18ca18914bb1",
				idMembersVoted: [],
				idShort: 9,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "7392-images-1.jpg",
				pos: 65535,
				shortLink: "Qq77qpvO",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p3w00hsw4qkyrazbld+2hj0eoe3hv@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/Qq77qpvO",
				subscribed: false,
				url: "https://trello.com/c/Qq77qpvO/9-7392-images-1jpg",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7acc32bf63de0af47942e",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:34:27.235Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e7acc32bf63de0af47942b",
				idMembersVoted: [],
				idShort: 22,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "overview",
				pos: 65535,
				shortLink: "SIteMg38",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 4,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43ggtdtze2a9b12y6+268gc88hnx@boards.trello.com",
				idChecklists: ["59e7acc32bf63de0af479434"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/SIteMg38",
				subscribed: false,
				url: "https://trello.com/c/SIteMg38/22-overview",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7acc32bf63de0af47942d",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:34:27.249Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e7acc32bf63de0af47942b",
				idMembersVoted: [],
				idShort: 23,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "when curating images in digizuite",
				pos: 131071,
				shortLink: "cc7qh5jG",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 3,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43ggtdtze2a9b12y5+1jvejt4fg7@boards.trello.com",
				idChecklists: ["59e7acc32bf63de0af47943d"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/cc7qh5jG",
				subscribed: false,
				url: "https://trello.com/c/cc7qh5jG/23-when-curating-images-in-digizuite",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7acc32bf63de0af479431",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:34:27.280Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e7acc32bf63de0af47942b",
				idMembersVoted: [],
				idShort: 26,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "intro section in sitecore",
				pos: 196607,
				shortLink: "raQegArq",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 1,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43ggtdtze2a9b12y9+1no76thc94@boards.trello.com",
				idChecklists: ["59e7acc32bf63de0af479450"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/raQegArq",
				subscribed: false,
				url: "https://trello.com/c/raQegArq/26-intro-section-in-sitecore",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7acc32bf63de0af479430",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:34:27.258Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e7acc32bf63de0af47942b",
				idMembersVoted: [],
				idShort: 25,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "content section in sitecore",
				pos: 262143,
				shortLink: "wfvKoIxo",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 5,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43ggtdtze2a9b12y8+09jw76izox@boards.trello.com",
				idChecklists: ["59e7acc32bf63de0af479441"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/wfvKoIxo",
				subscribed: false,
				url: "https://trello.com/c/wfvKoIxo/25-content-section-in-sitecore",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7acc32bf63de0af47942f",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:34:27.250Z",
				desc: "we don't yet have a list of eligible employees",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e7acc32bf63de0af47942b",
				idMembersVoted: [],
				idShort: 24,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "bio section in sitecore",
				pos: 327679,
				shortLink: "YBosFEbO",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 3,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43ggtdtze2a9b12y7+006mla5nqt@boards.trello.com",
				idChecklists: ["59e7acc32bf63de0af479439"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/YBosFEbO",
				subscribed: false,
				url: "https://trello.com/c/YBosFEbO/24-bio-section-in-sitecore",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7acc32bf63de0af479433",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:34:27.272Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e7acc32bf63de0af47942b",
				idMembersVoted: [],
				idShort: 28,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "when done with a site",
				pos: 393215,
				shortLink: "MWEYMaSS",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 3,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43ggtdtze2a9b12yb+26mjqqtyz3@boards.trello.com",
				idChecklists: ["59e7acc32bf63de0af47944c"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/MWEYMaSS",
				subscribed: false,
				url: "https://trello.com/c/MWEYMaSS/28-when-done-with-a-site",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e7acc32bf63de0af479432",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-18T19:34:27.272Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e7acc32bf63de0af47942b",
				idMembersVoted: [],
				idShort: 27,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "teamwork website",
				pos: 458751,
				shortLink: "pnyNHVe9",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 4,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p43ggtdtze2a9b12ya+2n9i7qowkp@boards.trello.com",
				idChecklists: ["59e7acc32bf63de0af479447"],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/pnyNHVe9",
				subscribed: false,
				url: "https://trello.com/c/pnyNHVe9/27-teamwork-website",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e9152afef8f315f7b25ce6",
				checkItemStates: null,
				closed: true,
				dateLastActivity: "2017-10-19T21:47:30.154Z",
				desc: "exterior-building-4 signage",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e6b7a8bd3153cf6dab01",
				idMembersVoted: [],
				idShort: 42,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4118",
				pos: 65535,
				shortLink: "xoQid7QU",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4b5m8ud1est2f9lnq+0zhftp58ys@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/xoQid7QU",
				subscribed: false,
				url: "https://trello.com/c/xoQid7QU/42-4118",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8e5ee81233e885517c742",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T17:50:38.488Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 33,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "1461",
				pos: 65535,
				shortLink: "txRmxikV",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4a5ak74yunikw2req+19gx1jhv1w@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/txRmxikV",
				subscribed: false,
				url: "https://trello.com/c/txRmxikV/33-1461",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8e6cdfd9b50ce667547ef",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T18:20:25.376Z",
				desc: "front-exterior-2 hero image signage-1 gallery image ",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 34,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "2396",
				pos: 131071,
				shortLink: "XBOyXv9n",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4a5yq8nyznvbg0ohb+044feqy36b@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/XBOyXv9n",
				subscribed: false,
				url: "https://trello.com/c/XBOyXv9n/34-2396",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8f311b2533ae0d0f85b3d",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T19:03:13.251Z",
				desc: "front exterior 1 sitting area 5 ",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 36,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "2739",
				pos: 196607,
				shortLink: "5c6VSsBa",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4afe99jvwfmuotdtp+0nshbd133i@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/5c6VSsBa",
				subscribed: false,
				url: "https://trello.com/c/5c6VSsBa/36-2739",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8fb10c039757db4794598",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T19:36:05.617Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 37,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "2741",
				pos: 262143,
				shortLink: "6ErmHyr8",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4aljmjmi4f83tximw+16e30332bo@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/6ErmHyr8",
				subscribed: false,
				url: "https://trello.com/c/6ErmHyr8/37-2741",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e8ff7fbed025ef452b431e",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T19:51:45.165Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 38,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4030",
				pos: 327679,
				shortLink: "GiR2WwIN",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4aoyd4rz78c4emof2+202a8kyxs8@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/GiR2WwIN",
				subscribed: false,
				url: "https://trello.com/c/GiR2WwIN/38-4030",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e90a756485bafc9b5b257a",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T20:26:29.171Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 39,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4048",
				pos: 393215,
				shortLink: "UHKWbq9w",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4axdrnfxh796mwiuy+0184srnytr@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/UHKWbq9w",
				subscribed: false,
				url: "https://trello.com/c/UHKWbq9w/39-4048",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e90eb95f0e0688b54e5c8e",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T20:44:41.400Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 40,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4049",
				pos: 458751,
				shortLink: "daQDUgHW",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4b0nurxpefnxwyzke+2k9tkfxera@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/daQDUgHW",
				subscribed: false,
				url: "https://trello.com/c/daQDUgHW/40-4049",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e911cd2683f46a360aacdf",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T21:12:06.411Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 41,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4117",
				pos: 524287,
				shortLink: "hbtlggu8",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4b311mygtpv5te40v+2j7h4zj3gb@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/hbtlggu8",
				subscribed: false,
				url: "https://trello.com/c/hbtlggu8/41-4117",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e91bc1cc9430e9482d5b9b",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T21:40:17.811Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 43,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4118",
				pos: 589823,
				shortLink: "0fwCf1dk",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4baonnc9037pyrrtn+0yiyecggcs@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/0fwCf1dk",
				subscribed: false,
				url: "https://trello.com/c/0fwCf1dk/43-4118",
				attachments: [],
				pluginData: []
			},
			{
				id: "59e91d78d3976452ef92cb15",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-19T21:47:39.662Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 44,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4148",
				pos: 655359,
				shortLink: "KxSFj0T0",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4bc04swizdkye0zrp+2on1ye7guj@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/KxSFj0T0",
				subscribed: false,
				url: "https://trello.com/c/KxSFj0T0/44-4148",
				attachments: [],
				pluginData: []
			},
			{
				id: "59ea06ff7fb020f6a00f5618",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-20T14:23:59.530Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 45,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "check for gallery ^",
				pos: 720895,
				shortLink: "gw8wMFTE",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4gbl1lacfa32fkz6g+2bevb596g8@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/gw8wMFTE",
				subscribed: false,
				url: "https://trello.com/c/gw8wMFTE/45-check-for-gallery",
				attachments: [],
				pluginData: []
			},
			{
				id: "59ea0bd0aa80401ac5c0623b",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-20T14:44:32.573Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 46,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4148",
				pos: 786431,
				shortLink: "n6N60IAE",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4gfaedblttj3d9mbf+27saftcapg@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/n6N60IAE",
				subscribed: false,
				url: "https://trello.com/c/n6N60IAE/46-4148",
				attachments: [],
				pluginData: []
			},
			{
				id: "59ea0c4734d8fb0d1f0442cf",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-20T16:46:20.137Z",
				desc: "sitting area 2 sitting area 1",
				descData: {
					emoji: {}
				},
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 47,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "4952",
				pos: 851967,
				shortLink: "agI0y03D",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: true,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4gfn7uq77onve0827+1sdviyq030@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/agI0y03D",
				subscribed: false,
				url: "https://trello.com/c/agI0y03D/47-4952",
				attachments: [],
				pluginData: []
			},
			{
				id: "59ea286264c65f75d75b17f6",
				checkItemStates: null,
				closed: false,
				dateLastActivity: "2017-10-20T17:03:35.415Z",
				desc: "",
				descData: null,
				idBoard: "59e4d6011ec4404c12e0e260",
				idList: "59e8e5e34e73083bb0fd6d91",
				idMembersVoted: [],
				idShort: 48,
				idAttachmentCover: null,
				limits: {
					attachments: {
						perCard: {
							status: "ok",
							disableAt: 950,
							warnAt: 900
						}
					},
					checklists: {
						perCard: {
							status: "ok",
							disableAt: 475,
							warnAt: 450
						}
					},
					stickers: {
						perCard: {
							status: "ok",
							disableAt: 67,
							warnAt: 63
						}
					}
				},
				idLabels: [],
				manualCoverAttachment: false,
				name: "5226",
				pos: 917503,
				shortLink: "eAnT4CLR",
				badges: {
					votes: 0,
					attachmentsByType: {
						trello: {
							board: 0,
							card: 0
						}
					},
					viewingMemberVoted: false,
					subscribed: false,
					fogbugz: "",
					checkItems: 0,
					checkItemsChecked: 0,
					comments: 0,
					attachments: 0,
					description: false,
					due: null,
					dueComplete: false
				},
				dueComplete: false,
				due: null,
				email: "jamesjsewell+2nzmhs5w1oyx4laou2i+2p4h19b25jrpeprl14m+16fttxxs8t@boards.trello.com",
				idChecklists: [],
				idMembers: [],
				labels: [],
				shortUrl: "https://trello.com/c/eAnT4CLR",
				subscribed: false,
				url: "https://trello.com/c/eAnT4CLR/48-5226",
				attachments: [],
				pluginData: []
			}
		],
		labels: [
			{
				id: "59e4d6011314a339992cd8d6",
				idBoard: "59e4d6011ec4404c12e0e260",
				name: "",
				color: "yellow",
				uses: 0
			},
			{
				id: "59e4d6011314a339992cd8d7",
				idBoard: "59e4d6011ec4404c12e0e260",
				name: "",
				color: "green",
				uses: 0
			},
			{
				id: "59e4d6011314a339992cd8d8",
				idBoard: "59e4d6011ec4404c12e0e260",
				name: "",
				color: "red",
				uses: 0
			},
			{
				id: "59e4d6011314a339992cd8d9",
				idBoard: "59e4d6011ec4404c12e0e260",
				name: "",
				color: "orange",
				uses: 0
			},
			{
				id: "59e4d6011314a339992cd8da",
				idBoard: "59e4d6011ec4404c12e0e260",
				name: "",
				color: "blue",
				uses: 0
			},
			{
				id: "59e4d6011314a339992cd8db",
				idBoard: "59e4d6011ec4404c12e0e260",
				name: "",
				color: "purple",
				uses: 0
			}
		],
		lists: [
			{
				id: "59e50e1cb6c87411d14daa50",
				name: "assigned locations from friday and monday",
				closed: true,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 65535,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			},
			{
				id: "59e5121867a12bec17fa320a",
				name: "credentials",
				closed: false,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 131071,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			},
			{
				id: "59e64d9c090e715e98525f31",
				name: "notes",
				closed: false,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 393215,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			},
			{
				id: "59e61aa2159c96fbfc262afb",
				name: "sci network creds",
				closed: true,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 458751,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			},
			{
				id: "59e8c4dbd21666f8d6d0ef69",
				name: "meeting oct 19",
				closed: false,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 462847,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			},
			{
				id: "59e655c16c4d18ca18914bb1",
				name: "notes",
				closed: true,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 466943,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			},
			{
				id: "59e7acc32bf63de0af47942b",
				name: "234",
				closed: true,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 475135,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			},
			{
				id: "59e8e6b7a8bd3153cf6dab01",
				name: "in progress",
				closed: false,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 495615,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			},
			{
				id: "59e8e5e34e73083bb0fd6d91",
				name: "done",
				closed: false,
				idBoard: "59e4d6011ec4404c12e0e260",
				pos: 528383,
				subscribed: false,
				limits: {
					cards: {
						openPerList: {
							status: "ok",
							disableAt: 4750,
							warnAt: 4500
						},
						totalPerList: {
							status: "ok",
							disableAt: 950000,
							warnAt: 900000
						}
					}
				}
			}
		],
		members: [
			{
				id: "58dd3e262c745d20e675ec3a",
				avatarHash: null,
				bio: "",
				bioData: null,
				confirmed: true,
				fullName: "jamesjsewell",
				idPremOrgsAdmin: [],
				initials: "J",
				memberType: "normal",
				products: [],
				status: "disconnected",
				url: "https://trello.com/jamesjsewell",
				username: "jamesjsewell"
			}
		],
		checklists: [
			{
				id: "59e64f4dc102f1f76489c580",
				name: "images order",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e64da9022367618eb83900",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e64f4dc102f1f76489c580",
						id: "59e64f65b273fcca931ba0bc",
						name: "images323",
						nameData: null,
						pos: 16879
					},
					{
						state: "incomplete",
						idChecklist: "59e64f4dc102f1f76489c580",
						id: "59e64f69b499ed76070919a9",
						name: "images1234",
						nameData: null,
						pos: 33580
					},
					{
						state: "incomplete",
						idChecklist: "59e64f4dc102f1f76489c580",
						id: "59e64f6d8f22ebc6a1a15756",
						name: "images22445",
						nameData: null,
						pos: 50502
					},
					{
						state: "incomplete",
						idChecklist: "59e64f4dc102f1f76489c580",
						id: "59e64f70896eb842e4e8498d",
						name: "images1234",
						nameData: null,
						pos: 67823
					}
				]
			},
			{
				id: "59e7a87a2917a28dfcab0a6f",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7a8250cd393fb26d6963a",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7a87a2917a28dfcab0a6f",
						id: "59e7a87e407cd3d6b0350bb7",
						name: "review assigned location",
						nameData: null,
						pos: 17198
					},
					{
						state: "incomplete",
						idChecklist: "59e7a87a2917a28dfcab0a6f",
						id: "59e7a88b05e14455da93264a",
						name: "curate the photos in digizuite",
						nameData: null,
						pos: 34433
					},
					{
						state: "incomplete",
						idChecklist: "59e7a87a2917a28dfcab0a6f",
						id: "59e7a89550618611194ee89e",
						name: "scan and organize the content in sitecore",
						nameData: null,
						pos: 51286
					},
					{
						state: "incomplete",
						idChecklist: "59e7a87a2917a28dfcab0a6f",
						id: "59e7a89aa55efeb3e7f4e1f0",
						name: "enhance the content (inset photos & links)",
						nameData: null,
						pos: 68415
					}
				]
			},
			{
				id: "59e7a8aabd0c9ac74b3278b9",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7a8318153dbfee6ceb8fe",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7a8aabd0c9ac74b3278b9",
						id: "59e7a8e961956801ececc2b8",
						name: "Use the pipe if the location is a combo, the images for both sites will be utilized in the primary site that comes before the | pipe in sitecore",
						nameData: null,
						pos: 17151
					},
					{
						state: "incomplete",
						idChecklist: "59e7a8aabd0c9ac74b3278b9",
						id: "59e7a8f83faf908c85e22122",
						name: "List the image name in order somewhere",
						nameData: null,
						pos: 33752
					},
					{
						state: "incomplete",
						idChecklist: "59e7a8aabd0c9ac74b3278b9",
						id: "59e7a909c98498f63ac3e86a",
						name: "For standalone cemetery sites choose an exterior shot like the entrance for the hero image, for the main gallery image choose an interior shot like a bright mausoleum",
						nameData: null,
						pos: 50690
					}
				]
			},
			{
				id: "59e7a91cdf83d0ca7128d022",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7a83c68145b10cc02371d",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7a91cdf83d0ca7128d022",
						id: "59e7a9227eb6f12a45e5180c",
						name: "Cut the text from the content section and place it in the intro section",
						nameData: null,
						pos: 17123
					}
				]
			},
			{
				id: "59e7a932c10ee0ff580ebce6",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7a8463038253bc379bd79",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7a932c10ee0ff580ebce6",
						id: "59e7a934a6f0326f9a4153a9",
						name: "remove the empty p tag at the beginning of the content in the html editor",
						nameData: null,
						pos: 17331
					},
					{
						state: "incomplete",
						idChecklist: "59e7a932c10ee0ff580ebce6",
						id: "59e7a93f48bc5d4b84d6e20b",
						name: "Place images or related links of something they talk about in the content above or below the respective paragraph. Images should be left or right aligned, do this by right clicking on the image and choosing properties from the drop-down menu. Images should be left aligned, if there are numerous images, vary the alignment left and right. ",
						nameData: {},
						emoji: {},
						pos: 33757
					},
					{
						state: "incomplete",
						idChecklist: "59e7a932c10ee0ff580ebce6",
						id: "59e7a94c2364a8e06ab78e5b",
						name: "The inset images and links might have to be done for each language but only the text for each language’s site has to be moved around. The hero image and gallery will be utilized across the different languages.",
						nameData: null,
						pos: 50712
					},
					{
						state: "incomplete",
						idChecklist: "59e7a932c10ee0ff580ebce6",
						id: "59e7a955c9e2376f6ae22ca9",
						name: "Canadian locations will have content in en and ca, do not use images of american flags or links to us gov sites",
						nameData: null,
						pos: 67188
					},
					{
						state: "incomplete",
						idChecklist: "59e7a932c10ee0ff580ebce6",
						id: "59e7a961048b53796bf636b5",
						name: "If there are headings for paragraphs below history and they belong to the history section, they should be h3 tags",
						nameData: null,
						pos: 84201
					},
					{
						state: "incomplete",
						idChecklist: "59e7a932c10ee0ff580ebce6",
						id: "59e8d4d81683a41b031fe3bc",
						name: "make sure each paragraph has a p tag, some paragraphs may be missing the tag so update them if necessary. A bug where the see more link shows up above the paragraph, instead of below where it is needed has been reported and is caused by a paragraph missing it's p tag",
						nameData: {
							emoji: {}
						},
						pos: 25544
					},
					{
						state: "incomplete",
						idChecklist: "59e7a932c10ee0ff580ebce6",
						id: "59e8d5f6ab2b841c8c8065fc",
						name: "image descriptions may have an ampersand symbol that is being carried over incorrectly from digizuite",
						nameData: null,
						pos: 100669
					}
				]
			},
			{
				id: "59e7a9b70daccc3ebd9ef0a2",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7a8502de069c9b1e87051",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7a9b70daccc3ebd9ef0a2",
						id: "59e7a9c17efd046f97ea124f",
						name: "Make sure that the name makes sense for the bio image",
						nameData: null,
						pos: 17080
					},
					{
						state: "incomplete",
						idChecklist: "59e7a9b70daccc3ebd9ef0a2",
						id: "59e7a9d689a7e3e0ef148e40",
						name: "For reviewing bios, search the location in sitecore, you will see employee id’s in the results for the location.",
						nameData: null,
						pos: 33894
					},
					{
						state: "incomplete",
						idChecklist: "59e7a9b70daccc3ebd9ef0a2",
						id: "59e7a9dfea78500667e297ee",
						name: "Look up the employee id in the excel sheet to verify that they are an eligible employee. Editing the bio is required only if there is something wrong with the bio.",
						nameData: null,
						pos: 51271
					}
				]
			},
			{
				id: "59e7aa16d792891a1e55532a",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7a8596f003b6f70446a97",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7aa16d792891a1e55532a",
						id: "59e7aa218f264d12cb10b529",
						name: "select laura cross as the reviewer in the teamwork webapp",
						nameData: null,
						pos: 16710
					},
					{
						state: "incomplete",
						idChecklist: "59e7aa16d792891a1e55532a",
						id: "59e7aa2a8c5e4c7cb834c12d",
						name: "Publish the item in sitecore",
						nameData: null,
						pos: 33405
					},
					{
						state: "incomplete",
						idChecklist: "59e7aa16d792891a1e55532a",
						id: "59e7aa2e6aa8662a51e1a29b",
						name: "To free up the item In sitecore go to the home tab > edit button > check in",
						nameData: null,
						pos: 50127
					}
				]
			},
			{
				id: "59e7aa43f6a58b6e3560b0ba",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7a8642207bbff2e88d0a9",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7aa43f6a58b6e3560b0ba",
						id: "59e7aa4808582d973100fd51",
						name: "check off the step 1 task when you have started it",
						nameData: null,
						pos: 16578
					},
					{
						state: "incomplete",
						idChecklist: "59e7aa43f6a58b6e3560b0ba",
						id: "59e7aa50e7edce1b4dd10470",
						name: "check off the started task",
						nameData: null,
						pos: 33320
					},
					{
						state: "incomplete",
						idChecklist: "59e7aa43f6a58b6e3560b0ba",
						id: "59e7aa5874a27110ce1abbfb",
						name: "assign laura cross as the reviewer",
						nameData: null,
						pos: 49858
					},
					{
						state: "incomplete",
						idChecklist: "59e7aa43f6a58b6e3560b0ba",
						id: "59e7aa5e0d362ac619fc85cb",
						name: "The reviewer checks off when they are done. If there is trouble with this process ask erica or james to revise it.",
						nameData: null,
						pos: 66505
					}
				]
			},
			{
				id: "59e7acc32bf63de0af479434",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7acc32bf63de0af47942e",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479434",
						id: "59e7acc32bf63de0af479435",
						name: "review assigned location",
						nameData: null,
						pos: 17198
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479434",
						id: "59e7acc32bf63de0af479436",
						name: "curate the photos in digizuite",
						nameData: null,
						pos: 34433
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479434",
						id: "59e7acc32bf63de0af479437",
						name: "scan and organize the content in sitecore",
						nameData: null,
						pos: 51286
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479434",
						id: "59e7acc32bf63de0af479438",
						name: "enhance the content (inset photos & links)",
						nameData: null,
						pos: 68415
					}
				]
			},
			{
				id: "59e7acc32bf63de0af479439",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7acc32bf63de0af47942f",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479439",
						id: "59e7acc32bf63de0af47943a",
						name: "Make sure that the name makes sense for the bio image",
						nameData: null,
						pos: 17080
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479439",
						id: "59e7acc32bf63de0af47943b",
						name: "For reviewing bios, search the location in sitecore, you will see employee id’s in the results for the location.",
						nameData: null,
						pos: 33894
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479439",
						id: "59e7acc32bf63de0af47943c",
						name: "Look up the employee id in the excel sheet to verify that they are an eligible employee. Editing the bio is required only if there is something wrong with the bio.",
						nameData: null,
						pos: 51271
					}
				]
			},
			{
				id: "59e7acc32bf63de0af47943d",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7acc32bf63de0af47942d",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af47943d",
						id: "59e7acc32bf63de0af47943e",
						name: "Use the pipe if the location is a combo, the images for both sites will be utilized in the primary site that comes before the | pipe in sitecore",
						nameData: null,
						pos: 17151
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af47943d",
						id: "59e7acc32bf63de0af47943f",
						name: "List the image name in order somewhere",
						nameData: null,
						pos: 33752
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af47943d",
						id: "59e7acc32bf63de0af479440",
						name: "For standalone cemetery sites choose an exterior shot like the entrance for the hero image, for the main gallery image choose an interior shot like a bright mausoleum",
						nameData: null,
						pos: 50690
					}
				]
			},
			{
				id: "59e7acc32bf63de0af479441",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7acc32bf63de0af479430",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479441",
						id: "59e7acc32bf63de0af479442",
						name: "remove the empty p tag at the beginning of the content in the html editor",
						nameData: null,
						pos: 17331
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479441",
						id: "59e7acc32bf63de0af479443",
						name: "Place images or related links of something they talk about above or below the paragraph, wrapping and spacing should take care of itself but it may be buggy, don’t worry about it",
						nameData: null,
						pos: 33757
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479441",
						id: "59e7acc32bf63de0af479444",
						name: "The inset images and links might have to be done for each language but only the text for each language’s site has to be moved around. The hero image and gallery will be utilized across the different languages.",
						nameData: null,
						pos: 50712
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479441",
						id: "59e7acc32bf63de0af479445",
						name: "Canadian locations will have content in en and ca, do not use images of american flags or links to us gov sites",
						nameData: null,
						pos: 67188
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479441",
						id: "59e7acc32bf63de0af479446",
						name: "If there are headings for paragraphs below history and they belong to the history section, they should be h3 tags",
						nameData: null,
						pos: 84201
					}
				]
			},
			{
				id: "59e7acc32bf63de0af479447",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7acc32bf63de0af479432",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479447",
						id: "59e7acc32bf63de0af479448",
						name: "check off the step 1 task when you have started it",
						nameData: null,
						pos: 16578
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479447",
						id: "59e7acc32bf63de0af479449",
						name: "check off the started task",
						nameData: null,
						pos: 33320
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479447",
						id: "59e7acc32bf63de0af47944a",
						name: "assign laura cross as the reviewer",
						nameData: null,
						pos: 49858
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479447",
						id: "59e7acc32bf63de0af47944b",
						name: "The reviewer checks off when they are done. If there is trouble with this process ask erica or james to revise it.",
						nameData: null,
						pos: 66505
					}
				]
			},
			{
				id: "59e7acc32bf63de0af47944c",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7acc32bf63de0af479433",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af47944c",
						id: "59e7acc32bf63de0af47944d",
						name: "select laura cross as the reviewer in the teamwork webapp",
						nameData: null,
						pos: 16710
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af47944c",
						id: "59e7acc32bf63de0af47944e",
						name: "Publish the item in sitecore",
						nameData: null,
						pos: 33405
					},
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af47944c",
						id: "59e7acc32bf63de0af47944f",
						name: "To free up the item In sitecore go to the home tab > edit button > check in",
						nameData: null,
						pos: 50127
					}
				]
			},
			{
				id: "59e7acc32bf63de0af479450",
				name: "Checklist",
				idBoard: "59e4d6011ec4404c12e0e260",
				idCard: "59e7acc32bf63de0af479431",
				pos: 16384,
				limits: {
					checkItems: {
						perChecklist: {
							status: "ok",
							disableAt: 190,
							warnAt: 180
						}
					}
				},
				checkItems: [
					{
						state: "incomplete",
						idChecklist: "59e7acc32bf63de0af479450",
						id: "59e7acc32bf63de0af479451",
						name: "Cut the text from the content section and place it in the intro section",
						nameData: null,
						pos: 17123
					}
				]
			}
		],
		memberships: [
			{
				id: "59e4d6011ec4404c12e0e261",
				idMember: "58dd3e262c745d20e675ec3a",
				memberType: "admin",
				unconfirmed: false,
				deactivated: false
			}
		],
		pluginData: []
	};

	//checklists checkItems name.   cards > idChecklists

	var cards = _.find(a.cards, (card)=>{
		console.log(card)
		if(card.idList === "59e655c16c4d18ca18914bb1"){
			return card
		}
	})

	var checklists = _.find(a.checklists, (checklist)=>{


	})
	console.log(cards);
};

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init();
app();
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
