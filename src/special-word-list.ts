export interface TwitterUser {
    username: string,
    description: string,
}

export const twitterUserList = new Map<string, TwitterUser>([
	[
		"まふまふ",
		{
			description: "高低差のある歌声、繊細かつ少々難解な歌詞、独特な世界観の楽曲を作る。",
			username: "uni_mafumafu",
		},
	],
])
